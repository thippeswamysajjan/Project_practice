import { test, expect } from '@playwright/test';
import UdemyHomePage from '../../Pages/Udemy.home.page';


//Author-Thippeswamy


//Verify the menu tabs links.
// Sample Test Url->https://www.icc-cricket.com/

test.describe('Verify menu tabs links', () => {

  test.beforeEach(async ({ page }) => {
    homepage = new UdemyHomePage(page); 
    //Navigate to home page
    await homepage.navigate(); 
  });


let homepage: UdemyHomePage;

test('Verify menu tabs links', async ({ page }) => {
     

  

const expectedtablinks=[
      "/fixtures-results/",
      "/rankings/",
      "/news",
      "/videos/",
      "/teams/men",
      "/awards/",
      "https://www.icctravelandtours.com/",
      "https://shop.icc-cricket.com/"
    ]

   const searchInput='india'
    //Perform Search
    await homepage.performSearch(searchInput)

    //Verify the menu links
  expect (await homepage.verifyMenuTabLinks()).toEqual(expectedtablinks)

    
    
      }); 

    })
