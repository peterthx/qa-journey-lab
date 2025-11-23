import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    baseURL: 'http://srv946485.hstgr.cloud:3000',
  },
  testDir: 'tests',
  timeout: 30000
});
