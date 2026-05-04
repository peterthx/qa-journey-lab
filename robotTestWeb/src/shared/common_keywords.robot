*** Settings ***
Documentation    Common keywords for application setup and teardown.
Library          SeleniumLibrary
Resource    ../config.robot

*** Keywords ***
Open Application
    [Documentation]    Opens the application in the specified browser and maximizes the window.
    Open Browser    ${URL}    browser=${BROWSER}
    Set Selenium Timeout    ${GLOBAL_TIMEOUT}
    Maximize Browser Window

Close Application
    [Documentation]    Closes the browser session.
    Close Browser
