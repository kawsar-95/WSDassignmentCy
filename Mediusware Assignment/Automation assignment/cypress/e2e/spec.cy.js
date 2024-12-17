


import LoginPage from '../pageobjects/HomePage';
import MainPage from '../pageobjects/SearchResultsPage';

describe('Verify bus booking on Shohoz', () => {
  const loginPage = new LoginPage();
  const mainPage = new MainPage();

  beforeEach(() => {
    // Prevent Cypress from failing the test due to the Service Worker error
    Cypress.on('uncaught:exception', (err, runnable) => {
      if (err.message.includes('Failed to register a ServiceWorker')) {
        return false; // Ignore this specific error
      }
      return true; // Let Cypress handle other uncaught exceptions normally
    });
    cy.viewport(1280, 800);
    cy.visit('https://dev.housebrands.com/auth/login');
  });

  it('should verify when I login with valid credentials', () => {
    loginPage.login("designer@gmail.com", "password");
    cy.wait(2000);

    mainPage.verifyDashboard(); // Assert that the dashboard is visible
    mainPage.navigateToProfile(); // Navigate to profile
    cy.wait(2000);
    mainPage.navigateToBookings(); // Navigate to bookings
  });

  it('should verify when I login with invalid credentials', () => {
    loginPage.login("desigr@gmail.com", "password123");
    cy.wait(2000);

    loginPage.verifyErrorMessage("Credential doesn't match!"); // Assert that error message is visible
  });
});
