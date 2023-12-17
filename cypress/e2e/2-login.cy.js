

// describe("register functionality test case",()=>{

//    //////////////////// fixture ////////////
// beforeEach(()=>{
//         cy.fixture('ValidUser').th('user')
//     })

//     it("should be able to login with valid email and valid password",()=>{
//         cy.viewport("macbook-16")
//         cy.visit("/")
//        cy.get('@user') .then(user=>{

//             cy.get('[type="email"]').type(user.email)
//             cy.get('[type="password"]').type(user.password)
//         })
       
//         cy.get('[type="button"]').click()
//        // cy.url("").should("contain","/todo")
//     })
// })

//////////////////// readFile////////////

describe("register functionality test case",()=>{
    
    it("should be able to login with valid email and valid password",()=>{
        cy.visit("/")
        cy.viewport("macbook-16")
        cy.readFile('cypress/fixtures/ValidUser.json').then((user)=>{
        cy.get('[type="email"]').type(user.email)
         cy.get('[type="password"]').type(user.password)
     })
        cy.get('[type="button"]').click()     
        //cy.url("").should("contain","/todo")       
    })           
})

//////////////////// writeFile ////////////

// describe("register functionality test case",()=>{
    
//     it("should be able to login with valid email and valid password",()=>{
//         cy.visit("/")
//         cy.viewport("macbook-16")

//         cy.writeFile('cypress/fixtures/testdata.json',{
//             username : "test@test.com",
//             password : "Aa@12345" 
//         })         
//      })       
//  })

