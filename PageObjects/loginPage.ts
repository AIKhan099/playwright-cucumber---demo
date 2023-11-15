import { chromium,Page, expect, } from "@playwright/test";
import { pageFixture } from "../src/hooks/PageFixture";


export class Login{

    public get inputEmail(){
        return `//input[@data-qa="login-email"]`;
    }

    public get inputPassword(){
        return `//input[@data-qa="login-password"]`;
    }

    public get submit(){
        return `//button[@data-qa="login-button"]`;
    }
    public get accDelBtn(){
        return `(//ul[@class="nav navbar-nav"]/li)[5]/a`;
    }
    public get logoutBtn(){
        return `(//ul[@class="nav navbar-nav"]/li)[4]/a`;
    }

    
    
    public async enterEmail(email:string){
       
        await pageFixture.page.locator(this.inputEmail).fill(email);
    }

    public async enterPassword(password:string){
       
        await pageFixture.page.locator(this.inputPassword).fill(password);
        
    }
    public async clickSubmitBrn(){
       
        await pageFixture.page.locator(this.submit).click();
    }

    public async logout(){
        // await this.logoutBtn.click();
        await pageFixture.page.locator(this.logoutBtn).click();
    }
    public async accountDeletion(){
        // await signup.open();
        // await this.accDelBtn.click();
        await pageFixture.page.locator(this.accDelBtn).click();
    }
    

}