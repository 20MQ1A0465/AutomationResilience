import { test, expect } from '@playwright/test';
import { loginAsStandardUser } from '../../helpers/auth.helper.js';

test('Complete purchase flow works @e2e', async ({ page }) => {
  test.setTimeout(120000);

  await loginAsStandardUser(page);

  // Add product
  await page.getByRole('button', { name: /add to cart/i }).first().click();

  // Go to cart
  await page.locator('.shopping_cart_link').click();
  await expect(page).toHaveURL(/cart/);

  // Checkout
  await page.locator('[data-test="checkout"]').click();
  await expect(page).toHaveURL(/checkout-step-one/);

  // User details
  await page.fill('[data-test="firstName"]', 'Test');
  await page.fill('[data-test="lastName"]', 'User');
  await page.fill('[data-test="postalCode"]', '12345');
  await page.click('[data-test="continue"]');

  // ✅ FINAL business validation ONLY
  await page.click('[data-test="finish"]');
  await expect(page.locator('.complete-header')).toBeVisible();
});