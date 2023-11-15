Feature: Api Testing of automationexercise website

  Scenario Outline: Sending and verifying GET request.

    Given I send the GET request at "<url>" with the "<endpoint>" and first product contains "Blue Top".
    Examples: 
    |url| endpoint |
    | automationexercise.com | /api/productsList |

  Scenario Outline: Sending Post request and validation.
   
    Given I send the post request at "<url>" with the "<endpoint>" and to search "<product_to_be_searched>" .
    Examples: 
    |url| endpoint | product_to_be_searched|
    | automationexercise.com | /api/searchProduct | Jean |
  