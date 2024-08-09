import {test, expect} from '@playwright/test'
import { PageManager } from '../page-objects/pageManager'

test.beforeEach(async({page}) => {
    await page.goto('/');
  })

test('check broken images', async({page}) =>{
    const pm = new PageManager(page);

    await pm.navigateTo().brokenImages();

    const image1 = page.locator('#content img:nth-of-type(1)');
    const image2 = page.locator('#content img:nth-of-type(2)');
    const image3 = page.locator('#content img:nth-of-type(3)');

    async function isImageBroken(imageLocator) {
        return await imageLocator.evaluate(img => img.naturalWidth === 0 || img.naturalHeight === 0);
    }

    const isImage1Broken = await isImageBroken(image1);
    const isImage2Broken = await isImageBroken(image2);
    const isImage3Broken = await isImageBroken(image3);


    expect(isImage1Broken).toBe(true);
    expect(isImage2Broken).toBe(true);
    expect(isImage3Broken).toBe(false);
})