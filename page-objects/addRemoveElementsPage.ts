import { Locator, Page, expect } from '@playwright/test';

export class AddRemoveElementsPage {
    readonly addElementButton: Locator;
    readonly deleteElementButtons: Locator;

    constructor(page: Page) {
        this.addElementButton = page.getByRole('button', { name: 'Add Element' });
        this.deleteElementButtons = page.locator('button', { hasText: 'Delete' });
    }

    async clickAddElement() {
        await this.addElementButton.click();
    }

    async getDeleteElementCount() {
        return await this.deleteElementButtons.count();
    }

    async clickDeleteElement(index: number = 0) {
        const deleteButtons = this.deleteElementButtons;
        if (await deleteButtons.count() > 0) {
            await deleteButtons.nth(index).click();
        } else {
            throw new Error('No delete buttons found to click.');
        }
    }

    async waitForDeleteElementHidden() {
        await expect(this.deleteElementButtons).toHaveCount(0);
    }

    async waitForDeleteElementVisible() {
        await expect(this.deleteElementButtons.first()).toBeVisible();
    }
}
