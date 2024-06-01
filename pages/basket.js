exports.YourBasketPage = class YourBasketPage {
  constructor (page) {
    this.page = page
    this.yourBasketIcon = page.getByLabel('Show the shopping cart')
    this.checkoutButton = page.getByRole('button', { name: 'Checkout' })
  }

  async viewBasket () {
    await this.yourBasketIcon.click()
  }

  async checkout () {
    await this.checkoutButton.click()
  }
}
