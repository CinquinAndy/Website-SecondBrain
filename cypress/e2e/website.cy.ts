// @ts-ignore
describe('Parcours utilisateur, validation des boutons', () => {
    it('visit local', () => {
        cy.visit('http://localhost:3000/')
    })
    it('validate texts', () => {
        cy.visit('http://localhost:3000/')
        cy.get("h1").should("contain", "Accédez à plusieurs années de travail, de réflexion, et de recherche dans l'informatique !");
    })
    it('validate buttons mailto accross de site', () => {
        cy.visit('http://localhost:3000/')
        cy.get("#btn-avoirunacces").should("have.attr", "href", "mailto:contact@andy-cinquin.fr");
        cy.get("#btn-accedersecondcerveau").should("have.attr", "href", "mailto:contact@andy-cinquin.fr");
        cy.get("#btn-fairelevotre").should("have.attr", "href", "mailto:contact@andy-cinquin.fr");
        cy.get("#btn-cta").should("have.attr", "href", "mailto:contact@andy-cinquin.fr");
        cy.get("#btn-plan-acces-a-mon-second-cerveau").should("have.attr", "href", "mailto:contact@andy-cinquin.fr");
        cy.get("#btn-plan-formation-complete").should("have.attr", "href", "mailto:contact@andy-cinquin.fr");
    })
    it('validate btn on social medias part', () => {
        cy.visit('http://localhost:3000/')
        cy.get("#btn-githubicon").should("have.attr", "href", "https://github.com/CinquinAndy");
        cy.get("#btn-instagramicon").should("have.attr", "href", "https://www.instagram.com/cinquin.andy/");
        cy.get("#btn-linkedinicon").should("have.attr", "href", "https://www.linkedin.com/in/andy-cinquin/");
        cy.get("#btn-malticon").should("have.attr", "href", "https://www.malt.fr/profile/andycinquin");
    })

    it('validate ui Home', () => {
        cy.visit('http://localhost:3000/');
        cy.percySnapshot('Home test');
        cy.percySnapshot('Home test responsive', {widths: [375, 768, 1280, 1920]});
    });
})
