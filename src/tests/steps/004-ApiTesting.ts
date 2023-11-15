import { Given, When, Then} from "@cucumber/cucumber";

import  apiTesting    from '../../../PageObjects/apiTesting.page';
import supertest from 'supertest';
import  { expect } from 'chai';

let apiTesing = new apiTesting();



Given('I send the GET request at {string} with the {string} and first product contains {string}.', async function (url, endpoint, sting_to_validate) {
    // Write code here that turns the phrase above into concrete actions
    await apiTesing.validateBluePrdctThroughApi(url, endpoint, sting_to_validate)
  });


Given('I send the post request at {string} with the {string} and to search {string} .', async function (basic_url, endpoint, search) {
    // Write code here that turns the phrase above into concrete actions
    await apiTesing.searchingProductThroughApi(basic_url, endpoint, search)
  });


