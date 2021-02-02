describe("Step1", () => {

    it("Form Submit with no values", () => {
        cy.visit("/");
        cy.get("form");

        cy.get('button[type="submit"]')
            .click()

        cy.get('.project_name')
            .should("have.text", "Project Name Required");

        cy.get('.site_address')
            .should("have.text", "Site Address Required");

        cy.get('.user_details')
            .should("have.text", "User Details Required");
    });

    it("Form Submit with Incomplete Values - With Project Name", () => {
        cy.visit("/");
        cy.get("form");

        cy.get('input[name="project_name"]')
            .type("Test Project")
            .should("have.value", "Test Project");

        cy.get('button[type="submit"]')
            .click()

        cy.get('.project_name')
            .should("not.exist");
    });

    it("Form Submit with Incomplete Values - With Site Address - Too short", () => {
        cy.visit("/");
        cy.get("form");

        cy.get('input[name="site_address"]')
            .type("1")
            .should("have.value", "1");

        cy.get('button[type="submit"]')
            .click()

        cy.get('.site_address')
            .should("have.text", "Site Address Too short");

        cy.get('.project_name')
            .should("have.text", "Project Name Required");

        cy.get('.user_details')
            .should("have.text", "User Details Required");
    });

    it("Form Submit with Incomplete Values - With Site Address", () => {
        cy.visit("/");
        cy.get("form");

        cy.get('input[name="site_address"]').clear()
        cy.get('input[name="site_address"]')
            .type("12345")
            .should("have.value", "12345");

        cy.get('button[type="submit"]')
            .click()

        cy.get('.site_address')
            .should("not.exist");

        cy.get('.project_name')
            .should("have.text", "Project Name Required");

        cy.get('.user_details')
            .should("have.text", "User Details Required");
    });

    it("Form Submit with Incomplete Values - With User Details", () => {
        cy.visit("/");
        cy.get("form");

        cy.get('input[name="user_details"]')
            .type("a")
            .should("have.value", "a");

        cy.get('button[type="submit"]')
            .click()

        cy.get('.user_details')
            .should("not.exist");

        cy.get('.site_address')
            .should("have.text", "Site Address Required");

        cy.get('.project_name')
            .should("have.text", "Project Name Required");
    });
    
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
});