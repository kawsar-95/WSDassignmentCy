class SearchResultsPage {
  selectBusTypeAndOperator() {
    cy.wait(10000); // Wait for the page to load
    cy.get('.mt-3 > :nth-child(2) > label').click();
    cy.get('#operator-24').check();
    cy.get('#operator-173').check();
  }

  selectLowestPriceTicket() {
    cy.contains('Low to High').click();
    cy.get('button.btn-book-ticket').first().click();
  }

  verifyAndSelectSeats() {
    cy.get('button.btn-seat.seat-available').then(seats => {
      if (seats.length < 4) {
        throw new Error('Not enough available seats to select 4 tickets.');
      }
      for (let i = 0; i < 4; i++) {
        cy.wrap(seats[i]).click();
      }
    });
  }

  continueBooking() {
    cy.get('.viewer-counter-msg').should('exist');
    cy.get('.stepper-continue-btn').click();
    cy.get('.boarding-points > :nth-child(1)').click();
    cy.get('.stepper-continue-btn').click();
    cy.get('.p-4').should('be.visible');
  }
}

export default SearchResultsPage;