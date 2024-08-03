// give me playwright code for the same test

const { test, expect } = require('@playwright/test');

test('test example.com', async ({ page }) => {
    await page.goto('https://example.com');
    await page.waitForSelector('h1');
    await page.waitForTimeout(5000);
    // give code to click on 'More information...' and wait for navigation to complete

    await page.click('text=More information...');
    await page.waitForNavigation();
    // give code to check if the current url is 'iana.org'
    expect(page.url()).toBe('https://www.iana.org/domains/reserved');
    
    }
);

