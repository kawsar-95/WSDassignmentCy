class MainPage {
  // Selectors
  dashboardButton = '.object-contain';
  profileButton = "a[class='cursor-pointer transition-all duration-1000 overflow-hidden hover:bg-hover p-1 rounded-full']";
  bookingsButton = "a[class='flex items-center gap-2 px-3 py-2 rounded-md hover:bg-yellowShade1']";

  // Actions
  verifyDashboard() {
    cy.get(this.dashboardButton).should('be.visible');
  }

  navigateToProfile() {
    cy.get(this.profileButton).click();
  }

  navigateToBookings() {
    cy.get(this.bookingsButton).click();
  }
}

export default MainPage;
