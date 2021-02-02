describe("Step3", () => {

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

    it("Page2 - Filling all values", () => {
        
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

    it("Page3 - Filling all values", () => {
        
        cy.get('textarea[name="project_information"]')
            .type("Some random project information")
            .should("have.value", "Some random project information")

        cy.get('textarea[name="project_comments"]')
            .type("Some random project comments")
            .should("have.value", "Some random project comments")
            
        cy.get('button[type="submit"]')
            .click()
    });

    it("Page4 - Check Progress bar 100%", () => {
        
        cy.get('[aria-valuenow]')
            .should("have.attr", "aria-valuenow", "100");
    });
    
});