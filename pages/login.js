exports.LoginPage = class LoginPage {
  constructor (page) {
    this.page = page
    this.closeWelcomeBanner = page.getByLabel('Close Welcome Banner')
    this.emailTextbox = page.getByLabel('Text field for the login email')
    this.passwordTextbox = page.getByLabel('Text field for the login password')
    this.loginButton = page.getByLabel('Login', { exact: true })
  }

  async gotoLoginPage () {
    await this.page.goto('https://juice-shop.herokuapp.com/#/login')
  }

  async login (email, password) {
    await this.closeWelcomeBanner.click()
    await this.emailTextbox.fill(email)
    await this.passwordTextbox.fill(password)
    await this.loginButton.click()
  }

}
