*** Settings ***
Resource    ../../resources/po/shared/common_keywords.robot
Resource    ../../resources/po/pages/login_page.robot
Resource    ../../resources/po/pages/home_page.robot

Test Setup    Open Application
Test Teardown    Close Application

*** Test Cases ***
Login With Valid Credentials
    [Documentation]    Test successful login with valid credentials.
    Login With Credentials
    Page Should Contain Title    Products
    Logout From Application


Login With Invalid Username
    [Documentation]    Test login with invalid username.
    Login With Credentials    invalid_user    secret_sauce
    Page Should Contain Error Message    Epic sadface: Username and password do not match any user in this service
