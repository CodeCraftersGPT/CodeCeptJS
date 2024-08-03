// tests/example_test.js
Feature('Example');

Scenario('test example.com', ({ I }) => {
  I.amOnPage('https://example.com');
  I.waitForElement('h1', 10); // Wait for the element 'h1' to appear, with a timeout of 10 seconds
  I.see('Example Domain');
  I.click('More information...');
  I.waitForNavigation(); // Wait for the navigation to complete
  I.seeInCurrentUrl('iana.org');
});