
import{Given, When, setDefaultTimeout} from "@cucumber/cucumber";
import { Login } from "../../../PageObjects/loginPage";
import { SignUp } from "../../../PageObjects/signUp.page";
setDefaultTimeout(30000);
const login = new Login();
const SignUp_ = new SignUp();

Given('I am on the login page', async function () {
    // Write code here that turns the phrase above into concrete actions
    await SignUp_.GoingToPage("login");
    
  });

  When('I login with {string} and {string}.', async function (email, password) {
    
    // await login.login(email, password);
    await login.enterEmail(email);
    await login.enterPassword(password);
    await login.clickSubmitBrn();
   
    });