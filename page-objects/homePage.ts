import{ Locator, Page } from "@playwright/test";

export class HomePage{
    readonly abTestingExample: Locator


    constructor(page: Page){
        this.abTestingExample = page.locator('ul li a[href="/abtest"]')

    }



}