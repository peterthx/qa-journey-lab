*** Settings ***
Resource    ../../src/App.robot

Test Setup       Open Application
Test Teardown    Close Application

*** Test Cases ***
Login With Valid Credentials
    [Documentation]    Test successful login with valid credentials.
    [Tags]             smoke    regression    positive
    Login With Credentials
    Page Should Contain Title    Products
    Logout From Application

Login With Invalid Username
    [Documentation]    Test login with invalid username.
    [Tags]             regression    negative
    Login With Credentials    invalid_user    secret_sauce
    Page Should Contain Error Message    Epic sadface: Username and password do not match any user in this service
