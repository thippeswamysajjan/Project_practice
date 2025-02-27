//import { PlaywrightTestOptions} from '@playwright/test';
import { expect, Locator, Page } from '@playwright/test';

class UdemyHomePage {
    page: Page;
    searchBtn: Locator;
    searchTextBox: Locator;
    logo: Locator;
    menu: Locator;
    


    constructor(page: any) {
      this.page = page;
    
      this.searchBtn=page.getByLabel('Search')
      this.searchTextBox=page.getByPlaceholder('what are you looking for?')
      this.logo=page.locator("//div[contains(@id,'logo')]")
      this.menu=page.locator('//div[@class="grow"]//div[@class="menu-list-wrapper"]//div[not(contains(@class,"lg:hidden"))]//a')
      

    
}
//Function to navigate to Url
async navigate() {
  await this.page.goto('https://www.icc-cricket.com/');
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
  
  export default UdemyHomePage;
