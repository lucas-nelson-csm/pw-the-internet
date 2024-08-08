import {test, expect} from '@playwright/test'
import { PageManager } from '../page-objects/pageManager'

test.use({
    // Set up the HTTP credentials
    httpCredentials: {
        username: '',
        password: '',
    }
});

test.beforeEach(async({page}) => {
    page.goto('/')
})

test('sign in with basic auth', async({page}) =>{
    const pm = new PageManager(page)
    await pm.navigateTo().basicAuth()
    await expect(page.locator('body')).toContainText('Not authorized ')
})