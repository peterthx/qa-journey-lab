*** Settings ***
Library    SeleniumLibrary

*** Variables ***
${BURGER_MENU}     id=react-burger-menu-btn
${LOGOUT_BUTTON}    id=logout_sidebar_link
${PAGE_TITLE}      class=title

*** Keywords ***
Logout From Application
    Wait Until Element Is Visible    ${BURGER_MENU}    5s
    Click Element     ${BURGER_MENU}
    Wait Until Element Is Visible    ${LOGOUT_BUTTON}    5s
    Click Element    ${LOGOUT_BUTTON}

Page Should Contain Title
    [Arguments]    ${expected_title}
    Wait Until Element Is Visible    ${PAGE_TITLE}    5s
    Element Text Should Be    ${PAGE_TITLE}    ${expected_title}
