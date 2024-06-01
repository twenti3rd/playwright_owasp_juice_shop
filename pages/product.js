class ProductPage {
  constructor (page) {
    this.page = page
    this.productCard = page.locator('mat-card')
    this.shoppingCartIcon = page.getByLabel('Show the shopping cart')
  }

  async selectProduct () {
    await this.productCard
      .filter({ hasText: 'Apple Juice (1000ml) 1.99¤Add' })
      .getByLabel('Add to Basket')
      .click()
  }
}
