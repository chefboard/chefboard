// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe("user navigation", function() {

  it("redirect to invoice page", function() {
    cy.visit('/')
    cy.get("[cy-data='nav-item--comanda']").click()
    cy.location('pathname').should('match', /comanda/)
  });

  it("redirect to queue page", function() {
    cy.visit('/')
    cy.get("[cy-data='nav-item--fila']").click()
    cy.location('pathname').should('match', /fila/)
  });

  it("redirect to home page", function() {
    cy.visit('/')
    cy.get("[cy-data='nav-item--cardapio']").click()
    cy.location('pathname').should('match', /\//)
  });
});
