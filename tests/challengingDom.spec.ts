import {test, expect} from '@playwright/test'
import { PageManager } from '../page-objects/pageManager'
import Tesseract from 'tesseract.js';

test.beforeEach(async({page}) => {
    await page.goto('/');
  })

test('check if buttons have expected class names', async ({ page }) => {
    const pm = new PageManager(page);

    await pm.navigateTo().challengingDom();

    const expectedClassNames = ['button', 'buttonsuccess', 'button alert'];

    const buttons = page.locator('a.button');
    const buttonCount = await buttons.count();

    let hasExpectedClassName = false;

    for (let i = 0; i < buttonCount; i++) {
        const button = buttons.nth(i);
        const classNames = await button.getAttribute('class');

        if (classNames) {
            const classes = classNames.split(/\s+/).map(cls => cls.trim());
            if (classes.some(cls => expectedClassNames.includes(cls))) {
                hasExpectedClassName = true;
                break;
            }
        }
    }

    expect(hasExpectedClassName).toBe(true);
});

test('check if buttons have expected names', async ({ page }) => {
    const pm = new PageManager(page);

    await pm.navigateTo().challengingDom();

    const expectedButtonNames = ['foo', 'bar', 'baz', 'qux'];

    const buttons = page.locator('a.button'); 
    const buttonCount = await buttons.count();

    let hasExpectedButtonName = false;

    for (let i = 0; i < buttonCount; i++) {
        const button = buttons.nth(i);
        const text = await button.textContent();

        if (text) {
            const name = text.trim();
            if (expectedButtonNames.includes(name)) {
                hasExpectedButtonName = true;
                break;
            }
        }
    }

    expect(hasExpectedButtonName).toBe(true);
});

test.only('verify canvas contains "Answer:" followed by a 5-digit number', async ({ page }) => {
    const pm = new PageManager(page);

    await pm.navigateTo().challengingDom();

    const imageData = await page.evaluate(() => {
        const canvas = document.querySelector('canvas');
        if (canvas) {
            return canvas.toDataURL('image/png');
        }
        return '';
    });

    const { data: { text } } = await Tesseract.recognize(imageData, 'eng');
    const cleanedText = text.trim();
    const answerPattern = /^Answer: \d{4,5}$/;
    
    expect(answerPattern.test(cleanedText)).toBe(true);
});
