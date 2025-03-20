import { test, expect, request } from '@playwright/test';
import  {ApiPage}  from '../../../api-test/loanData.page.ts'
//import * as fs from 'fs';
//import path from 'path'
import {parse} from 'csv-parse/sync'
import { baseUrl } from '../../../common-config/base-urls.config.ts';


 /**
 * Co- Borrower Names whose annual income greater than 1300
 * @author Thippeswamy
 */   
test('Co-borrower name greater than 1300', async ({ }) => {
        const apiContext = await request.newContext();
        const loandataapi = new ApiPage(apiContext);
        const jsonpath='$.loan.applications[?(@.coBorrower.annualIncome > 1300)].coBorrower.firstName'
        const expectedNames = ['Cornelius', 'Lisandro', 'Euna', 'Sadye'];
         //Calling function to extract the Jsonpath data
        const jsonData=await loandataapi.getValueByJsonPath(baseUrl.loanDataApi,jsonpath)
        expect (jsonData).toEqual(expectedNames) 
    }
)
