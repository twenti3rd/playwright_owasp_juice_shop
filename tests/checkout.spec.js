import { test, expect } from '@playwright/test'
import { LoginPage } from '../pages/login'
import { ProductPage } from '../pages/product'
import { AddNewAddressPage } from '../pages/address'
import { YourBasketPage } from '../pages/basket'

test.describe('Checkout Functionality', () => {
  // Login before each test case
  test.beforeEach('Login with valid credentials', async ({ page }) => {
    const login = new LoginPage(page)

    await login.gotoLoginPage()
    await login.login('dr32.zneb@gmail.com', 'P@ssw0rd')
  })

  // Scenario 1
  // Login with your user, add 1 item to the basket, click on checkout, add a new address,
  // fill in the address form, click on submit
  test('Checkout with 1 item', async ({ page }) => {
    await page.pause()

    const product = new ProductPage(page)
    const basket = new YourBasketPage(page)
    const address = new AddNewAddressPage(page)

    // Add a product to basket

    await product.selectRandomProduct(1)

    // Click Your Basket then click Checkout button

    await basket.viewBasket()
    await basket.checkout()

    // Add new address , fill out the form then click Submit button

    await address.addNewAddress(
      'Thailand',
      'Withat',
      '0836969339',
      '10230',
      '32/149 Lat Phrao',
      'Bangkok',
      'Bangkok'
    )
  })

  // Scenario 2
  // Login with your user, add 2 item to the basket, click on checkout, add a new address,
  // fill in the address form, click on submit
  test('Checkout with 2 items', async ({ page }) => {
    await page.pause()

    const product = new ProductPage(page)
    const basket = new YourBasketPage(page)
    const address = new AddNewAddressPage(page)

    // Add a product to basket

    await product.selectRandomProduct(2)

    // Click Your Basket then click Checkout button

    await basket.viewBasket()
    await basket.checkout()

    // Add new address , fill out the form then click Submit button

    await address.addNewAddress(
      'Thailand',
      'Withat',
      '0836969339',
      '10230',
      '32/149 Lat Phrao',
      'Bangkok',
      'Bangkok'
    )
  })
})
