<plan>
1. Design 5 test cases for the Login feature, covering:
   - Successful login with valid credentials.
   - Error message when entering incorrect email/password.
   - Attempt to login with empty fields.
2. Design 4 test cases for the Search feature, covering:
   - Search for a valid product name (e.g., "chair").
   - Search with no matching results.
   - Search with special characters or empty input.
3. Automate the Login feature using Cypress, covering:
   - Successful login with valid credentials.
   - Invalid login attempts (incorrect email/password).
4. Perform manual testing of the Login and Search features.
5. Identify and document at least 2 defects, if any, with details.
6. Create a README file with instructions to run the automation script and an overview of the submission.
7. Zip all deliverables (test cases, automation scripts, and bug reports) and provide a link for submission.
</plan>

### Step 1: Design Test Cases

#### Login Feature Test Cases

1. **Test Case 1: Successful login with valid credentials**
   - **Precondition:** User is on the login page.
   - **Steps:**
     1. Enter email: designer@gmail.com
     2. Enter password: password
     3. Click the Login button.
   - **Expected Result:** User is redirected to the homepage.

2. **Test Case 2: Error message with incorrect email**
   - **Precondition:** User is on the login page.
   - **Steps:**
     1. Enter email: wrong@gmail.com
     2. Enter password: password
     3. Click the Login button.
   - **Expected Result:** Error message "Invalid email or password" is displayed.

3. **Test Case 3: Error message with incorrect password**
   - **Precondition:** User is on the login page.
   - **Steps:**
     1. Enter email: designer@gmail.com
     2. Enter password: wrongpassword
     3. Click the Login button.
   - **Expected Result:** Error message "Invalid email or password" is displayed.

4. **Test Case 4: Attempt to login with empty email field**
   - **Precondition:** User is on the login page.
   - **Steps:**
     1. Leave email field empty.
     2. Enter password: password
     3. Click the Login button.
   - **Expected Result:** Error message "Email is required" is displayed.

5. **Test Case 5: Attempt to login with empty password field**
   - **Precondition:** User is on the login page.
   - **Steps:**
     1. Enter email: designer@gmail.com
     2. Leave password field empty.
     3. Click the Login button.
   - **Expected Result:** Error message "Password is required" is displayed.

#### Search Feature Test Cases

1. **Test Case 1: Search for a valid product name**
   - **Precondition:** User is on the homepage.
   - **Steps:**
     1. Enter "chair" in the search box.
     2. Click the Search button.
   - **Expected Result:** Search results for "chair" are displayed.

2. **Test Case 2: Search with no matching results**
   - **Precondition:** User is on the homepage.
   - **Steps:**
     1. Enter "nonexistentproduct" in the search box.
     2. Click the Search button.
   - **Expected Result:** Message "No results found" is displayed.

3. **Test Case 3: Search with special characters**
   - **Precondition:** User is on the homepage.
   - **Steps:**
     1. Enter "!@#$%^&*()" in the search box.
     2. Click the Search button.
   - **Expected Result:** Message "No results found" is displayed.

4. **Test Case 4: Search with empty input**
   - **Precondition:** User is on the homepage.
   - **Steps:**
     1. Leave the search box empty.
     2. Click the Search button.
   - **Expected Result:** Message "Please enter a search term" is displayed.

### Step 2: Automation Script for Login Feature

```javascript
// cypress/integration/login_spec.js
describe('Login Tests', () => {
  it('should successfully login with valid credentials', () => {
    cy.visit('https://dev.housebrands.com/auth/login');
    cy.get('input[name=email]').type('designer@gmail.com');
    cy.get('input[name=password]').type('password');
    cy.get('button[type=submit]').click();
    cy.url().should('include', '/homepage');
  });

  it('should show error message with incorrect email', () => {
    cy.visit('https://dev.housebrands.com/auth/login');
    cy.get('input[name=email]').type('wrong@gmail.com');
    cy.get('input[name=password]').type('password');
    cy.get('button[type=submit]').click();
    cy.get('.error-message').should('contain', 'Invalid email or password');
  });

  it('should show error message with incorrect password', () => {
    cy.visit('https://dev.housebrands.com/auth/login');
    cy.get('input[name=email]').type('designer@gmail.com');
    cy.get('input[name=password]').type('wrongpassword');
    cy.get('button[type=submit]').click();
    cy.get('.error-message').should('contain', 'Invalid email or password');
  });

  it('should show error message with empty email field', () => {
    cy.visit('https://dev.housebrands.com/auth/login');
    cy.get('input[name=password]').type('password');
    cy.get('button[type=submit]').click();
    cy.get('.error-message').should('contain', 'Email is required');
  });

  it('should show error message with empty password field', () => {
    cy.visit('https://dev.housebrands.com/auth/login');
    cy.get('input[name=email]').type('designer@gmail.com');
    cy.get('button[type=submit]').click();
    cy.get('.error-message').should('contain', 'Password is required');
  });
});
```

### Step 3: Manual Testing and Bug Reporting

#### Bug Report Example

1. **Defect ID:** 001
2. **Summary:** Error message is not displayed for invalid email.
3. **Steps to Reproduce:**
   1. Navigate to the login page.
   2. Enter email: wrong@gmail.com
   3. Enter password: password
   4. Click the Login button.
4. **Expected Result:** Error message "Invalid email or password" is displayed.
5. **Actual Result:** No error message is displayed.
6. **Severity:** Medium
7. **Screenshots:** [Include if applicable]

### Step 4: Submission

1. Zip all files (test cases, automation scripts, and bug reports).
2. Create a README file with instructions:
   - Instructions to run the automation script:
     - Install Cypress: `npm install cypress`
     - Run Cypress: `npx cypress open`
     - Select the test file `login_spec.js` to run the tests.
   - Overview of the submission.
3. Upload the zip file to Google Drive and set sharing permissions (anyone with the link can view).
4. Email the Google Drive link to hr@mediusware.com with the subject "Senior SQA Engineer Test Task Submission – [Your Name]".
