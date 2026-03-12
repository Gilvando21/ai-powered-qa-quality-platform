import { test, expect } from '@playwright/test'

test('GET users list', async ({ request }) => {
  const response = await request.get('/users')
  expect(response.status()).toBe(200)
  const users = await response.json()
  expect(users.length).toBeGreaterThan(0)
})