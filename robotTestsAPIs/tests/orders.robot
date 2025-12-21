*** Settings ***
Documentation     A sample test suite for API testing.
...               This test suite assumes you have a library like
...               robotframework-requests installed.
Resource          ../resources/api_keywords.robot

*** Test Cases ***
Orders GET Request
    [Tags]    smoke
    ${response}=    Get All Orders
    Response status code should be    ${response}    200
    Should Be Equal As Strings    ${response.json()}[success]    True
    Log    ${response.json()}
    Verify Order List Is Not Empty    ${response}
    Response JSON should contain key    ${response}    data

Order GET Request By ID
    [Tags]    smoke
    ${all_orders_response}=    Get All Orders
    Response status code should be    ${all_orders_response}    200
    ${first_order}=    Set Variable    ${all_orders_response.json()}[data][0]
    ${order_id}=    Set Variable    ${first_order}[order_id]
    ${single_order_response}=    Get Order By ID    ${order_id}
    Response status code should be    ${single_order_response}    200
    Should Be Equal As Strings    ${single_order_response.json()}[success]    True
    Should Be Equal As Strings    ${single_order_response.json()}[data][order][order_id]    ${order_id}