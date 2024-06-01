exports.AddNewAddressPage = class AddNewAddressPage {
  constructor (page) {
    this.page = page
    this.addNewAddressButton = page.getByLabel('Add a new address')
    this.countryTextbox = page.getByPlaceholder('Please provide a country.')
    this.nameTextBox = page.getByPlaceholder('Please provide a name.')
    this.mobileNumberTextbox = page.getByPlaceholder('Please provide a mobile')
    this.zipCodeTextbox = page.getByPlaceholder('Please provide a ZIP code.')
    this.AddressTextbox = page.getByPlaceholder('Please provide an address.')
    this.cityTextBox = page.getByPlaceholder('Please provide a city.')
    this.stateTextBox = page.getByPlaceholder('Please provide a state.')
    this.submitButton = page.getByRole('button', { name: 'send Submit' })
  }

  async addNewAddress (country, name, mobile, zip, address, city, state) {
    await this.addNewAddressButton.click()
    await this.countryTextbox.fill(country)
    await this.nameTextBox.fill(name)
    await this.mobileNumberTextbox.fill(mobile)
    await this.zipCodeTextbox.fill(zip)
    await this.AddressTextbox.fill(address)
    await this.cityTextBox.fill(city)
    await this.stateTextBox.fill(state)
    await this.submitButton.click()
  }

}
