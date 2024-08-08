import {test, expect} from '@playwright/test'

test.beforeEach(async({page}) => {
    await page.goto('/');
  })

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
  
test('add/remove multiple elements', async({page}) =>{
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    const addElementButton = page.getByRole('button', {name: 'Add Element'})
    const deleteElementButton = page.getByRole('button', {name: 'Delete'})

    for (let i=1; i <= randomNumber; i++) {
        await page.locator('ul li [href="/add_remove_elements/"]').click();
    }
})