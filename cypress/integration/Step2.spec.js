describe("Step2 - ", () => {

    it("Form Submit Filling all values", () => {
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

});