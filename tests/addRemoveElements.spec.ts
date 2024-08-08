import {test, expect} from '@playwright/test'

test.beforeEach(async({page}) => {
    await page.goto('/');
  })

test('initial state of elements', async({page}) => {
    const addRemoveElementExample = page.locator('ul li [href="/add_remove_elements/"]');
    const deleteElementButton = page.getByRole('button', {name: 'Delete'});

    await addRemoveElementExample.click();
    await expect(deleteElementButton).toBeHidden(); // Ensure no delete buttons are present initially
});

test('add/remove 1 element', async({page}) =>{
    // Test example for adding and removing elements
    const addRemoveElementExample = page.locator('ul li [href="/add_remove_elements/"]')
    const addElementButton = page.getByRole('button', {name: 'Add Element'})
    const deleteElementButton = page.getByRole('button', {name: 'Delete'})

    await addRemoveElementExample.click();
    await expect(deleteElementButton).toBeHidden()
    await addElementButton.click()
    await expect(deleteElementButton).toBeVisible()
    await deleteElementButton.click()
    await expect(deleteElementButton).toBeHidden()
  
  })

test('add multiple elements and verify count', async({page}) => {
    const addRemoveElementExample = page.locator('ul li [href="/add_remove_elements/"]');
    const randomNumber = 5; // Fixed number for predictability in this test
    const addElementButton = page.getByRole('button', {name: 'Add Element'});
    const deleteElementButton = page.getByRole('button', {name: 'Delete'});

    await addRemoveElementExample.click();

    for (let i = 0; i < randomNumber; i++) {
        await addElementButton.click();
    }

    const count = await deleteElementButton.count();
    await expect(count).toEqual(randomNumber);
});

  
test('add/remove multiple elements', async({page}) =>{
    const addRemoveElementExample = page.locator('ul li [href="/add_remove_elements/"]')
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    const addElementButton = page.getByRole('button', {name: 'Add Element'})
    const deleteElementButton = page.getByRole('button', {name: 'Delete'})
    
    await addRemoveElementExample.click();

    for (let i=1; i <= randomNumber; i++) {
        await addElementButton.click()
    }
    const count = await deleteElementButton.count();
    await expect(count).toEqual(randomNumber)

    for (let i=1; i <= randomNumber; i++) {
        await deleteElementButton.first().click()
    }
    await expect(deleteElementButton).toBeHidden()


})

test('no elements added or removed', async({page}) => {
    const addRemoveElementExample = page.locator('ul li [href="/add_remove_elements/"]');
    const deleteElementButton = page.getByRole('button', {name: 'Delete'});

    await addRemoveElementExample.click();
    await expect(deleteElementButton).toBeHidden(); // Ensure no delete buttons are visible initially

    // No add or delete operations
    await expect(deleteElementButton).toBeHidden();
});
