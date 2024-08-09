import {test, expect} from '@playwright/test'
import { PageManager } from '../page-objects/pageManager'
import dotenv from 'dotenv';

dotenv.config(); 

test.use({
    // Set up the HTTP credentials
    httpCredentials: {
        username: process.env.NOUSERNAME || '',
        password: process.env.NOPASSWORD || '',
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