import { Locator, Page } from "@playwright/test";
import { HelperBase } from "./helperBase";

export class HomePage extends HelperBase {
    private readonly abTestingLocator: Locator;
    private readonly addRemoveElementLocator: Locator;
    private readonly basicAuthLocator: Locator;

    constructor(page: Page) {
        super(page);
        this.abTestingLocator = page.locator('ul li a[href="/abtest"]');
        this.addRemoveElementLocator = page.locator('ul li [href="/add_remove_elements/"]');
        this.basicAuthLocator = page.locator('ul li [href="/basic_auth"]')
    }

    async abTesting() {
        await this.navigateTo(this.abTestingLocator);
    }

    async addRemoveElements() {
        await this.navigateTo(this.addRemoveElementLocator);
    }

    async basicAuth() {
        await this.navigateTo(this.basicAuthLocator)
    }

    private async navigateTo(locator: Locator) {
        await locator.click();
    }
}
