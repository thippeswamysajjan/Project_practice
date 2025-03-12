import { test, expect, request } from '@playwright/test';
import  {ApiPage}  from '../../../api-test/loanData.page.ts'
import * as fs from 'fs';
import path from 'path'
import {parse} from 'csv-parse/sync'
import { baseUrl } from '../../../common-config/base-urls.config.ts';


 /**
 * Verify milestoneCurrentDateAtUtc", "fundsReleaseDate" and "fileStartedDate" dates and Convert UTC Dates to IST (UTC+5:30). 
 * @author Thippeswamy
 */   
test('Verify date Conversions from UTC to IST', async ({ }) => {
        const apiContext = await request.newContext();
        const loandataapi = new ApiPage(apiContext);
        const jsonpath='$.loan.applications[*].borrower.fullNameWithSuffix'
        const response =await loandataapi.getLoanData(baseUrl.loanDataApi)

        const responseBody=await response.json()
        //Calling function to conver dates into IST
        const mileStoneDate=await loandataapi.getISTDateTime(responseBody.loan.milestoneCurrentDateAtUtc)
        const fundsReleaseDate=await loandataapi.getISTDateTime(responseBody.loan.fundsReleaseDate)
        const fileStartedDate=await loandataapi.getISTDateTime(responseBody.loan.fileStartedDate)
       
        //Fetching records from CSV
         const dateRecords=parse(fs.readFileSync(path.join(__dirname,'../../../test-data/Dates.csv')),{
                   columns: true,
                    skip_empty_lines:true
                  })
                 
        const csvMilestoneDate = dateRecords.map(record => record['mileStoneDate']);
       const csvFundsReleaseDate = dateRecords.map(record => record['fundsReleaseDate']);
       const csvFileStartedDate = dateRecords.map(record => record['fileStartedDate']);
       //Comparing the CSV date records with converted IST dates
       expect(mileStoneDate).toEqual(csvMilestoneDate[0])
       expect(fundsReleaseDate).toEqual(csvFundsReleaseDate[0])
       expect(fileStartedDate).toEqual(csvFileStartedDate[0])
       
    }
)
