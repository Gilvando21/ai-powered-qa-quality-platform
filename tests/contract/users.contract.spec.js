import { test, expect } from '@playwright/test'

test('Validate user contract', async ({ request }) => {
  const response = await request.get('/users/1')
  const body = await response.json()

  expect(body).toHaveProperty('id')
  expect(body).toHaveProperty('name')
  expect(body).toHaveProperty('email')
})