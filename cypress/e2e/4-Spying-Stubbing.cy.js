

describe("login functionality test case",()=>{

    //////////////// Syping  ////
    // it("Get all Tesks",()=>{

    //     cy.intercept('**/api/v1/tasks').as("alltasks")

    //     cy.visit("/")
    //     cy.viewport("macbook-15")
    //     cy.get('[data-testid="email"]').type("test@test.com")

    //     cy.get('[data-testid="password"]').type("Aa@12345")
    //     cy.get('[data-testid="submit"]').click()
    //     cy.wait(6000)
    //     cy.wait("@alltasks").then(xhr=>{
    //         cy.log(xhr.response.body)
    //     })

        
    // })

          //////////////// Stubbing  ////
    it("Get all Tesks",()=>{

        cy.intercept("GET",'**/api/v1/tasks', "").as("alltasks")

        cy.visit("/")
        cy.viewport("macbook-15")
        cy.get('[data-testid="email"]').type("test@test.com")

        cy.get('[data-testid="password"]').type("Aa@12345")
        cy.get('[data-testid="submit"]').click()
        cy.wait(6000)
        cy.wait("@alltasks").then(xhr=>{
            cy.log(xhr.response.body)
        })        
    })
})
