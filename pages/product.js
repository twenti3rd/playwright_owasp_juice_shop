exports.ProductPage = class ProductPage {
  constructor (page) {
    this.page = page
    this.productCard = page.locator('mat-card')
    this.allProductCard = page.locator('mat-grid-tile')
    this.outOfStockMessage = page.getByText('We are out of stock! Sorry')
  }

  // Select a specific product by inputting its name
  // Will need fix if not input full product name

  async selectSpecificProduct (productName) {
    await this.productCard
      .filter({ hasText: productName })
      .getByLabel('Add to Basket')
      .click()
  }

  async selectRandomProduct (number) {
    // Count the number of items in the page that can be selected

    const numberOfItems = await this.allProductCard.count()

    // Select items randomly according to the input number

    for (let i = 0; i < number; i++) {
      let randomItem = Math.floor(Math.random() * numberOfItems) + 1

      // Check if the item is matched to 12 then find a new item
      // Will need fix after finding not select disabled button dynamically

      if (randomItem === 12) {
        i--
        continue
      }

      await this.allProductCard
        .nth(randomItem)
        .getByLabel('Add to Basket')
        .click()
    }
  }
}
