// give pupetter code for example test
// core puppeteer code

const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 50,
        devtools: true,
    });
    const page = await browser.newPage();
    await page.goto('https://example.com');
    await page.waitForSelector('h1');
    await page.waitForTimeout(5000);
    await browser.close();

    // code for he click on 'More information...' and wait for navigation to complete
    await page.click('a');
    await page.waitForNavigation();

    // code to check if the current url is 'iana.org'
    const url = page.url();
    if (url === 'https://www.iana.org/domains/reserved') {
        console.log('URL is correct');
    } else {
        console.log('URL is incorrect');
    }
}
)();
