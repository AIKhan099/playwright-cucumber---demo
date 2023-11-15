
import{Given, When, setDefaultTimeout} from "@cucumber/cucumber";
import { SignUp } from "../../../PageObjects/signUp.page";
setDefaultTimeout(30000);

const signup = new SignUp();

Given('I am on the {string} page', async function (string) {
    // Write code here that turns the phrase above into concrete actions
    console.log("1");
    await signup.GoingToPage("login");
  });


  



  When('I signup with {string}, {string} and {string}.', async function (username, email, password) {
    // Write code here that turns the phrase above into concrete actions
    console.log("1");
    
    await signup.enterUsername(username)
    await signup.enterEmail(email)
    await signup.clickSubmitBtn()
    await signup.enterPassword(password)
    await signup.enteringDob();
  });

  When('I enter address information {string}, {string}, {string},{string},{string},{string},{string},{string} and {string}.', async function (firstName, lastName, company, adress1, adress2, state, city, zipcode, mobileNumber) {
    // Write code here that turns the phrase above into concrete actions
    console.log("1");
  
    await signup.enterFirstName(firstName);
    await signup.enterLastName(lastName);
    await signup.enterCompany(company);
    await signup.enterAdress1(adress1);
    await signup.enterAdress2(adress2);
    await signup.enterState(state);
    await signup.enterCity(city);
    await signup.enterZipCode(zipcode);
    await signup.enterMobileNumber(mobileNumber);
    await signup.entercreateAccountBtn();
    await signup.getTitle();
  });