import supertest from 'supertest';
import  { expect } from 'chai';

export class apiHelp{
    

    public async get(basic_url:string, endpoints:string){
        /**
         * This method takes basic url and endpoints. It sends the request with get method and then return the Json response.
         */

    const request = await  supertest(basic_url);
    const res = await request.get(endpoints);
    await  console.log("______________________________________________",res.status)
    await console.log("______________________________________________",res.text[5], typeof res.text)
    const res2 = await JSON.parse(res.text)
    return res2

    }

    public async post(basic_url:string, endpoints:string, search:string){
            /**
             * This method takes basic url,endpoints and a string which is to be searched. 
             * It sends the request with post method and search for the given keyword. This method returns the Json response.
             */
        const request = await  supertest(basic_url);
        const res = await request.post(endpoints).send(`search_product=${search}` );
        await console.log("########################", res.text, res.statusCode);
        const res1 = await JSON.parse(res.text);
        return res1
    
    }
}