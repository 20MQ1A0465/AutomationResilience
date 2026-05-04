// @ts-check
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  fullyParallel: false,   // 🔴 STOP parallel
  workers: 1,             // ✅ ONE test at a time
  retries: 0,

  reporter: 'html',

  timeout: 60000,         // ✅ More time for slow demo

  use: {
    headless: false,      // ✅ Always open browser
    trace: 'on',
    launchOptions: {
      slowMo: 1500,       // ✅ Smooth but not too slow
    },
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
