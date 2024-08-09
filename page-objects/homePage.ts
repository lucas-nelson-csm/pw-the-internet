import { Locator, Page } from "@playwright/test";
import { HelperBase } from "./helperBase";

export class HomePage extends HelperBase {
    private readonly abTestingLocator: Locator;
    private readonly addRemoveElementLocator: Locator;
    private readonly basicAuthLocator: Locator;
    private readonly brokenImagesLocator: Locator;
    private readonly challengingDomLocator: Locator;
    private readonly checkboxesLocator: Locator;
    private readonly contextMenuLocator: Locator;
    private readonly digestAuthenticationLocator: Locator;
    private readonly disappearingElementsLocator: Locator;
    private readonly dragAndDropLocator: Locator;
    private readonly dropdownLocator: Locator;
    private readonly dynamicContentLocator: Locator;
    private readonly dynamicControlsLocator: Locator;
    private readonly dynamicLoadingLocator: Locator;
    private readonly entryAdLocator: Locator;
    private readonly exitIntentLocator: Locator;
    private readonly fileDownloadLocator: Locator;
    private readonly fileUploadLocator: Locator;
    private readonly floatingMenuLocator: Locator;
    private readonly forgotPasswordLocator: Locator;
    private readonly formAuthenticationLocator: Locator;
    private readonly framesLocator: Locator;

    constructor(page: Page) {
        super(page);
        this.abTestingLocator = page.locator('ul li a[href="/abtest"]');
        this.addRemoveElementLocator = page.locator('ul li [href="/add_remove_elements/"]');
        this.basicAuthLocator = page.locator('ul li [href="/basic_auth"]');
        this.brokenImagesLocator = page.locator('ul li [href="/broken_images"]');
        this.challengingDomLocator = page.locator('ul li [href="/challenging_dom"]');
        this.checkboxesLocator = page.locator('ul li [href="/checkboxes"]');
        this.contextMenuLocator = page.locator('ul li [href="/context_menu"]');
        this.digestAuthenticationLocator = page.locator('ul li [href="/digest_auth"]');
        this.disappearingElementsLocator = page.locator('ul li [href="/disappearing_elements"]');
        this.dragAndDropLocator = page.locator('ul li [href="/drag_and_drop"]');
        this.dropdownLocator = page.locator('ul li [href="/dropdown"]');
        this.dynamicContentLocator = page.locator('ul li [href="/dynamic_content"]');
        this.dynamicControlsLocator = page.locator('ul li [href="/dynamic_controls"]');
        this.dynamicLoadingLocator = page.locator('ul li [href="/dynamic_loading"]');
        this.entryAdLocator = page.locator('ul li [href="/entry_ad"]');
        this.exitIntentLocator = page.locator('ul li [href="/exit_intent"]');
        this.fileDownloadLocator = page.locator('ul li [href="/download"]');
        this.fileUploadLocator = page.locator('ul li [href="/upload"]');
        this.floatingMenuLocator = page.locator('ul li [href="/floating_menu"]');
        this.forgotPasswordLocator = page.locator('ul li [href="/forgot_password"]');
        this.formAuthenticationLocator = page.locator('ul li [href="/login"]');
        this.framesLocator = page.locator('ul li [href="/frames"]');
    }

    async abTesting() {
        await this.navigateTo(this.abTestingLocator);
    }

    async addRemoveElements() {
        await this.navigateTo(this.addRemoveElementLocator);
    }

    async basicAuth() {
        await this.navigateTo(this.basicAuthLocator);
    }

    async brokenImages() {
        await this.navigateTo(this.brokenImagesLocator);
        await this.waitForNumberOfSeconds(2)
    }

    async challengingDom() {
        await this.navigateTo(this.challengingDomLocator);
        await this.waitForNumberOfSeconds(2)
    }

    async checkboxes() {
        await this.navigateTo(this.checkboxesLocator);
    }

    async contextMenu() {
        await this.navigateTo(this.contextMenuLocator);
    }

    async digestAuthentication() {
        await this.navigateTo(this.digestAuthenticationLocator);
    }

    async disappearingElements() {
        await this.navigateTo(this.disappearingElementsLocator);
    }

    async dragAndDrop() {
        await this.navigateTo(this.dragAndDropLocator);
    }

    async dropdown() {
        await this.navigateTo(this.dropdownLocator);
    }

    async dynamicContent() {
        await this.navigateTo(this.dynamicContentLocator);
    }

    async dynamicControls() {
        await this.navigateTo(this.dynamicControlsLocator);
    }

    async dynamicLoading() {
        await this.navigateTo(this.dynamicLoadingLocator);
    }

    async entryAd() {
        await this.navigateTo(this.entryAdLocator);
    }

    async exitIntent() {
        await this.navigateTo(this.exitIntentLocator);
    }

    async fileDownload() {
        await this.navigateTo(this.fileDownloadLocator);
    }

    async fileUpload() {
        await this.navigateTo(this.fileUploadLocator);
    }

    async floatingMenu() {
        await this.navigateTo(this.floatingMenuLocator);
    }

    async forgotPassword() {
        await this.navigateTo(this.forgotPasswordLocator);
    }

    async formAuthentication() {
        await this.navigateTo(this.formAuthenticationLocator);
    }

    async frames() {
        await this.navigateTo(this.framesLocator);
    }

    private async navigateTo(locator: Locator) {
        await locator.click();
    }
}
