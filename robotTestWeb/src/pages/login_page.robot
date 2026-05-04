*** Settings ***
Documentation    Page object for the Login page.
Library          SeleniumLibrary
Resource    ../config.robot

*** Variables ***
${LOGIN_USERNAME_INPUT}    id=user-name
${LOGIN_PASSWORD_INPUT}    id=password
${LOGIN_BUTTON}           id=login-button
${LOGIN_ERROR_MESSAGE}    css=.error-message-container.error h3

*** Keywords ***
Input Username
    [Arguments]    ${username}=${VALID_USERNAME}
    [Documentation]    Inputs the given username into the username field.
    Wait Until Element Is Visible    ${LOGIN_USERNAME_INPUT}    ${GLOBAL_TIMEOUT}
    Input Text    ${LOGIN_USERNAME_INPUT}    ${username}

Input Password
    [Arguments]    ${password}=${VALID_PASSWORD}
    [Documentation]    Inputs the given password into the password field.
    Wait Until Element Is Visible    ${LOGIN_PASSWORD_INPUT}    ${GLOBAL_TIMEOUT}
    Input Text    ${LOGIN_PASSWORD_INPUT}    ${password}

Click Login Button
    [Documentation]    Clicks the login button.
    Wait Until Element Is Visible    ${LOGIN_BUTTON}    ${GLOBAL_TIMEOUT}
    Click Button    ${LOGIN_BUTTON}

Login With Credentials
    [Arguments]    ${username}=${VALID_USERNAME}    ${password}=${VALID_PASSWORD}
    [Documentation]    Performs a full login operation with the provided credentials.
    Input Username    ${username}
    Input Password    ${password}
    Click Login Button

Page Should Contain Error Message
    [Arguments]    ${expected_error}
    [Documentation]    Verifies that the login error message matches the expected text.
    Wait Until Element Is Visible    ${LOGIN_ERROR_MESSAGE}    ${GLOBAL_TIMEOUT}
    Element Text Should Be    ${LOGIN_ERROR_MESSAGE}    ${expected_error}
