import { test, expect } from '@playwright/test'
import { LoginPage } from '../pages/login'

test('Login with valid credentials', async ({ page }) => {
  const login = new LoginPage(page)
  
    // Open Login Page
    await login.gotoLoginPage()

    // Enter email and password then click Login button
    await login.login('withat94.dev@gmail.com', 'P@ssw0rd')

})
