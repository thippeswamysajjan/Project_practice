//import { PlaywrightTestOptions} from '@playwright/test';
import { expect, Locator, Page } from '@playwright/test';

class UdemyHomePage {
    page: Page;
    searchBtn: Locator;
    searchtextbox: Locator;
    logo: Locator;
    menu: Locator;
    


    constructor(page: any) {
      this.page = page;
    
      this.searchBtn=page.getByLabel('Search')
      this.searchtextbox=page.getByPlaceholder('what are you looking for?')
      this.logo=page.locator("//div[contains(@id,'logo')]")
      this.menu=page.locator('//div[@class="grow"]//div[@class="menu-list-wrapper"]//div[not(contains(@class,"lg:hidden"))]//a')
      

    
}
//function to navigate to Url
async navigate() {
  await this.page.goto('https://www.icc-cricket.com/');
}

//function to verify the url and Logo
async verifyUrlandlogo() {
expect(this.page.url()).toContain('cricket')
 expect (await this.logo).toBeVisible
}

//function to perform search 
async performSearch(term: string) {
  await this.searchBtn.click()
  await this.searchtextbox.fill(term)
  await this.searchtextbox.press('Enter')
  await this.page.waitForTimeout(5000)
}
//function to  verify search results
async verifySearchresults() {

 return this.page.url()

}
//function to verify menu tabs
async verifyMenuTabs() {

  const menu=this.menu
   return menu.allInnerTexts()
 
 }
//function to  verify menu tabs links
 async verifyMenuTabLinks() {

 const hrefs = await this.menu.evaluateAll(links =>
  links.map(link => link.getAttribute('href')))

  return hrefs
 }
 
}
  
  export default UdemyHomePage;
