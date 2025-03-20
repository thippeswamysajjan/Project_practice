import { test, expect, request } from '@playwright/test';
import  {ApiPage}  from '../../../api-test/loanData.page.ts'
import * as fs from 'fs';
import path from 'path'

import {parse} from 'csv-parse/sync'
import { baseUrl } from '../../../common-config/base-urls.config.ts';


 /**
 * Verify the EmployeeContactNames whose Zipcode is 28390 
 * @author Thippeswamy
 */   
test('Verify the Employee Contact Names', async ({ }) => {
        const apiContext = await request.newContext();
        const loandataapi = new ApiPage(apiContext);
        const jsonpath='$.employeeContacts[?(@.mailingAddress.zipcode == "28390")].fullNameWithSuffix'
        //Fetching records from CSV
        const records=parse(fs.readFileSync(path.join(__dirname,'../../../test-data/employeeContactData.csv')),{
        skip_empty_lines:true})
        const expectedCsvRecords: string[] = records.map(row => row[0])
        //Fetching Employee Contact data from Json path
        const jsonData=await loandataapi.getValueByJsonPath(baseUrl.loanDataApi,jsonpath)
       //Comparing the CSV borrowers records with Json records
        expect (jsonData).toEqual(expectedCsvRecords)     
    }
)
