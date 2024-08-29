describe('LOGIN', () => {
    it('standard user', () => {
      cy.visit('https://www.saucedemo.com/')
      cy.title().should('equal', 'Swag Labs')
      cy.get('.login_logo').should('be.visible')
      cy.get('[data-test="username"]').should('be.visible').type('standard_user').and('be.empty')
      cy.get('[data-test="password"]').should('be.visible').type('secret_sauce')
      cy.get('[data-test="login-button"]').should('be.visible').click()
      cy.contains('Backpack').should('be.visible').and('not.be.empty')
      cy.contains('AAA').should('be.visible')
      cy.get('.inventory_list').should('exist')
      cy.get('.inventory_item').should('have.length.lessThan', 7).and('exist').and('not.be.empty')
      


    })
  })