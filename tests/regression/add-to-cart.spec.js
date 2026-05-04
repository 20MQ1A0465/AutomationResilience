import { test, expect } from '@playwright/test';
import { loginAsStandardUser } from '../../helpers/auth.helper.js';

test('User can add product to cart @regression', async ({ page }) => {
  await loginAsStandardUser(page);

  await page.getByRole('button', { name: /add to cart/i }).first().click();
  await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
});