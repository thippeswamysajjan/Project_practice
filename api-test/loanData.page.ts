
import { APIRequest, APIRequestContext, APIResponse, expect, request, test } from "@playwright/test";
import { JSONPath } from 'jsonpath-plus';
import { DateTimeUtils } from '../helpers/utils/loans-utils/loans'
import * as util from 'util';

export class ApiPage {


apiContext: APIRequestContext;

    constructor(apiContext: APIRequestContext) {
        this.apiContext = apiContext;
    }
     //Function to Get the API response
    async getLoanData(url: string): Promise<APIResponse> {
       return await this.apiContext.get(url);
    }

    //Function to fetch the values from Json path
async getValueByJsonPath(url: string, jsonPath: string):Promise<string[]> {

    const response = await this.apiContext.get(url);
    if (!response.ok()) {
    throw new Error(`Failed to fetch data. Status: ${response.status()}`);}
    const jsonResponse1 = await response.json();
    const jsonResponse3 = JSON.stringify(jsonResponse1, null, 2);
    const jsonResponse2 = util.inspect(jsonResponse1, { depth: null, compact: false, breakLength: Infinity, maxArrayLength: null })
    const jsonObject = JSON.parse(jsonResponse3);
     const result = JSONPath({ path: jsonPath, json: jsonObject });
     return result.length > 0 ? result : ["Not Found"];
    }
     
    //Function to convert UTC date to IST
    async getISTDateTime(utcDateTime: string): Promise<string> {
        return DateTimeUtils.convertUTCtoIST(utcDateTime);
      }
     
      //Function to sort array data in ascending order
    async getSortedStringArrayAscending(inputArray: string[]): Promise<string[]> {
        // Sort in ascending order
        const sortedArray = inputArray.sort();
        return sortedArray;
    }
              //Function to sort array data in descending order
    async getSortedStringArrayDescending(inputArray: string[]): Promise<string[]> {
       
        // Sort in descending order
        const sortedArray = inputArray.sort((a, b) => b.localeCompare(a));
        return sortedArray;
    }     
}