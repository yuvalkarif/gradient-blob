import { expect, test } from '@nuxt/test-utils/playwright'

// Test for verifying the main page title
test.describe('Layout', () => {
  test('Main page should load with the correct title', async ({ page, goto }) => {
    await goto('/', { waitUntil: 'hydration' })
    await expect(page.locator('h1')).toHaveText('Gradient Blob Generator')
  })

  // Test for checking if the settings menu is initially open
  test('Settings menu should be open on initial page load', async ({ page, goto }) => {
    await goto('/', { waitUntil: 'hydration' })
    const menu = page.locator('data-testid=settings-menu')
    const menuBox = await menu.boundingBox()
    await expect(menuBox?.height).toBeGreaterThan(0)
  })
})
test.describe('Blob Wrapper', () => {
  const blobBlurSelector = 'data-testid=blob-blur'
  // Test for verifying the blob wrapper's visibility
  test('Blob wrapper should be visible on the page', async ({ page, goto }) => {
    await goto('/', { waitUntil: 'hydration' })
    const blobWrapper = page.locator(blobBlurSelector)
    const blobWrapperBox = await blobWrapper.boundingBox()
    await expect(blobWrapperBox?.height).toBeGreaterThan(0)
    await expect(blobWrapperBox?.width).toBeGreaterThan(0)
  })

  // Test for checking the blob wrapper's blur effect
  test('Blob wrapper should have a blur effect', async ({ page, goto }) => {
    await goto('/', { waitUntil: 'hydration' })
    const blobWrapper = page.locator(blobBlurSelector)
    const validBlurRegexExp = /blur\(\d+px\)/
    await expect(blobWrapper).toHaveCSS('filter', validBlurRegexExp)
  })
})

test.describe('Blob', () => {
  const blobSelector = 'data-testid=blob'
  // Test for verifying the blob's visibility
  test('Blob should be visible on the page', async ({ page, goto }) => {
    await goto('/', { waitUntil: 'hydration' })
    const blob = page.locator(blobSelector)
    const blobBox = await blob.boundingBox()
    await expect(blobBox?.height).toBeGreaterThan(0)
    await expect(blobBox?.width).toBeGreaterThan(0)
  })

  // Test for checking the blob's clip-path property
  test('Blob should have a valid clip-path property', async ({ page, goto }) => {
    await goto('/', { waitUntil: 'hydration' })
    const blob = page.locator(blobSelector)
    const validClipPathRegexExp = /^polygon\((\s*\d+(\.\d+)?%\s+\d+(\.\d+)?%\s*,)*( \s*\d+(\.\d+)?%\s+\d+(\.\d+)?%\s*)\)$/
    await expect(blob).toHaveCSS('clip-path', validClipPathRegexExp)
  })
})
