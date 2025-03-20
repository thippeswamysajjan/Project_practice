import { test, expect, request } from '@playwright/test';
import  {ApiPage}  from '../../../api-test/loanData.page.ts'
//import * as fs from 'fs';
//import path from 'path'
import {parse} from 'csv-parse/sync'
import { baseUrl } from '../../../common-config/base-urls.config.ts';
import { liabilityAmount } from '../../../helpers/utils/loans-utils/loans.ts'


/**
 * Validate Loan Disbursement Date is less than current date
 * @author Thippeswamy
 */  
test('Validate Loan Disbursement Date in the Future', async ({ }) => {
        const apiContext = await request.newContext();
        const loandataapi = new ApiPage(apiContext);
       const response =await loandataapi.getLoanData(baseUrl.loanDataApi)
       const responseBody=await response.json()
        //Calling function to conver dates into IST
        const fundsReleaseDate=await loandataapi.getISTDateTime(responseBody.loan.fundsReleaseDate)

        const currentDate = new Date()
        const currentDateNew = new Date(currentDate).getTime();
        const fundsReleaseDatenew = new Date(fundsReleaseDate).getTime();
       expect(currentDateNew).toBeGreaterThan(fundsReleaseDatenew)
    
    }

)
