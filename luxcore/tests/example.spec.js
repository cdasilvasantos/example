const { test, expect } = require('@playwright/test');

const websiteURL = 'http://localhost:3000';

// Expected constants
const expectedTitle = 'Luxcore';
const expectedLogoText = 'LuxCore';
const expectedHeroTitle = 'Where culinary craftsmanship meets timeless elegance';
const expectedHeroSubText = 'Join our members club for exclusive offers.';
const expectedHeroLinkCount = 1;
const expectedAboutTitle = 'At LuxCore Steakhouse , we  strive to craft an exquisite haven where you and your cherished companions indulge in moments of serenity. With unwavering dedication, we curate an ambiance where each visit becomes a plate of memories, and our culinary artistry, an unparalleled testament to excellence. Welcome to a sanctuary of fine dining, where every dish is a masterpiece and every experience is etched in the elegance of shared stories.';
const expectedMetaDescription = 'Luxury steakhouse at its core';
const expectedNavs = ['Menu', 'About', 'Club'];


test.beforeEach(async ({ page }) => {
  await page.goto(websiteURL);
});

test('Check Page Title', async ({ page }) => {
  const title = await page.title();
  expect(title).toBe(expectedTitle);
});

test('Check Logo in Header', async ({ page }) => {
  const logoText = await page.locator('.logo').textContent();
  expect(logoText).toBe(expectedLogoText);
});


test('Check Hero Section', async ({ page }) => {
  expect(await page.locator('.calltoaction h1').textContent()).toBe(expectedHeroTitle);
  expect(await page.locator('.calltoaction p').textContent()).toBe(expectedHeroSubText);
});

test('Check Links in Hero Section', async ({ page }) => {
  const linkCount = await page.locator('.calltoaction .btn').count();
  expect(linkCount).toBe(expectedHeroLinkCount);
});



test('Check About Section', async ({ page }) => {
  expect(await page.locator('.about-text').textContent()).toBe(expectedAboutTitle);
});



test('Check SEO Meta Description', async ({ page }) => {
  const metaDescription = await page.getAttribute('meta[name="description"]', 'content');
  expect(metaDescription).toBe(expectedMetaDescription);
});



test('Check All Navigation Links', async ({ page }) => {
  const navLinks = await page.locator('.menu-item');
  const count = await navLinks.count();

  for (let i = 0; i < count; i++) {
    const link = navLinks.nth(i);
    expect(await link.isVisible()).toBe(true);
  }
});



test('Check All Footer Links', async ({ page }) => {
  const footerLinks = await page.locator('.footer-link');
  const count = await footerLinks.count();

  for (let i = 0; i < count; i++) {
    const link = footerLinks.nth(i);
    expect(await link.isVisible()).toBe(true);
  }
});



