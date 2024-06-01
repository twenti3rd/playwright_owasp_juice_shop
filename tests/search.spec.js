import { test } from '@playwright/test'
import { LoginPage } from '../pages/login'
import { SearchResultsPage } from '../pages/search'

test.describe('Search Functionality', () => {
  // Login before each test case
  test.beforeEach('Login with valid credentials', async ({ page }) => {
    const login = new LoginPage(page)

    await login.gotoLoginPage()
    await login.login('dr32.zneb@gmail.com', 'P@ssw0rd')
  })

  // Scenario 3
  // Click on the search button, search for apple, verify that 2 apple products show up
  // and that banana product does not show up

  test('Search for product', async ({ page }) => {
    const searchItem = new SearchResultsPage(page)

    // Search for apple and then press Enter

    await searchItem.searchForProduct('apple')

    // Check the result must show only 2 apple products

    await searchItem.searchExpectedResults('apple', 2)

    // Check the result must not show any banana products

    await searchItem.searchNotExpectedResults('banana')
  })
})
