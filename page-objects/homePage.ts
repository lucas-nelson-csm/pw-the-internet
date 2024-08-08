import{ Locator, Page } from "@playwright/test";
import { HelperBase } from "./helperBase";


export class HomePage extends HelperBase{
    readonly abTestingExampleLocator: Locator


    constructor(page: Page){
        super(page)
        this.abTestingExampleLocator = page.locator('ul li a[href="/abtest"]')

    }
    async abTestingExample(){
        await this.selectGroupMenuItem('ul li a[href="/abtest"]')
        await this.abTestingExampleLocator.click();
        await this.waitForNumberOfSeconds(2)
    }

    private async selectGroupMenuItem(groupItemTitle: string){
        const groupMenuItem = this.page.locator(groupItemTitle)
        await groupMenuItem.click()
}
}