Step #1
Creating Playwright project:
Create a folder e.g playwright_talent500 
Open the folder in VS Code
Run from the project’s root directory ‘npm init playwright@latest’ 

Step #2
Set up Cucumber With Playwright:
Below are the steps for integrating Cucumber in Playwright
Install the  cucumber dependency using the command 
Run the command ‘npm i @cucumber/cucumber’ – This command will install the Cucumber
Run the command npm i typescript-node -D , to have ts node dependencies

Step #4
Create feature file, 

Step #5
Create a runner file to execute the test cases in .json format.  Create a runner file in the root directory of the project , let’s name cucumber.json.
Add below line in cucumber.json here we are specifying the path of our feature file

{
    "default": {
        "formatOptions": {
            "snippetInterface": "async-await"
        },
        "publishQuiet": true,
        "dryRun": false,
        "paths": [
            "src/tests/features/"
        ],
        "require": [
            "src/tests/steps/*.ts"
        ],
        "requireModule": [
            "ts-node/register"
        ],
        "format": [
            "html:test-results/cucumber-report.html"
        ]
    }
}

Step #6
Run Cucumber test cases
Feature and step definition both file created , next step is to execute the the test cases
Use command ‘npm run test’
As we run above command it will execute the script from package.json 

“scripts”: { “test”: “cucumber-js test” }. When you run ‘npm test’ or ‘yarn test’, it will execute the cucumber-js test.


https://playwright.dev/docs/api/class-page#page-locator

How to work with Xpath and with other locators?
https://playwright.dev/docs/locators

