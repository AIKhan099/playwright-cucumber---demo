import { BeforeAll,AfterAll, After, Before  } from "@cucumber/cucumber";
import { Browser, Page, chromium } from "@playwright/test";
import { pageFixture } from "./PageFixture";
let browser : Browser;
let  new_page: Page;


Before( async function(){
    browser = await chromium.launch({ headless: false });  // Or 'firefox' or 'webkit'.
    new_page = await browser.newPage();
    pageFixture.page = new_page;
});

After(async function(){
    await pageFixture.page.close();
    await new_page.close();
})