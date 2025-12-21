*** Settings ***
Documentation     A sample test suite for API testing.
...               This test suite assumes you have a library like
...               robotframework-requests installed.
Library           RequestsLibrary
# Resource          ../resources/api_keywords.robot

*** Test Cases ***
Sample GET Request
    [Tags]    smoke
    ${response}=    GET    https://jsonplaceholder.typicode.com/todos/1
    Should Be Equal As Strings    ${response.status_code}    200
