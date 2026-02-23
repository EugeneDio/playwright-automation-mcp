/**
 * Sample Web UI Tests using Playwright
 * Demonstrates UI automation capabilities
 */

import { test, expect } from '@playwright/test';
import type { Page } from '@playwright/test';

test.describe('Example Website Tests', () => {
  test('should navigate to example.com', async ({ page }: { page: Page }) => {
    await page.goto('https://example.com');

    // Verify page title
    const title = await page.title();
    expect(title).toBe('Example Domain');

    // Verify main heading exists
    const heading = await page.locator('h1');
    await expect(heading).toContainText('Example Domain');
  });

  test('should verify page content', async ({ page }: { page: Page }) => {
    await page.goto('https://example.com');

    // Get the paragraph text
    const paragraph = await page.locator('p').first();
    const text = await paragraph.textContent();
    expect(text).toBeTruthy();

    // Take a screenshot
    await page.screenshot({ path: 'test-results/example-page.png' });
  });

  test('should check for interactive elements', async ({ page }: { page: Page }) => {
    await page.goto('https://example.com');

    // Verify the page has the expected structure
    const body = await page.locator('body');
    await expect(body).toBeVisible();

    // Verify description text appears on page
    const description = await page.locator('p').first();
    const text = await description.textContent();
    expect(text).toContain('examples');
  });
});

test.describe('API Response Tests', () => {
  test('should test API with mock data', async ({ page }: { page: Page }) => {
    // Intercept API calls
    await page.route('**/api/**', (route: any) => {
      route.abort();
    });

    // Your API testing logic here
    const response = await page.request.get('https://jsonplaceholder.typicode.com/users/1');
    expect(response.status()).toBe(200);

    const data = (await response.json()) as any;
    expect(data.id).toBe(1);
    expect(data.name).toBeTruthy();
  });
});
