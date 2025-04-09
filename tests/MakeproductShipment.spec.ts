import { test, expect } from '@playwright/test';
import MagnetoHomePage from '../Pages/Magneto.home.page';

//Author-Thippeswamy




// Add the product to the part and make shipment for that product
// Sample Test Url->https://magento.softwaretestingboard.com/

test.describe('order for product and make payment', () => {

  test.beforeEach(async ({ page }) => {
    homepage = new MagnetoHomePage(page); 

    //Navigate to home page
    await homepage.navigate()
    await page.waitForLoadState()
    

      }); 
 


let homepage: MagnetoHomePage;

    test('order for product and make payment', async ({ page }) => {
      test.setTimeout(70000);
      await homepage.SubMenu()
      const product='Cassius Sparring Tank'
      const expectedMessage:string=`You added ${product} to your shopping cart.`;
      const actualMessage=await await homepage.addProductToCart(product)
      //Comparing add to cart confirmation with expected message
      await expect(actualMessage).toEqual(expectedMessage)
      await homepage.navigateToMyCart()
      //await page.waitForTimeout(50000)
      await homepage.fillShipmentDetails()
       await homepage.clickNextButton()
      //await page.waitForTimeout(50000)
      const actualConfirmationMessage=await homepage.clickPlaceOrderButton()
      const expectedConfirmationMessage='Thank you for your purchase!'
      await expect(actualConfirmationMessage).toEqual(expectedConfirmationMessage)
    
    })
})