// @ts-check
import { test, expect } from '@playwright/test';

test.only('has title', async ({ page }) => {
  await page.goto('https://www.jumia.com.ng/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Jumia Nigeria/);
});

test.only('Cart link', async ({ page }) => {
  await page.goto('https://www.jumia.com.ng/cart/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Cart' }).click();

  // Expects page to have a heading with the name of Installation.
 // await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
  await expect(page).toHaveURL(/cart/);
  await expect(page.getByText('Your cart is empty!')).toBeVisible();


});
