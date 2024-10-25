class SearchResultsPage {
  selectBusTypeAndOperator() {
    cy.wait(10000); // Wait for the page to load
    cy.get('.mt-3 > :nth-child(2) > label').click();
    cy.wait(5000);
    cy.get('#operator-24').check();
    cy.wait(5000);
    cy.get('#operator-173').check();
    cy.wait(5000);
  }

  selectLowestPriceTicket() {
    cy.wait(5000);
    cy.contains('Low to High').click();
    cy.wait(5000);
    cy.get('button.btn-book-ticket').first().click();
    cy.wait(5000);
  }

  verifyAndSelectSeats() {
    cy.wait(5000);
    cy.get('button.btn-seat.seat-available').then(seats => {
      if (seats.length < 4) {
        throw new Error('Not enough available seats to select 4 tickets.');
      }
      for (let i = 0; i < 4; i++) {
        cy.wrap(seats[i]).click();
        cy.wait(5000);
      }
    });
  }

  continueBooking() {
    cy.wait(5000);
    cy.get('.viewer-counter-msg').should('exist');
    cy.wait(5000);
    cy.get('.stepper-continue-btn').click();
    cy.wait(5000);
    cy.get('.boarding-points > :nth-child(1)').click();
    cy.wait(5000);
    cy.get('.stepper-continue-btn').click();
    cy.wait(5000);
    cy.get('.p-4').should('be.visible');
    cy.wait(5000);
  }
}

export default SearchResultsPage;