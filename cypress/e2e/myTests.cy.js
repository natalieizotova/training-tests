

describe('Check', () =>{
    it('Check text box', () =>{
        cy.visit('https://demoqa.com/')
        cy.contains('Elements').click()
        cy.contains('Text Box').click()
        cy.get('#userName-label').should('have.text', 'Full Name')
        cy.get('#userName[placeholder*="Full Name"]')
        cy.get('#userEmail-label')
            .should('exist')
            .should('have.text', 'Email')
        cy.get('#userEmail').should('have.attr', 'placeholder', 'name@example.com')
        cy.get('#currentAddress-label').should('have.text', 'Current Address')
        cy.get('#currentAddress[placeholder*="Current Address"]')
        cy.get('#permanentAddress-label').should('have.text', 'Permanent Address')
        cy.get('#submit').should('have.text', 'Submit')

    })
    it('Submit', ()=>{
        cy.visit('https://demoqa.com/text-box')
        cy.get('#userName').type("Natali I")
        cy.get('#userEmail').type("nat@gmail.com")
        cy.get('#currentAddress').type("Vancouver")
        cy.get('#permanentAddress').type("Canada")
        cy.get('#submit').click()

    })

     it('Email', ()=>{
         cy.visit('https://demoqa.com/text-box')
         cy.get('#userEmail').type("natgmail.com")
         cy.get('#submit').click()
         cy.get('.field-error').should(
             'have.css',
             'border',
             '1px solid rgb(255, 0, 0)'
         )

     })
})