import { test, expect } from '@playwright/test';
import { PageManager } from '../page-objects/pageManager';

test.beforeEach(async ({ page }) => {
    await page.goto('/');
});

test('initial state of elements', async ({ page }) => {
    const pm = new PageManager(page);
    const addRemovePage = pm.navigateToAddRemoveElementsPage();

    await pm.navigateToHomePage().navigateToAddRemoveElements()
    await addRemovePage.waitForDeleteElementHidden();
});

test('add/remove 1 element', async ({ page }) => {
    const pm = new PageManager(page);
    const addRemovePage = pm.navigateToAddRemoveElementsPage();

    await pm.navigateToHomePage().navigateToAddRemoveElements();

    // Ensure no delete buttons are visible initially
    await addRemovePage.waitForDeleteElementHidden();

    // Add an element and verify a delete button becomes visible
    await addRemovePage.clickAddElement();
    await addRemovePage.waitForDeleteElementVisible();

    // Remove the element and verify the delete button is hidden again
    await addRemovePage.clickDeleteElement();
    await addRemovePage.waitForDeleteElementHidden();
});
test('add multiple elements and verify count', async ({ page }) => {
    const pm = new PageManager(page);
    const addRemovePage = pm.navigateToAddRemoveElementsPage();
    const randomNumber = 5;

    await pm.navigateToHomePage().navigateToAddRemoveElements()

    for (let i = 0; i < randomNumber; i++) {
        await addRemovePage.clickAddElement();
    }

    const count = await addRemovePage.getDeleteElementCount();
    await expect(count).toEqual(randomNumber);
});

test('add/remove multiple elements', async ({ page }) => {
    const pm = new PageManager(page);
    const addRemovePage = pm.navigateToAddRemoveElementsPage();
    const randomNumber = Math.floor(Math.random() * 10) + 1;

    await pm.navigateToHomePage().navigateToAddRemoveElements();

    for (let i = 1; i <= randomNumber; i++) {
        await addRemovePage.clickAddElement();
    }

    const count = await addRemovePage.getDeleteElementCount();
    await expect(count).toEqual(randomNumber);

    for (let i = 0; i < randomNumber; i++) {
        await addRemovePage.clickDeleteElement(0); 
    }
    await addRemovePage.waitForDeleteElementHidden();
});