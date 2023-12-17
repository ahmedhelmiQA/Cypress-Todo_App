/// <reference types="cypress" />


describe("register functionality test case",()=>{
    beforeEach(()=>{
        cy.viewport("macbook-16")
        cy.visit("/")
        cy.get('[href="/signup"]').click()
    })
    // it("register with valid email and valid password",()=>{
    //     cy.get('[data-testid="first-name"]').type("ahmed")
    //     cy.get('[data-testid="last-name"]').type("helmi")
    //     cy.get('[data-testid="email"]').type("test@test.com")
    //     cy.get('[data-testid="password"]').type("Aa@12345")
    //     cy.get('[data-testid="confirm-password"]').type("Aa@12345")
    //     cy.get('[data-testid="submit"]').click()
    // })

    it("register with invalid first name  ",()=>{
        cy.get('[data-testid="first-name"]').type("mo")
        cy.get('[data-testid="last-name"]').type("helmi")
        cy.get('[data-testid="email"]').type("user@test.com")
        cy.get('[data-testid="password"]').type("Aa@12345")
        cy.get('[data-testid="confirm-password"]').type("Aa@12345")
        cy.get('[data-testid="submit"]').click()
        // cy.url("/").should("contain","todo")
        cy.get('.MuiFormHelperText-root').should("be.visible").and("contain","First Name is required, and it should be more than 3 characters")
    })

    
    it("register with invalid last name  ",()=>{
        cy.get('[data-testid="first-name"]').type("mohamed")
        cy.get('[data-testid="last-name"]').type("he")
        cy.get('[data-testid="email"]').type("user@test.com")
        cy.get('[data-testid="password"]').type("Aa@12345")
        cy.get('[data-testid="confirm-password"]').type("Aa@12345")
        cy.get('[data-testid="submit"]').click()
        // cy.url("/").should("contain","todo")
        cy.get('.MuiFormHelperText-root').should("be.visible").and("contain","Last Name is required, and it should be more than 3 characters")
    })
    
    it("register with invalid email  ",()=>{
        cy.get('[data-testid="first-name"]').type("mohamed")
        cy.get('[data-testid="last-name"]').type("helmi")
        cy.get('[data-testid="email"]').type("user@testcom")
        cy.get('[data-testid="password"]').type("Aa@12345")
        cy.get('[data-testid="confirm-password"]').type("Aa@12345")
        cy.get('[data-testid="submit"]').click()
        // cy.url("/").should("contain","todo")
        cy.get('.MuiFormHelperText-root').should("be.visible").and("contain","Please Insert a correct Email format")
    })
    
    it.only("register with invalid password  ",()=>{
        cy.get('[data-testid="first-name"]').type("mohamed")
        cy.get('[data-testid="last-name"]').type("helmi")
        cy.get('[data-testid="email"]').type("user@test.com")
        cy.get('[data-testid="password"]').type("Aa12345")
        cy.get('[data-testid="confirm-password"]').type("Aa1245")
        cy.get('[data-testid="submit"]').click()
        // cy.url("/").should("contain","todo")
        cy.get('.MuiFormHelperText-root').should("be.visible").and("contain","Password must be Minimum eight characters")
    })
})