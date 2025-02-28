import { test, expect } from '@playwright/test';
import UdemyHomePage from '../../Pages/Udemy.home.page';


//Author-Thippeswamy



// Validate login and verify the url 
// Sample Test Url->https://www.icc-cricket.com/

test('Verify the url and logo', async ({ page }) => {
  let homepage:UdemyHomePage;
   homepage=new UdemyHomePage(page)

   await homepage.navigate();
   await homepage.verifyUrlandlogo()

  }); 