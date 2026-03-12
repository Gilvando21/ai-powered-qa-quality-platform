const { defineConfig } = require('@playwright/test')

module.exports = defineConfig({
 reporter: [
  ['list'],
  ['allure-playwright']
 ],
 use: {
  baseURL: 'https://jsonplaceholder.typicode.com'
 }
})