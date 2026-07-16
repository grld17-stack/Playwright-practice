// @ts-check
import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config =({
  testDir: './tests',
  timeout: 10000,
  expect: {

    timeout: 5000

  },

  fullyParallel: true,
 
  reporter: 'html',
 
  use: {

    browserName: 'chromium',
    headless: false,
    trace: 'on',
    screenshot: 'on'

   
  
  },


});

module.exports = config
