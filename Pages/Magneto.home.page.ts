//import { PlaywrightTestOptions} from '@playwright/test';
import { expect, Locator, Page } from '@playwright/test';

class MagnetoHomePage {
    page: Page;
    searchBtn: Locator;
    searchTextBox: Locator;
    logo: Locator;
    menu: Locator;
    signInBtn:Locator
    emailField:Locator;
    passwordField:Locator;
    submitBtn:Locator;
    loggedInUser:Locator;
    menMenu:Locator;
    topsSubMenu:Locator;
    tanksSubMenu:Locator;
    toolBarAmount:Locator;
    noOfGridItems:Locator;
    product:Locator;
    addToCartBtn:Locator;
    productReviewMessage:Locator;
    size:Locator;
    colour:Locator;
    confirmationMsgforCart:Locator;
    selectedSize:Locator;
    selectedColour:Locator
    showCart:Locator;
    checkoutBtn:Locator;
    emailAddress:Locator;
    firstName:Locator;
    lastName:Locator;
    streetAddress:Locator;
    city:Locator;
    zipcode:Locator;
    phoneNumber:Locator;
    nextBtn:Locator;
    countryDropdown:Locator
    stateDropdown:Locator;
    placeOrderBtn:Locator;
    thankYouMessage:Locator;
    tanksMenuLink:Locator;



    


    constructor(page: any) {
      this.page = page;
    
      this.searchBtn=page.getByLabel('Search')
      this.searchTextBox=page.getByPlaceholder('what are you looking for?')
      this.logo=page.locator("//div[contains(@id,'logo')]")
      this.menu=page.locator('//div[@class="grow"]//div[@class="menu-list-wrapper"]//div[not(contains(@class,"lg:hidden"))]//a')
      this.signInBtn=page.getByRole('link', { name: 'Sign In' })
      this.emailField=page.getByLabel('Email', { exact: true })
      this.passwordField= page.getByLabel('Password')
      this.submitBtn=page.getByRole('button', { name: 'Sign In' })
      this.loggedInUser=page.locator('(//span[@class="logged-in"])[1]')
      
     this.menMenu=page.locator('//nav[@class="navigation"]//span[contains(text(),"Men")]/..')
      this.topsSubMenu=page.locator('//a[contains(@href, "tops-men")]//span[text()="Tops"]')
       this.tanksSubMenu=page.locator('//a[@role="menuitem"]//span[text()="Tanks"]')
      this.toolBarAmount=page.locator('(//p[@id="toolbar-amount"]//span)[1]')
      this.noOfGridItems=page.locator('//div[contains(@class,"products wrapper")]//li')
      this.product=page.locator('li').filter({ hasText: 'Cassius Sparring Tank'})
      //this.addToCartBtn=page.getByRole('button', { name: 'Add to Cart' })
      this.addToCartBtn=page.locator('//button[@title="Add to Cart"]')
      this.productReviewMessage=page.locator('//div[@class="product-reviews-summary empty"]//div[1]')
      this.size=page.locator('//div[contains(@class,"attribute size")]//div[@option-label="XL"]')
      this.colour=page.locator('//div[@aria-label="Blue"]')
      this.confirmationMsgforCart=page.locator('//div[@data-ui-id="message-success"]//div[1]')
      this.selectedSize=page.locator('//div[@class="swatch-attribute size"]//span[2]')
      this.selectedColour=page.locator('//div[@class="swatch-attribute color"]//span[2]')
      //this.showCart=page.locator('//a[@class="action showcart"]')
      this.showCart=page.locator('a.action.showcart')
      this.checkoutBtn=page.getByRole('button', { name: 'Proceed to Checkout' })
      this.emailAddress=page.getByRole('textbox', { name: 'Email Address *' })
      this.firstName=page.getByLabel('First Name')
      this.lastName=page.getByLabel('Last Name')  
      this.streetAddress=page.getByLabel('Street Address: Line 1')
      this.city=page.getByLabel('City')
      this.zipcode=page.getByLabel('Zip/Postal Code')
      this.phoneNumber=page.getByLabel('Phone Number')
      this.stateDropdown= page.locator('select[name="region_id"]')//.selectOption({ label: 'Indiana' });
      this.countryDropdown=page.getByLabel('Country')//.selectOption('India');
      this.nextBtn=page.getByRole('button', { name: 'Next' })
      this.placeOrderBtn=page.getByRole('button', { name: 'Place Order' })
      this.thankYouMessage=page.getByText('Thank you for your purchase!')
      this.tanksMenuLink=page.getByRole('link', { name: 'Tanks' })







     
    
}
//Function to navigate to Url
async navigate() {
  await this.page.goto('https://magento.softwaretestingboard.com');
  
}


async signIn(username: string, password: string) {
   
  await this.signInBtn.click()
  await this.emailField.fill(username)
  await this.passwordField.fill(password)
  await this.page.waitForTimeout(2000)
  await this.submitBtn.click()
  await this.page.waitForTimeout(5000)
  return await this.loggedInUser.innerText()
}

//Function to Men->Tops->jackets Submenu
async navigateSubMenu() {
  //await this.page.waitForTimeout(4000)
  await this.menMenu.hover()
  await this.page.waitForTimeout(1000)
  await this.topsSubMenu.hover()
  await this.page.waitForTimeout(2000)
  await this.tanksSubMenu.click()
  //await this.page.waitForTimeout(5000)
  
}

//Function to Men->Tops->jackets Submenu
async SubMenu() {
  //await this.page.waitForTimeout(4000)
  await this.menMenu.click()
  await this.tanksMenuLink.click()
  
}


//Function to Fetch tool bar amount
async getToolBarCount() {

  const toolbarext=await this.toolBarAmount.innerText()
  const toolBarCount = parseInt(toolbarext.trim(), 10)
   return toolBarCount
  
}

//Function to Fetch no of items in the Grid
async getNoOfItems() {
  
  return this.noOfGridItems.count()
}

productLinkLocator(product: string) {
  
  //return this.page.locator(`//div[contains(@class,"product-item")]//strong//a[contains(text(),'${product}')`);
 return this.page.locator('li').filter({ hasText: product})
  //return this.page.locator('li', { hasText: product })
}


  //function to add the product to the Cart
  async addProductToCart(product:string) {

     const productProfile = this.productLinkLocator(product);
     productProfile.hover()
     productProfile.click()
     await this.productReviewMessage.waitFor({ state: 'visible' });
     await this.page.waitForTimeout(2000)
     await this.size.click()
     await this.selectedSize.waitFor({ state: 'attached' });
     await this.colour.click()
     await this.selectedColour.waitFor({ state: 'visible' });
     await this.addToCartBtn.click()
     const message=await this.confirmationMsgforCart.innerText()
     return message

   }


        //function to navigate to My cart page
  async navigateToMyCart() {
    await this.page.waitForTimeout(3000)
    await this.showCart.click()
    await this.checkoutBtn.click()
  }
     //function to fill the shipment details
  async fillShipmentDetails() {
    
    await this.emailAddress.fill('sc12@gmail.com')
    await this.firstName.fill('raju')
    await this.lastName.fill('ravi')
    await this.streetAddress.fill('street1')
    await this.city.fill('bangalore')
    await this.countryDropdown.selectOption('India')
    await this.page.waitForTimeout(3000)
    await this.stateDropdown.selectOption({ label: 'Karnataka' });
    await this.zipcode.fill('560040')
   
    await this.phoneNumber.fill('6566')
   

  }

    //function to click on Place order button
    async clickPlaceOrderButton() {
      await this.placeOrderBtn.click()
      return this.thankYouMessage.innerText()
    }

         //function to click on next button after filling shipment details
         async clickNextButton() {
          await this.nextBtn.click()
        }



//Function to verify the url and Logo
async verifyUrlAndLogo() {
expect(this.page.url()).toContain('cricket')
 expect (await this.logo).toBeVisible
}

//Function to perform search 
async performSearch(term: string) {
  await this.searchBtn.click()
  await this.searchTextBox.fill(term)
  await this.searchTextBox.press('Enter')
  await this.page.waitForTimeout(5000)
}
//Function to  verify search results
async verifySearchresults() {

 return this.page.url()

}
//function to verify menu tabs
async verifyMenuTabs() {

  const menu=this.menu
   return menu.allInnerTexts()
 
 }
//Function to  verify menu tabs links
 async verifyMenuTabLinks() {

 const hrefs = await this.menu.evaluateAll(links =>
  links.map(link => link.getAttribute('href')))

  return hrefs
 }
 
}
  
  export default MagnetoHomePage;
