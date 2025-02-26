import { test, expect } from '@playwright/test';


// Submitting the form
test('Verify the url and logo', async ({ page }) => {
  await page.goto('https://www.icc-cricket.com/');

 expect(page.url()).toContain('cricket')
 expect (await page.locator("//div[contains(@id,'logo')]")).toBeVisible

  }); 

  test('Search and verify the new url', async ({ page }) => {
    await page.goto('https://www.icc-cricket.com/');
  
   expect(page.url()).toContain('cricket')

   await page.getByLabel('Search').click()

   const search=page.getByPlaceholder('what are you looking for?')

   await search.fill('india');
   await search.press('Enter')

   await page.waitForTimeout(5000)

   expect(await page.url()).toContain('india')

  
  
    }); 

    test('Verify menu tabs and links', async ({ page }) => {
      await page.goto('https://www.icc-cricket.com/');
    
     expect(page.url()).toContain('cricket')

     await page.getByLabel('Search').click()
  
    const menutabs=[
       "MATCHES","RANKINGS","NEWS","VIDEOS","TEAMS","AWARDS","TRAVEL","SHOP"
    ]
  
   const menu=page.locator('//div[@class="grow"]//div[@class="menu-list-wrapper"]//div[not(contains(@class,"lg:hidden"))]//a')

    expect (await menu.allInnerTexts()).toEqual(menutabs)

    const expectedtablinks=[
      {text: "MATCHES",href:"/fixtures-results/"},
      {text: "RANKINGS",href:"/rankings/"},
      {text: "NEWS",href:"/news"},
      {text: "VIDEOS",href:"/videos/"},
      {text: "TEAMS",href:"/teams/men"},
      {text: "AWARDS",href:"/awards/"},
      {text: "TRAVEL",href:"https://www.icctravelandtours.com/"},
      {text: "SHOP",href:"https://shop.icc-cricket.com/"}
    ]

      for (const [index,listitem] of expectedtablinks.entries())
      {
        const link=menu.nth(index)

        // const linktext=await link.textContent()

        // const upperCaseText = linktext?.toUpperCase();


        
      const listItemText = await listitem.text

        //await expect(link).toHaveText(listItemText.toUpperCase())

        await expect(link).toHaveAttribute('href',listitem.href)
       

        //console.log('abc',link)

      }
     

    
    
      }); 