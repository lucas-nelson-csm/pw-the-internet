import { test, expect } from '@playwright/test';
import { PageManager } from '../page-objects/pageManager';


test.beforeEach(async({page}) => {
  await page.goto('/');
})

test('a/b test', async ({ page }) => {
  // Not sure what this example does, so using it as a base for my tests.
  const pm = new PageManager(page)
  await expect(page.locator('.heading')).toHaveText('Welcome to the-internet');

  pm.navigateTo().abTesting()
  const headingText = await page.locator('h3').innerText();
  const expectedTexts = ['A/B Test Control', 'A/B Test Variation 1'];
  expect(expectedTexts).toContain(headingText);
});