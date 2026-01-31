*** Settings ***
Library    SeleniumLibrary

*** Variables ***
${URL}    https://www.saucedemo.com/
${BROWSER}    firefox

*** Keywords ***
Open Application
    Open Browser    ${URL}    browser=${BROWSER}
    Maximize Browser Window

Close Application
    Close Browser
