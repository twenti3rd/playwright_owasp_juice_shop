import { expect } from '@playwright/test'

exports.SearchResultsPage = class SearchResultsPage {
  constructor (page) {
    this.page = page
    this.searchIcon = page.getByText('search')
    this.searchTextbox = page.locator('#mat-input-0')
    this.searchOverviewList = page.locator('mat-grid-list')
    this.searchItemLists = page.locator('mat-card')
  }

  async searchForProduct (searchTerm) {
    await this.searchIcon.click()
    await this.searchTextbox.fill(searchTerm)
    await this.page.waitForTimeout(3000)
    await this.searchTextbox.press('Enter')
  }

  async searchExpectedResults (searchTerm, number) {
    const keyword = searchTerm
    const re = new RegExp(`.*${keyword}`, 'i')

    await expect(this.searchItemLists.filter({ hasText: re })).toHaveCount(
      number
    )
    await expect(this.searchOverviewList).toContainText(re)
  }

  async searchNotExpectedResults (searchTerm) {
    const keyword = searchTerm
    const re = new RegExp(`.*${keyword}`, 'i')

    await expect(this.searchOverviewList).not.toContainText(re)
  }


}
