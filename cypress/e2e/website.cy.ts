// @ts-ignore
describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')
    cy.get("h1").should("contain", "Accédez à plusieurs années de travail, de réflexion, et de recherche dans l'informatique !");
    cy.get("#btn-avoirunacces").should("have.attr", "href", "mailto:contact@andy-cinquin.fr");
  })
})
