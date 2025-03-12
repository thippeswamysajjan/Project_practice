import { test, expect, request } from '@playwright/test';
import  {ApiPage}  from '../../../api-test/loanData.page.ts'
//import * as fs from 'fs';
//import path from 'path'
import {parse} from 'csv-parse/sync'
import { baseUrl } from '../../../common-config/base-urls.config.ts';
import { calculateTitleFees } from '../../../helpers/utils/loans-utils/loans.ts'


/**
 * Verify and calculate Title fees from loan details.  
 * @author Thippeswamy
 */  
test('Calculate Title fee from loan details', async ({ }) => {
        const apiContext = await request.newContext();
        const loandataapi = new ApiPage(apiContext);
       const jsonpath="$.loan.fees[?(@.feeType == 'UserDefined_1111' || @.feeType == 'UserDefined_1112' || @.feeType == 'UserDefined_1113')].borrowerPaidAmount"
       //Fetching fees amount from Json path
       const jsonData=await loandataapi.getValueByJsonPath(baseUrl.loanDataApi,jsonpath)
       //Converting to number array
       const numberAmounts: number[] = jsonData.map(Number);
       const totalAmount=calculateTitleFees.calculateTotalAmount(numberAmounts)
       //Printing the Title Fee amount
       console.log("Title fees =",totalAmount)
    }

)
