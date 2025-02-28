import { test, expect } from '@playwright/test';
import UdemyHomePage from '../../Pages/Udemy.home.page';

//Author-Thippeswamy

// Verify the menu tabs.
// Sample Test Url->https://www.icc-cricket.com/

test.describe('Verify menu tabs', () => {

  test.beforeEach(async ({ page }) => {
    homepage = new UdemyHomePage(page); 

    //Navigate to home page
    await homepage.navigate(); 
  });


let homepage: UdemyHomePage;

    test('Verify menu tabs', async ({ page }) => {
     
  const menutabs=[
       "MATCHES","RANKINGS","NEWS","VIDEOS","TEAMS","AWARDS","TRAVEL","SHOP"
    ]
     
    const searchInput='india'
   
    await homepage.performSearch(searchInput)
  expect (await homepage.verifyMenuTabs()).toEqual(menutabs)
}); 

    
})
