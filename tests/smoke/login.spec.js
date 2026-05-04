import { test, expect } from '@playwright/test';
import { loginAsStandardUser } from '../../helpers/auth.helper.js';

test('User can login successfully @smoke', async ({ page }) => {
  await loginAsStandardUser(page);

  await expect(page.getByText('Products')).toBeVisible();
});