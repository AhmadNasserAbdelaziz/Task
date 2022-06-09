describe("Locators", () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:5500/new-card.html");
  });

  it("Should find the Navbar should have a video and a welcome <h1> ", () => {
    cy.get("nav").get("video").get("div").get("h1").should("contain", "Welcome");
  });

  it("Should find the main content with the SideBar and The Content Form", () => {
    cy.get(".main-content").get(".side-bar").get(".content-form");
  });

  it("Should find two buttons one with the text 'New Card' and one with the text 'Your Cards'", () => {
    cy.get(".new-card-btn").should("contain", "New Card");
    cy.get(".your-cards-btn").should("contain", "Your Cards");
  });

  it("Should find the form with the input fields with a save button", () => {
    cy.get(".content-form").find("label").should("contain", "Title").get("input");

    cy.get(".content-form").find("label").should("contain", "Description").get("textarea");

    cy.get(".content-form").find("button").should("contain", "Save");
  });

  it("new Card Button should keep you in the same page", () => {
    cy.get(".side-bar").get(".upper-side-bar").get(".new-card-btn").click();
    cy.url().should("include", "new-card.html");
  });

  it("Your Cards Button should take you to Your cars page", () => {
    cy.get(".side-bar").get(".upper-side-bar").get(".your-cards-btn").click();
    cy.url().should("include", "your-cards.html");
  });

  it("it shouldn't allow the user to submit without input conditions met", () => {
   
    cy.get("#titleInput").type("12");
    cy.get("#descriptionInput").type("12");
    cy.get('form').submit()
    
    
      });
});
