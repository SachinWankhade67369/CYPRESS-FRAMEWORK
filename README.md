# CYPRESS-FRAMEWORK
CYPRESS-FRAMEWORK

This is a simple POC showing the e2e implementation and usage of the Cypress automation tool with Page Object Design pattarn.

1) Use the following command to clone the whole project into your workspace.
   > git clone -b master https://github.com/SachinWankhade67369/CYPRESS-FRAMEWORK.git

2) open a new terminal in VS Code in your system and go to project root.

3) Setup the project and required dependency by using the following command
   > npm install cypress prettier

4) Use the following command to open cypress in browser head mode.
   > npm run cy:open
    
    Click on the Test Script(spec file) to execute the same.
    
5) Use the following command to open cypress and run all the spec files in browser headless mode.    
   > npm run cy:run
   
6) Use following command for cross browser testing
   To run on Chrome Browser-
   > npm run cy:run:chrome
   
   To run on Firefox Browser-
   > npm run cy:run:firefox

   To run on Electron Browser-
   > npm run cy:run:electron

   To run on Edge Browser-
   > npm run cy:run:edge
    
