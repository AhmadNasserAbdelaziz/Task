
describe("New Note Page", () => {
  before(function()
  {
    cy.CheckNewCardPage();
  }
  )

  it("Should find the Navbar should have a video and a welcome <h1> ", () => {
    cy.get("nav").get("video").get("div").get("h1").should("contain", "Welcome");
  });

  it("Should find the main content with the SideBar and The Content Form", () => {

    cy.get(".main-content").within(() => {
    cy.get(".side-bar").get(".content-form");

    });
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
    cy.get('.new-card-btn').click();
    cy.get("#titleInput").type("1");
    cy.get("#descriptionInput").type("1");
    cy.get("form").submit();
    cy.on('window:alert', (str) => {
      expect(str).to.equal(`Please fill in all fields`)
  });


  });

  it("it should allow the user to submit with input conditions met", () => {

    cy.get("#titleInput").type("12345678910");
    cy.get("#descriptionInput").type("12345678910");
    cy.get("form").submit();
    cy.url().should("include", "your-cards.html");
    })
});

describe("Your Cards Page", () => {

  beforeEach(() => {
    cy.visit("/your-cards.html");
  });

  it("Should be on New Note Page ", () => {
    cy.location().should((location) => {
      expect(location.protocol).to.eq("http:");
    });
    cy.url().should("include", "/your-cards.html");

    cy.title().should("eq", "Notes");
  });

  it("Should find the Navbar should have a video and a welcome <h1> ", () => {
    cy.get("nav").get("video").get("div").get("h1").should("contain", "Welcome");
  })

  it("Should find the main content with the SideBar and 'your cards' Div", () => {
    cy.get(".main-content").get(".side-bar").get(".your-cards");
  });

  it("Sidebar should have New Card Button and should take you to 'new-card' page", () => {
  
    cy.get(".side-bar").get(".upper-side-bar").get(".new-card-btn").should( 'contain', 'New Card').click();
    cy.url().should("include", "new-card.html");
  });

  it("Sidebar should have Your Card Button and should keep you in 'your cards' page", () => {
  
    cy.get(".side-bar").get(".upper-side-bar").get(".your-cards-btn").should('contain' , 'Your Cards').click();
    cy.url().should("include", "your-cards.html");

  });

  it("Should find the 'your cards' div with Note element in it", () => {
    cy.get(".your-cards").get('.board').get(".note")
  })


  it("Note element should have title and description and date", () => {
    cy.get(".note").get(".title-note").get(".desc").get(".date")
  } )


  it("Note element should have a delete button that deletes the Note", () => {
    cy.get(".note").get(".delete")
  })








})



