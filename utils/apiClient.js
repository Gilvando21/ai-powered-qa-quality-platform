const axios = require("axios")

const client = axios.create({
 baseURL: "https://jsonplaceholder.typicode.com"
})

module.exports = client