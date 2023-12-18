// @ts-check
const { test, expect } = require('@playwright/test');

test('navbar rendering and toggle', async ({ page }) => {
  // Navigate to a sample page containing the Navbar component.
  await page.goto('http://localhost:3000');

  // Ensure the Navbar is rendered.
  const navbar = await page.waitForSelector('header');
  // @ts-ignore
  await expect(navbar).toBeVisible();

  // Check if the initial state of the navigation menu is hidden.
  const navMenu = await page.waitForSelector('.navbar-collapse');
  // @ts-ignore
  await expect(navMenu).not.toBeVisible();

  // Click on the navbar toggler to open the navigation menu.
  await page.click('.navbar-toggler');
  await page.waitForTimeout(500); // Add a small delay to allow the animation to complete.

  // Check if the navigation menu is now visible after clicking the toggler.
  // @ts-ignore
  await expect(navMenu).toBeVisible();

  // Click on the navbar toggler again to close the navigation menu.
  await page.click('.navbar-toggler');
  await page.waitForTimeout(500); // Add a small delay to allow the animation to complete.

  // Check if the navigation menu is hidden after clicking the toggler again.
  // @ts-ignore
  await expect(navMenu).not.toBeVisible();
});

test('navbar links', async ({ page }) => {
  // Navigate to a sample page containing the Navbar component.
  await page.goto('http://localhost:3000');

  // Click on the "Menu" link in the navbar.
  await page.click('nav.navbar-collapse a[href=""]');

  // Verify that the expected content for the "Menu" page is visible.
  // @ts-ignore
  await expect(page).toMatch('Menu Page Content');

  // Navigate back to the original page.
  await page.goBack();

  // Click on the "About" link in the navbar.
  await page.click('nav.navbar-collapse a[href=""]');

  // Verify that the expected content for the "About" page is visible.
  // @ts-ignore
  await expect(page).toMatch('About Page Content');

  // Navigate back to the original page.
  await page.goBack();

  // Click on the "Club" link in the navbar.
  await page.click('nav.navbar-collapse a[href=""]');

  // Verify that the expected content for the "Club" page is visible.
  // @ts-ignore
  await expect(page).toMatch('Club Page Content');
});
