import { test, expect } from '@playwright/test';
import UdemyHomePage from '../../Pages/Udemy.home.page';

//Author-Thippeswamy


// Verify the search functionality
  test('Search and verify the new url', async ({ page }) => {
    let homepage:UdemyHomePage;
    homepage=new UdemyHomePage(page)
 
    await homepage.navigate();
    await homepage.performSearch('india')
    await homepage.verifySearchresults

  
  
    }); 
