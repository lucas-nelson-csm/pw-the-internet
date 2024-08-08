import { Page } from '@playwright/test';
import { HomePage } from './homePage';
import { AddRemoveElementsPage } from './addRemoveElementsPage';

export class PageManager {
    private readonly page: Page;
    private readonly homePage: HomePage;
    private readonly addRemoveElementsPage: AddRemoveElementsPage;

    constructor(page: Page) {
        this.page = page;
        this.homePage = new HomePage(this.page);
        this.addRemoveElementsPage = new AddRemoveElementsPage(this.page);
    }

    navigateTo() {
        return this.homePage;
    }

    navigateToAddRemoveElementsPage() {
        return this.addRemoveElementsPage;
    }
}
