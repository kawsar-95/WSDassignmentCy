# Assignment 
# Cypress Test Automation Framework

This project is a test automation framework using Cypress for UI and API testing. The framework is designed to be scalable and adaptive to handle additional tests in the future. It follows the Page Object Model (POM) design pattern.

## Project Structure

```
cypress/
  e2e/
    spec.cy.js
  fixtures/
    example.json
  pageobjects/
    HomePage.js
    SearchResultsPage.js
  support/
    commands.js
    e2e.js
cypress.config.js
package.json
README.md
```

## Installation


1. Navigate to the project directory:
    ```sh
    cd 'Mediusware Assignment'
    ```
2. Install the dependencies:
    ```sh
    npm install
    ```

## Running Tests

To run the tests, use the following command:
```sh
npx cypress open
```
This will open the Cypress Test Runner, where you can run the tests interactively.

Alternatively, you can run the tests in headless mode:
```sh
npx cypress run
```

## Project Details

### Page Objects


### Test Specification

#### spec.cy.js
Located in `cypress/e2e/spec.cy.js`

Contains the test suite for verifying bus booking on Shohoz.

### Configuration

#### cypress.config.js
Located in `cypress.config.js`

Contains the Cypress configuration settings.

### Support Files

#### commands.js
Located in `cypress/support/commands.js`

Contains custom Cypress commands.

#### e2e.js
Located in `cypress/support/e2e.js`

Contains global configuration and behavior for Cypress.

