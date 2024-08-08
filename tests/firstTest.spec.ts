import { test, expect } from '@playwright/test';

test.beforeEach(async({page}) => {
  await page.goto('/');
})

test('a/b test', async ({ page }) => {
  // Not sure what this example does, so using it as a base for my tests.
  await expect(page.locator('.heading')).toHaveText('Welcome to the-internet');
  await page.locator('ul li a[href="/abtest"]').click();
  await expect(page.locator('h3')).toHaveText('A/B Test Control')
});

test('add/remove elements', async({page}) =>{
  // Test example for adding and removing elements
  await page.locator('ul li [href="/add_remove_elements/"]').click();
  await expect(page.getByRole('button', {name: 'Delete'})).toBeHidden()
  await page.getByRole('button', {name: 'Add Element'}).click()
  await expect(page.getByRole('button', {name: 'Delete'})).toBeVisible()
  await page.getByRole('button', {name: 'Delete'}).click()
  await expect(page.getByRole('button', {name: 'Delete'})).toBeHidden()

})
