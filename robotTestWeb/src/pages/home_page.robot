*** Settings ***
Documentation    Page object for the Home page.
Library          SeleniumLibrary
Resource    ../config.robot

*** Variables ***
${HOME_BURGER_MENU}      id=react-burger-menu-btn
${HOME_LOGOUT_BUTTON}    id=logout_sidebar_link
${HOME_PAGE_TITLE}       class=title

*** Keywords ***
Logout From Application
    [Documentation]    Logs out from the application using the side menu.
    Wait Until Element Is Visible    ${HOME_BURGER_MENU}    ${GLOBAL_TIMEOUT}
    Click Element     ${HOME_BURGER_MENU}
    Wait Until Element Is Visible    ${HOME_LOGOUT_BUTTON}    ${GLOBAL_TIMEOUT}
    Click Element    ${HOME_LOGOUT_BUTTON}

Page Should Contain Title
    [Arguments]    ${expected_title}
    [Documentation]    Verifies that the page title matches the expected title.
    Wait Until Element Is Visible    ${HOME_PAGE_TITLE}    ${GLOBAL_TIMEOUT}
    Element Text Should Be    ${HOME_PAGE_TITLE}    ${expected_title}
