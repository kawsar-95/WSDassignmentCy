class LoginPage {
  // Selectors
  emailInput = "input[placeholder='Enter your email']";
  passwordInput = "input[placeholder='*****************']";
  submitButton = "button[type='submit']";
  errorMessage = '.Toastify__toast-body > :nth-child(2)';

  // Actions
  enterEmail(email) {
    cy.get(this.emailInput).type(email);
  }

  enterPassword(password) {
    cy.get(this.passwordInput).type(password);
  }

  submitLogin() {
    cy.get(this.submitButton).click();
  }

  verifyErrorMessage(message) {
    cy.get(this.errorMessage).contains(message);
  }

  // Combine steps for login
  login(email, password) {
    this.enterEmail(email);
    this.enterPassword(password);
    this.submitLogin();
  }
}

export default LoginPage;
