import { Page } from '@playwright/test'

export class HelperBase{

    readonly page: Page
    
    constructor(page: Page){
        this.page = page
    }

    async waitForNumberOfSeconds(timeInNumberOfSeconds: number){
        await this.page.waitForTimeout(timeInNumberOfSeconds * 1000)
    }
}