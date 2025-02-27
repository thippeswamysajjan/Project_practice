import { test, expect } from '@playwright/test';
import UdemyHomePage from '../../Pages/Udemy.home.page';


//Author-Thippeswamy


//Verify the menu tabs links

test('Verify menu tabs links', async ({ page }) => {
     

    let homepage:UdemyHomePage;
    homepage=new UdemyHomePage(page)

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

   
    await homepage.navigate();
    await homepage.performSearch('india')
  expect (await homepage.verifyMenuTabLinks()).toEqual(expectedtablinks)

    
    
      }); 