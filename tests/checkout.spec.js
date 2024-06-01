import { test } from '@playwright/test'
import { LoginPage } from '../pages/login'
import { AddNewAddressPage } from '../pages/address'
import { YourBasketPage } from '../pages/basket'

test.describe('Checkout Functionality', () => {
  // Login before each test case
  test.beforeEach('Login with valid credentials', async ({ page }) => {
    const login = new LoginPage(page)

    await login.gotoLoginPage()
    await login.login('dr32.zneb@gmail.com', 'P@ssw0rd')
  })

  test('Checkout with 1 item', async ({ page }) => {
    // await page.pause()

    const basket = new YourBasketPage(page)
    const address = new AddNewAddressPage(page)

    // Add item(s) to basket

    await page
      .locator('mat-card')
      .filter({ hasText: 'Apple Juice (1000ml) 1.99¤Add' })
      .getByLabel('Add to Basket')
      .click()
    
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
