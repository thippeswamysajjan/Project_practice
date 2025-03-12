import { test, expect, request } from '@playwright/test';
import  {ApiPage}  from '../../../api-test/loanData.page'
import { baseUrl } from '../../../common-config/base-urls.config.ts';

/**
 * Verify the loan data Api response 
 * @author Thippeswamy
 */  

test('Verify the Loan data API response', async ({ }) => {

    const apiContext = await request.newContext();
        const loandataapi = new ApiPage(apiContext);
        //Getting API response
        const response = await loandataapi.getLoanData(baseUrl.loanDataApi)
        //Validating API response as 200
        expect(response.status()).toBe(200); 
        

})