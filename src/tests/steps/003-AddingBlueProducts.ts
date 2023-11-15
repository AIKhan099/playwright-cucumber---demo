import { When, setDefaultTimeout } from "@cucumber/cucumber";
import { Login } from "../../../PageObjects/loginPage";
import { SignUp } from "../../../PageObjects/signUp.page";
// import { BlueProduct } from "../../../PageObjects/AddingBlueProducts.js";
import { pageFixture } from "../../hooks/PageFixture";
import { ProductPage } from "../../../PageObjects/products.page";

let blueProductClass = new ProductPage()
let signup = new SignUp();
let login = new Login();
const sleep = (ms:number) => new Promise((resolve) => setTimeout(resolve, ms));
setDefaultTimeout(300000);

When('I add all the blue products to cart.', async function () {
// Write code here that turns the phrase above into concrete actions
await sleep(5000);
// await pageFixture.page.setViewportSize({ width: 1920, height: 1080 }) ;
await blueProductClass.addProductToCart();
});


When('I check that all added products are blue.', async function () {
// Write code here that turns the phrase above into concrete actions
await blueProductClass.verifyProductsInCart();
});

When('I delete the account.', async function () {
// Write code here that turns the phrase above into concrete actions
 await login.accountDeletion();
});