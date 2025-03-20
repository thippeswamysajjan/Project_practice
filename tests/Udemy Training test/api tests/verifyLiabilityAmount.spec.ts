import { test, expect, request } from '@playwright/test';
import  {ApiPage}  from '../../../api-test/loanData.page.ts'
//import * as fs from 'fs';
//import path from 'path'
import {parse} from 'csv-parse/sync'
import { baseUrl } from '../../../common-config/base-urls.config.ts';
import { liabilityAmount } from '../../../helpers/utils/loans-utils/loans.ts'


/**
 * Verify and calculate total liability amount for liabilityType == "Installment" && holderName == "TOYOTA CREDIT")  
 * @author Thippeswamy
 */  
test('Calculate Liability Amount from loan details', async ({ }) => {
        const apiContext = await request.newContext();
        const loandataapi = new ApiPage(apiContext);
       const jsonpath="$.loan.applications[*].borrower.liabilities[?(@.liabilityType == 'Installment' && @.holderName == 'TOYOTA CREDIT')].unpaidBalanceAmount"
       //Fetching fees amount from Json path
       const jsonData=await loandataapi.getValueByJsonPath(baseUrl.loanDataApi,jsonpath)
       //Converting to number array
       const numberAmounts: number[] = jsonData.map(Number);
       //const totalAmount=calculateTitleFees.calculateTotalAmount(numberAmounts)
       const totalAmount=liabilityAmount.calculateLiabilityAmount(numberAmounts)
       //Printing the Title Fee amount
       console.log("Sum of total Liability Amount =",totalAmount)
    }

)
