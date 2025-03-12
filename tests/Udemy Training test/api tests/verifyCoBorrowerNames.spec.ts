import { test, expect, request } from '@playwright/test';
import  {ApiPage}  from '../../../api-test/loanData.page'
import * as fs from 'fs';
import path from 'path'
import {parse} from 'csv-parse/sync'
import { baseUrl } from '../../../common-config/base-urls.config.ts';


/**
 * Verify the co-borrowers names from Json response with CSV borrowers records 
 * @author Thippeswamy
 */  
test('Verify the co-borrowers name', async ({ }) => {
        const apiContext = await request.newContext();
        const loandataapi = new ApiPage(apiContext);
        const jsonpath='$.loan.applications[*].coBorrower.fullNameWithSuffix'
        //Fetching records from CSV
        const records=parse(fs.readFileSync(path.join(__dirname,'../../../test-data/coborrowersData.csv')),{
          
            skip_empty_lines:true
          })
        const expectedCsvRecords: string[] = records.map(row => row[0])
        //Fetching co-borrowers data from Json response
       const jsonData=await loandataapi.getValueByJsonPath(baseUrl.loanDataApi,jsonpath)
       //Comparing the CSV co-borrowers records with Json records
        expect (jsonData).toEqual(expectedCsvRecords)      
    }
)
