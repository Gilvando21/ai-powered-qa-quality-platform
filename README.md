
# 🚀 AI-Powered QA Quality Platform

A modern **Quality Engineering demo platform** that demonstrates how automated testing,
AI-assisted test generation, performance validation, security scanning and observability
can be integrated into a single QA ecosystem.

This repository was created as a **proof-of-concept QA automation platform** to simulate
how modern engineering teams structure scalable test automation frameworks.

The project combines multiple testing layers and quality practices used in real
software delivery pipelines.

---

# 🎥 Test Execution Demo

Place a demo recording of the automated tests in:

docs/tests-demo.gif

Example:

![Test Execution Demo](docs/tests-demo.gif)

---

# 🧠 AI-Assisted Test Generation

This project includes an experimental module capable of generating test scenarios
from **Swagger / OpenAPI specifications**.

Workflow:

1. API schema is parsed
2. AI analyzes endpoints
3. Test scenarios are generated automatically
4. Playwright executes the generated tests

Run:

npm run ai-tests

---

# 🧩 Test Strategy (Test Pyramid)

| Layer | Purpose |
|------|--------|
| UI Tests | End‑to‑end validation |
| API Tests | Endpoint validation |
| Contract Tests | Schema validation |
| Visual Tests | UI regression detection |
| AI Generated Tests | Experimental scenarios |

---

# 🏗 Architecture

Automation → CI/CD → Monitoring

Tools used:

Playwright  
OpenAI  
k6  
OWASP ZAP  
GitHub Actions  
Grafana + Prometheus  

---

# 🧰 Technology Stack

Playwright  
Node.js  
OpenAI API  
k6  
OWASP ZAP  
GitHub Actions  
Grafana  
Prometheus  
Docker

---

# 📂 Project Structure

ai-powered-qa-quality-platform

tests/
  ui/
  api/
  contract/
  visual/
  generated/

pages/
ai/
performance/
monitoring/
docker/
api-schema/
utils/

---

# ▶ Running the Project

Install dependencies

npm install

Install browsers

npx playwright install

Run tests

npm test

---

# 📊 Monitoring

Start monitoring stack

npm run monitoring

Grafana

http://localhost:3000

---

# 📌 Author

Gilvando Matos  
QA Automation Engineer / QA Lead

LinkedIn  
https://www.linkedin.com/in/gilvando-matos-3a259821/
