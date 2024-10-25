import HomePage from '../pageobjects/HomePage';
import SearchResultsPage from '../pageobjects/SearchResultsPage';

describe('Verify bus booking on Shohoz', () => {
  const homePage = new HomePage();
  const searchResultsPage = new SearchResultsPage();

  beforeEach(() => {
    cy.viewport(1280, 720); // Set the viewport size to 1280x720
    homePage.visit();
  });

  it('should verify bus booking', () => {
    homePage.verifyBusSelected();
    homePage.enterFromCity('Dhaka');
    homePage.enterToCity('Chittagong');
    homePage.selectDate('Wednesday, October 30, 2024');
    homePage.submitSearch();

    searchResultsPage.selectBusTypeAndOperator();
    searchResultsPage.selectLowestPriceTicket();
    searchResultsPage.verifyAndSelectSeats();
    searchResultsPage.continueBooking();


  });
});