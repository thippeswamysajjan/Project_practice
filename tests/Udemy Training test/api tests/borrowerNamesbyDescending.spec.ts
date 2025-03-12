import { test, expect, request } from '@playwright/test';
import  {ApiPage}  from '../../../api-test/loanData.page.ts'
//import * as fs from 'fs';
//import path from 'path'
import {parse} from 'csv-parse/sync'
import { baseUrl } from '../../../common-config/base-urls.config.ts';


 /**
 * Sorting on Borrower Names in Descending Order
 * @author Thippeswamy
 */   
test('Sorting borrowers names in descending order', async ({ }) => {
        const apiContext = await request.newContext();
        const loandataapi = new ApiPage(apiContext);
        const jsonpath='$.loan.applications[*].borrower.firstName'
         //Calling function to extract the Jsonpath data
        const jsonData=await loandataapi.getValueByJsonPath(baseUrl.loanDataApi,jsonpath)
        const expectedNames = ['Roscoe', 'Flavie', 'Camryn', 'Agustin'];
        const sortedNames=await loandataapi.getSortedStringArrayDescending(jsonData)
         //Comparing the Json data with expected data
        expect (sortedNames).toEqual(expectedNames) 
    }
)
