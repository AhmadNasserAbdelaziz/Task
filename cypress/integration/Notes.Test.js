context("Locate 'New Card' Page Elements", () => {
  before(() => {
    cy.visit("http://127.0.0.1:5500/new-card.html");
  });
  it("Page should have a Navbar", () => {
    cy.get("nav").should("exist");
  });
  it('Navbar should contain a video background, "Welcome" and "created by" Text', () => {
    cy.get("nav").find("#welcomeVideo").should("exist");
    cy.get("nav").find("h1").should("contain", "Welcome");
    cy.get("nav").find("p").should("contain", "Created by Ahmad AbdelAziz");
  });

  it("Page Should have a sidebar", () => {
    cy.get(".side-bar").should("exist");
  });
  it('Sidebar should contain a "New Card" Button and "New Note" Button', () => {
    cy.get(".side-bar").find(".new-card-btn").should("contain", "New Card");
    cy.get(".side-bar").find(".your-cards-btn").should("contain", "Your Cards");
  });
  it("Page should contain a Content form", () => {
    cy.get(".content-form").should("exist");
  });

  it('Content form should contain a "Title" input and label, "Description" input and label, "Add Card" button and "Save" button', () => {
    cy.get("label").should("contain", "Title");
    cy.get(".content-form").find("#titleInput").should("exist");
    cy.get("label").should("contain", "Description");
    cy.get(".content-form").find("#descriptionInput").should("exist");
  });
});

context("Test sidebar buttons", () => {
  it("New card button should keep you on the same page", () => {
    cy.get(".side-bar").find(".new-card-btn").click();
    cy.url().should("include", "new-card.html");
  });

  it("Your cards button should take you to Your cards page", () => {
    cy.get(".side-bar").find(".your-cards-btn").click();
    cy.url().should("include", "your-cards.html");
  });
});

context("Test 'New Card' page input Validations", () => {
  before(() => {
    cy.visit("http://127.0.0.1:5500/new-card.html");
  });

  it(" both inputs value must be more than 10 character to be Valid", () => {
    cy.get("#titleInput").click();
    cy.get("#titleInput").type("notValid");
    cy.get("#descriptionInput").click();
    cy.get("#descriptionInput").type("notValid");
    cy.get("#submit").click();
    cy.get(".title-error").should("have.css", "display", "block");
    cy.get(".desc-error").should("have.css", "display", "block");
    cy.get("form").clear();
  });
  it("If all validations are valid, errors should`nt appear and redirect to your cards page", () => {
    cy.get("#titleInput").click();
    cy.get("#titleInput").type("Title Validation is True");
    cy.get("#descriptionInput").click();
    cy.get("#descriptionInput").type("Desc Validation is True");
    cy.get("#submit").click();
    cy.url().should("include", "your-cards.html");
  });
});

context("Locate 'Your Cards' Page Elements", () => {
  before(() => {
    cy.visit("http://127.0.0.1:5500/your-cards.html");
  });

  it("should have a Navbar", () => {
    cy.get("nav").should("exist");
  });
  it('Navbar should contain a video background, "Welcome" and "created by" Text', () => {
    cy.get("nav").find("#welcomeVideo").should("exist");
    cy.get("nav").find("h1").should("contain", "Welcome");
    cy.get("nav").find("p").should("contain", "Created by Ahmad AbdelAziz");
  });

  it("Page Should have a sidebar", () => {
    cy.get(".side-bar").should("exist");
  });
  it('Sidebar should contain a "New Card" Button and "New Note" Button', () => {
    cy.get(".side-bar").find(".new-card-btn").should("contain", "New Card");
    cy.get(".side-bar").find(".your-cards-btn").should("contain", "Your Cards");
  });
  it("Page should have a 'Your Cards' div with a 'board inside it ", () => {
    cy.get(".your-cards").find(".board").should("exist");
  });

  it("Board should contain a list of cards", () => {
    cy.get(".board").find(".note").should("exist");
  });
});

context("Delete button should delete the 'Note' element ", () => {
  it("Clicking the delete button should delete the Note element", () => {
    cy.get(".note").find(".delete").click();
    cy.get(".note").should("not.exist");
  });
});