import { test, expect } from '@playwright/test'

test('homepage visual regression', async ({ page }) => {
  await page.goto('https://example.com')
  expect(await page.screenshot()).toMatchSnapshot('homepage.png')
})