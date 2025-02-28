import { test, expect } from '@playwright/test';
import UdemyHomePage from '../../Pages/Udemy.home.page';


//Author-Thippeswamy



// Validate login and verify the url. 
// Sample Test Url->https://www.icc-cricket.com/

let homepage: UdemyHomePage;

test.describe('Udemy Home Page Tests', () => {

test.beforeEach(async ({ page }) => {
  homepage = new UdemyHomePage(page); 

  //Navigate to home page
  await homepage.navigate(); 
});

test('Verify the url and logo', async ({ page}) => {
 
   //Verify the homepage url and logo
  await homepage.verifyUrlAndLogo()

  }); 

  test('Verify search functionality', async ({ page }) => {
    
    const searchInput='india'
    //Perform search
    await homepage.performSearch(searchInput)

    //Verify the search results
    await homepage.verifySearchresults


  
    }); 

  })