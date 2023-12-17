/// <reference types="cypress" />

//const { get } = require("cypress/types/lodash");

//const { response } = require("express")

describe("login functionality",()=>{
    let token;
    // beforeEach(()=>{
        
    //         })
        
    beforeEach(()=>{
        cy.request({
            method: 'POST',
            url: "http://localhost:8080/api/v1/users/login",
            body:{
                email : "test@test.com" ,
                password : "Aa@12345",
            }
         }).then((response)=>{
             expect(response.status).to.eql(200)
            // expect(response.body.firstName).to.eql("ahmed")
            token = response.body.access_token
        })
    })

    it("Get all Tasks",()=>{
        cy.request({
            method: 'GET',
            url: "http://localhost:8080/api/v1/tasks",
            // Headers : {
                // Authorization: 'Bearer ${token}'
           //}
           auth: {
            bearer : token,
        },
        })
    })
})
