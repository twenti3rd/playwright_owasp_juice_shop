import { expect } from '@playwright/test'

exports.SearchResultsPage = class SearchResultsPage {
  constructor (page) {
    this.page = page
    this.searchIcon = page.getByText('search')
    this.searchTextbox = page.locator('#mat-input-0')
    this.searchOverviewList = page.locator('mat-grid-list')
    this.searchItemLists = page.locator('mat-card')
  }

  // Search for a product by keyword and press Enter
  // Might need update in case that an Enter button is implemented

  async searchForProduct (searchTerm) {
    await this.searchIcon.click()
    await this.searchTextbox.fill(searchTerm)
    await this.page.waitForTimeout(3000)
    await this.searchTextbox.press('Enter')
  }

  // Check the result that should be in the page by counting number and product name
  // Might need improve on counting items dynamically

  async searchExpectedResults (searchTerm, number) {
    const keyword = searchTerm
    const re = new RegExp(`.*${keyword}`, 'i')

    await expect(this.searchItemLists.filter({ hasText: re })).toHaveCount(
      number
    )
    await expect(this.searchOverviewList).toContainText(re)
  }

  // Check the result that should not be in the page by product name

  async searchNotExpectedResults (searchTerm) {
    const keyword = searchTerm
    const re = new RegExp(`.*${keyword}`, 'i')

    await expect(this.searchOverviewList).not.toContainText(re)
  }


}
