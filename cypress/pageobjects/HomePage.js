class HomePage {
  visit() {
    cy.visit('https://www.shohoz.com/');
    cy.wait(5000);
  }

  verifyBusSelected() {
    cy.wait(5000);
    cy.get('a[routerlink="/bus-tickets"].current').should('be.visible');
    cy.wait(5000);
  }

  enterFromCity(city) {
    cy.wait(5000);
    cy.get('#fromcity').type(city);
    cy.wait(5000);
    cy.get('.fromcity-input > .station-filter-dropdown > :nth-child(1)').click();
    cy.wait(5000);
  }

  enterToCity(city) {
    cy.wait(5000);
    cy.get('#tocity').type(city);
    cy.wait(5000);
    cy.get('.tocity-input > .station-filter-dropdown > :nth-child(1)').click();
    cy.wait(5000);
  }

  selectDate(date) {
    cy.wait(5000);
    cy.get('[for="doj"]').click({ force: true });
    cy.wait(5000);
    cy.get(`:nth-child(2) > ngb-datepicker > .ngb-dp-content > .ngb-dp-month > ngb-datepicker-month > :nth-child(6) > [aria-label="${date}"] > .btn-light`).click();
    cy.wait(5000);
  }

  submitSearch() {
    cy.wait(5000);
    cy.get("button[type='submit']").click();
    cy.wait(5000);
  }
}

export default HomePage;