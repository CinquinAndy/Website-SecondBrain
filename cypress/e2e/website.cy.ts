// @ts-ignore
describe('Parcours utilisateur, validation des boutons', () => {
  it('visit local', () => {
    cy.visit('http://localhost:3000/')
  })
  it('validate texts', () => {
    cy.visit('http://localhost:3000/')
    cy.get("h1").should("contain", "Accédez à plusieurs années de travail, de réflexion, et de recherche dans l'informatique !");
  })
  it('validate buttons', () =>{
    cy.visit('http://localhost:3000/')
    cy.get("#btn-avoirunacces").should("have.attr", "href", "mailto:contact@andy-cinquin.fr");
  })
})
