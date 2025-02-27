import { test, expect } from '@playwright/test';
import UdemyHomePage from '../../Pages/Udemy.home.page';

//Author-Thippeswamy



// Verify the menu tabs

    test('Verify menu tabs', async ({ page }) => {
     
  const menutabs=[
       "MATCHES","RANKINGS","NEWS","VIDEOS","TEAMS","AWARDS","TRAVEL","SHOP"
    ]

    let homepage:UdemyHomePage;
    homepage=new UdemyHomePage(page)
 
    await homepage.navigate();
    await homepage.performSearch('india')
  expect (await homepage.verifyMenuTabs()).toEqual(menutabs)
}); 

    