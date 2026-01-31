*** Settings ***
Library    SeleniumLibrary

*** Variables ***
${USERNAME_INPUT}    id=user-name
${PASSWORD_INPUT}    id=password
${LOGIN_BUTTON}     id=login-button
${ERROR_MESSAGE}    css=.error-message-container.error h3
${VALID_USERNAME}    standard_user
${VALID_PASSWORD}    secret_sauce

*** Keywords ***
Input Username
    [Arguments]    ${username}=${VALID_USERNAME}
    Wait Until Element Is Visible    ${USERNAME_INPUT}    5s
    Input Text    ${USERNAME_INPUT}    ${username}

Input Password
    [Arguments]    ${password}=${VALID_PASSWORD}
    Wait Until Element Is Visible    ${PASSWORD_INPUT}    5s
    Input Text    ${PASSWORD_INPUT}    ${password}

Click Login Button
    Wait Until Element Is Visible    ${LOGIN_BUTTON}    5s
    Click Button    ${LOGIN_BUTTON}

Login With Credentials
    [Arguments]    ${username}=${VALID_USERNAME}    ${password}=${VALID_PASSWORD}
    Input Username    ${username}
    Input Password    ${password}
    Click Login Button

Page Should Contain Error Message
    [Arguments]    ${expected_error}
    Wait Until Element Is Visible    ${ERROR_MESSAGE}    5s
    Element Text Should Be    ${ERROR_MESSAGE}    ${expected_error}
