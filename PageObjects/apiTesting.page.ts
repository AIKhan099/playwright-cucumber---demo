import supertest from 'supertest';
const request =  supertest('https://automationexercise.com');
import  { expect } from 'chai';
import { apiHelp } from './apiHelpers';


export default class apiTesting {
    public apihelp = new apiHelp();
    
    public async validateBluePrdctThroughApi(basic_url:string, endpoints:string, sting_to_validate:string){
        /**
         * This method get basic_url and endpoint and also string for validation. It provides basic_url and endpoint to apihelp.get 
         * and then validate that the first key value pair in Json is equal to given string i.e. sting_to_validate.
         */
        let res2 = await this.apihelp.get(basic_url,endpoints);
        await console.log("______________________________________________",res2.products[0].name, res2.products[0].price, typeof res2)
        let name_ = await res2.products[0].name
        name_ = await name_.toString()
        await console.log("______________________________________________",name_, typeof name_)
        await expect(name_).to.equal(sting_to_validate)
    }


    public async searchingProductThroughApi(basic_url:string, endpoints:string, search:string){
         /**
         * This method post basic_url and endpoint and also string to search. It provides basic_url, endpoint and search to apihelp.get 
         * and then validate that the first value in json reponse contains given string i.e. search.
         */
        let res1 = await this.apihelp.post(basic_url,endpoints,search);
        await console.log(res1.products[0]);
        let name = await res1.products[0].name.toString();
        await console.log(name);
        await expect(name.includes(search)).to.equal(true);
    }
}