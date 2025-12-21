*** Settings ***
Documentation     A resource file for API testing keywords.
Library           RequestsLibrary
Library           Collections

*** Variables ***
${BASE_URL}       http://srv946485.hstgr.cloud:3000

*** Keywords ***
Get All Orders
    ${response}=    GET    ${BASE_URL}/api/orders
    Log    ${response.json()}
    RETURN    ${response}

Get Order By ID
    [Arguments]    ${order_id}
    ${response}=    GET    ${BASE_URL}/api/orders/${order_id}
    Log    ${response.json()}
    RETURN    ${response}

Response status code should be
    [Arguments]    ${response}    ${status_code}
    Should Be Equal As Strings    ${response.status_code}    ${status_code}

Verify Order List Is Not Empty
    [Arguments]    ${response}
    ${orders}=    Set Variable    ${response.json()}[data]
    ${count}=    Get Length    ${orders}
    Should Be True    ${count} > 0

Response JSON should contain key
    [Arguments]    ${response}    ${key}
    Dictionary Should Contain Key    ${response.json()}    ${key}
    