import { chromium,Page, expect, } from "@playwright/test";
import { pageFixture } from "../src/hooks/PageFixture";
import  blueProduct  from "../data/blueProduct.json";


import { assert } from "console";
import { type } from "os";

export class ProductPage{

    public ProductXpath(name_) {
        
        let path =  `(//div[@class="productinfo text-center"]/p[contains(text(), "${name_}")])[1]`;
        return path;
    }

    public AddToCard(name_){
        return `(//div[@class="productinfo text-center"]/p[contains(text(), "${name_}")])[1]//parent::div/a`;
    }

    public get inputSubscribe(){
        return `#susbscribe_email`;
    }
    public get P1(){
        
         return `(//div[@class="productinfo text-center"]/a[@data-product-id="1"])[1]`;
        
    }

    public get contShopBtn(){
        // return $(`//button[@class="btn btn-success close-modal btn-block"]`)
        return `(//button[normalize-space()='Continue Shopping'])[1]`;
    }

    public get cartBtn(){
        return `(//div[@class="shop-menu pull-right"]/ul/li/a)[3]`;
    }

    public get allCartPrdt(){
        return `//table[@id="cart_info_table"]/tbody/tr/td/h4`;
    }

    public eachProductName(i){
        return `(//table[@id="cart_info_table"]/tbody/tr/td/h4)[${i}]`;
    }

    public signUpLoginBtn(){
        return `(//div[@class="shop-menu pull-right"]/ul/li/a)[4]`;
    }


    public async addProductToCart(){
        /**
         * 
         * This method add product to the cart. It takes the data from blueProduct.json file and then add these to the cart.
         */
        
        const  sleep =  (ms:number) => new Promise((resolve) => setTimeout(resolve, ms));
        console.log( "__________________----------------0")
        
        const all_blue_products = Object.keys(blueProduct);
        const all_blue_products_val = Object.values(blueProduct);
        console.log(all_blue_products, all_blue_products_val);
        for (let i=0; i < Object.keys(blueProduct).length; i++){
           
            await pageFixture.page.locator(this.inputSubscribe).fill("dummy");
            await sleep(1000);

            console.log(`xpath=`+all_blue_products_val[i]);
            await pageFixture.page.locator(`xpath=`+ all_blue_products_val[i]).hover();
            await pageFixture.page.locator(`xpath=`+ all_blue_products_val[i]).click();
            await sleep(1000);
            await pageFixture.page.locator(this.contShopBtn).click();
            
        }
            
    }

    public async verifyProductsInCart(){
        /**
         * 
         * This method checks 'whether all the added-product-to-the-cart are blue or not'. It will fail the test case if any of them does not contain
         * blue.
         */
        const sleep = (ms:number) => new Promise((resolve) => setTimeout(resolve, ms));
        await sleep(2000);
        await pageFixture.page.locator(this.cartBtn).click();
       
        let all_products = (await pageFixture.page.$$(this.allCartPrdt)).length;
       
        console.log("_______________--total products in cart", all_products);
        for (let i=1; i<= all_products; i++){
          
            let product_name = await pageFixture.page.locator(this.eachProductName(i)).textContent()
            console.log("#########################",product_name," ",);
            expect(product_name.toLowerCase()).toContain("blue");
        }
    }

    

}

