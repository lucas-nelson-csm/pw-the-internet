import { Locator, Page } from "@playwright/test";
import { HelperBase } from "./helperBase";

export class HomePage extends HelperBase {
    private readonly abTestingLocator: Locator;
    private readonly addRemoveElementLocator: Locator;

    constructor(page: Page) {
        super(page);
        this.abTestingLocator = page.locator('ul li a[href="/abtest"]');
        this.addRemoveElementLocator = page.locator('ul li [href="/add_remove_elements/"]');
    }

    async navigateToAbTesting() {
        await this.navigateTo(this.abTestingLocator);
    }

    async navigateToAddRemoveElements() {
        await this.navigateTo(this.addRemoveElementLocator);
    }

    private async navigateTo(locator: Locator) {
        await locator.click();
    }
}
