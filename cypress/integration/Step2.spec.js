describe("Step2", () => {

    it("Page1 - Filling all values", () => {
        cy.visit("/");
        cy.get("form");

        cy.get('input[name="project_name"]')
            .type("Test Project")
            .should("have.value", "Test Project");

        cy.get('input[name="project_name"]')
            .clear()
            .type("Test Project")
            .should("not.have.value", "Something Else");

        cy.get('input[name="site_address"]')
            .type("15 Queens Rd")
            .should("have.value", "15 Queens Rd");

        cy.get('input[name="user_details"]')
            .type("Jacinto Mendes")
            .should("have.value", "Jacinto Mendes");
        
        cy.get('button[type="submit"]')
            .click()
    });

    it("Navigate back", () => {
        
        cy.get("form");

        cy.get('button').contains('Previous')
            .click()

        cy.get('label').contains("Page 1")
            .should("have.text", "Page 1 Details:");
    });

    it("Navigate back again", () => {
        
        cy.get("form");

        cy.get('button').contains('Previous')
            .should("not.exist");
    });

    it("Should have values entered previously", () =>  {
        cy.get('input[name="project_name"]')
            .should("have.value", "Test Project");

        cy.get('input[name="site_address"]')            
            .should("have.value", "15 Queens Rd");

        cy.get('input[name="user_details"]')
            .should("have.value", "Jacinto Mendes");

        cy.get('[aria-valuenow]')
            .should("have.attr", "aria-valuenow", "25");
    });

    it("Page2 - Filling all values", () => {
        
        cy.get('button[type="submit"]')
            .click()

        cy.get('#vc_funded')
            .click()

        cy.get('#investment')
            .click()

        cy.get('#physical')
            .click()
            
        cy.get('#construction')
            .click()

        cy.get('input[type=range]')
            .invoke('val', 80)
            .trigger('change')

        cy.get('button[type="submit"]')
            .click()
    });
});