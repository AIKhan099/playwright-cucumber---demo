import { chromium,Page, expect, } from "@playwright/test";
import { pageFixture } from "../src/hooks/PageFixture";




export class SignUp {
    
    /**
     * define selectors using getter methods
     */
    public check () {
        return '//input[@data-qa="signup-name"]';
    }
    public get inputUsername () {
        return '//input[@data-qa="signup-name"]';
    }

    public get inputEmail () {
        return '//input[@data-qa="signup-email"]';
    }

    public get btnSubmit () {
        return '//button[@data-qa="signup-button"]';
    }
    public get inputPassword(){
        return '//input[@data-qa="password"]';
    }

    public get firstName(){
        return `//input[@data-qa="first_name"]`;
    }
    
    public get lastName(){
        return `//input[@data-qa="last_name"]`;
    }

    public get company(){
        return `//input[@data-qa="company"]`;
    }
    public get adress1(){
        return `//input[@data-qa="address"]`;
    }

    public get adress2(){
        return `//input[@data-qa="address2"]`;
    }

    public get state(){
        return `//input[@data-qa="state"]`;
    }

    public get city(){
        return `//input[@data-qa="city"]`;
    }

    public get zipCode(){
        return `//input[@data-qa="zipcode"]`;
    }

    public get mobileNumber(){
        return `//input[@data-qa="mobile_number"]`;
    }

    public get createAccountBtn(){
        return `//p[@class="required form-group"]/following-sibling::button`;
    }

    public get successTitle(){
        return `//h2[@class="title text-center"]`;
    }
    
    public get inputSubscribe(){
        return `#susbscribe_email`;
    }

    public logoutBtn(){
        return `(//div[@class="shop-menu pull-right"]/ul/li/a)[4]`;
    }

    public async GoingToPage(path:String){
        console.log("Into the Going to the page")
        await pageFixture.page.goto(`https://www.automationexercise.com/${path}`);
        
    }
    public async enteringDob(){
        
        const selectday = await `//select[@data-qa="days"]`;
        await pageFixture.page.selectOption(selectday,"1");
        const selectmonth = await `//select[@data-qa="months"]`;
        await pageFixture.page.selectOption(selectmonth,"1");
        const selectyear = await `//select[@data-qa="years"]`;
        await pageFixture.page.selectOption(selectyear,"1996");

        
    }

    

    // ---------------
    public async enterUsername(username:string){
        await pageFixture.page.locator(this.inputUsername).fill(username);
    }
    public async enterEmail(email:string ){
        await pageFixture.page.locator(this.inputEmail).fill(email);
    }

    public async clickSubmitBtn(){
        await pageFixture.page.locator(this.btnSubmit).click();
    }

    public async enterPassword(password: string){
        await pageFixture.page.locator(this.inputPassword).fill(password);
    }

    // ____________________________

    
    // ------------------
    public async enterFirstName(firstName: string){
        await pageFixture.page.locator(this.firstName).fill(firstName);
    }
    public async enterLastName(lastName: string){
        await pageFixture.page.locator(this.lastName).fill(lastName);
    }
    public async enterCompany(company: string){
        await pageFixture.page.locator(this.company).fill(company);
    }
    public async enterAdress1(adress1: string){
        await pageFixture.page.locator(this.adress1).fill(adress1);
    }
    public async enterAdress2(adress2: string){
        await pageFixture.page.locator(this.adress2).fill(adress2);
    }
    public async enterState(state: string){
        await pageFixture.page.locator(this.state).fill(state);
    }
    public async enterCity(city: string){
        await pageFixture.page.locator(this.city).fill(city);
    }
    public async enterZipCode(zipCode: string){
        await pageFixture.page.locator(this.zipCode).fill(zipCode);
    }
    public async enterMobileNumber(mobileNumber: string){
        await pageFixture.page.locator(this.mobileNumber).fill(mobileNumber);
    }
    public async enterinputSubscribe(inputSubscribe: string){
        await pageFixture.page.locator(this.inputPassword).fill("dummy");
    }
    public async entercreateAccountBtn(){
        await pageFixture.page.locator(this.createAccountBtn).click();
    }

    // ----------------------------------------

    public async getTitle(){
        txt1:String ;
        
        let txt_1 = await pageFixture.page.locator(this.successTitle).textContent();
        console.log(txt_1, typeof txt_1, "_______________________________");
        expect(txt_1).toEqual("Account Created!");
    }

    public async signOut(){
        await pageFixture.page.locator(`xpath =` + this.logoutBtn).click();
    }
}

