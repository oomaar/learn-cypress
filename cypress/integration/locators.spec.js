/// <reference types="cypress" />

describe("Locators", () => {
  beforeEach(() => {
    cy.visit("/elements");
  });

  it("locating elements with the get command", () => {
    // Getting all of the element by tag name
    cy.get("button");

    // Get all elements by the className
    cy.get(".btn-with-class");

    // Get all elements with specific classes
    cy.get("[class='Elements-btn btn-with-class more-btn-classes']");
    cy.get("[class='Elements-btn btn-with-class']");

    // Get all elements by id
    cy.get("[id='btn-with-id']");
    cy.get("#btn-with-id");

    // Get all elements by specific attr
    cy.get("[type='submit']");

    // Get all elements by tagName and class
    cy.get("button.Elements-btn");

    // Get all elements by tagName And class And id
    cy.get("button.Elements-btn#btn-with-id");

    // Get all elements by tagName And class And type attribiute
    cy.get("button.Elements-btn[type='submit']");

    // Get all elements by with specific data-test-id
    cy.get("[data-cy='btn-id-1']");

    // Get all elements by with specific data-test-id with a custom command in commands.js
    cy.getByTestId("btn-id-1");
  });
});
