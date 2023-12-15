const { test, expect } = require('@playwright/test');

test('Check add book page', async ({ page }) => {
    await page.goto('https://maria-abr-library-exam-prep.onrender.com/add-book');
    const form = await page.$('div');
    expect(form).toBeTruthy();
  });
  