import type { Page } from '@playwright/test';
import { expect } from '@playwright/test';

/**
 * Helper utilities for Playwright web tests
 */
export class WebTestHelper {
  /**
   * Navigate to URL and wait for page load
   */
  static async navigateTo(page: Page, url: string) {
    await page.goto(url, { waitUntil: 'networkidle' });
  }

  /**
   * Fill form field with value
   */
  static async fillField(page: Page, selector: string, value: string) {
    await page.fill(selector, value);
  }

  /**
   * Click on element
   */
  static async click(page: Page, selector: string) {
    await page.click(selector);
  }

  /**
   * Take screenshot
   */
  static async takeScreenshot(page: Page, filename: string) {
    await page.screenshot({ path: `screenshots/${filename}.png` });
  }

  /**
   * Wait for element to be visible
   */
  static async waitForElement(page: Page, selector: string, timeout = 5000) {
    await page.waitForSelector(selector, { timeout });
  }

  /**
   * Get text from element
   */
  static async getText(page: Page, selector: string) {
    return await page.textContent(selector);
  }

  /**
   * Verify element is visible
   */
  static async verifyVisible(page: Page, selector: string) {
    const element = await page.$(selector);
    expect(element).not.toBeNull();
  }
}

export default WebTestHelper;
