const fs = require("fs")
const OpenAI = require("openai")

const client = new OpenAI({
 apiKey: process.env.OPENAI_KEY
})

async function generateTests() {

 const swagger = fs.readFileSync("./api-schema/swagger.json", "utf8")

 const response = await client.chat.completions.create({
  model: "gpt-4o-mini",
  messages: [
   {
    role: "system",
    content: "You are a senior QA engineer generating Playwright API tests."
   },
   {
    role: "user",
    content: `Generate Playwright API tests based on this schema: ${swagger}`
   }
  ]
 })

 fs.writeFileSync(
  "./tests/generated/ai-tests.spec.js",
  response.choices[0].message.content
 )

 console.log("AI generated tests successfully")

}

generateTests()