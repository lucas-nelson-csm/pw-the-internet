import {test, expect} from '@playwright/test'
import { PageManager } from '../page-objects/pageManager'
import dotenv from 'dotenv';

dotenv.config(); 

test.use({
    // Set up the HTTP credentials
    httpCredentials: {
        username: process.env.GOODUSERNAME || '',
        password: process.env.GOODPASSWORD || '',
    }
});

test.beforeEach(async({page}) => {
    page.goto('/')
})

test('sign in with basic auth', async({page}) =>{
    const pm = new PageManager(page)
    await pm.navigateTo().basicAuth()
})