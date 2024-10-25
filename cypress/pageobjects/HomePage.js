class HomePage {
  visit() {
    cy.visit('https://www.shohoz.com/');
  }

  verifyBusSelected() {
    cy.get('a[routerlink="/bus-tickets"].current').should('be.visible');
  }

  enterFromCity(city) {
    cy.get('#fromcity').type(city);
    cy.get('.fromcity-input > .station-filter-dropdown > :nth-child(1)').click();
  }

  enterToCity(city) {
    cy.get('#tocity').type(city);
    cy.get('.tocity-input > .station-filter-dropdown > :nth-child(1)').click();
  }

  selectDate(date) {
    cy.get('[for="doj"]').click({ force: true });
    cy.get(`:nth-child(2) > ngb-datepicker > .ngb-dp-content > .ngb-dp-month > ngb-datepicker-month > :nth-child(6) > [aria-label="${date}"] > .btn-light`).click();
  }

  submitSearch() {
    cy.get("button[type='submit']").click();
  }
}

export default HomePage;