describe('LOGIN', () => {
    beforeEach(()=>{
        cy.visit('/')
        cy.title().should('equal', 'Swag Labs')
    })

    it('standard user', () => {  
      cy.get('.login_logo').should('be.visible')
      cy.get('[data-test="username"]').should('be.visible').type('standard_user').and('be.empty')
      cy.get('[data-test="password"]').should('be.visible').type('secret_sauce')
      cy.get('[data-test="login-button"]').should('be.visible').click()
      cy.contains('Backpack').should('be.visible').and('not.be.empty')
      cy.contains('AAA').should('be.visible')
      cy.get('.inventory_list').should('exist')
      cy.get('.inventory_item').should('have.length.lessThan', 7).and('exist').and('not.be.empty')
      cy.get('#react-burger-menu-btn').click()
      cy.get('#logout_sidebar_link').click()
    })

    it('Locked User', () => {
        cy.get('.login_logo').should('be.visible')
        cy.get('[data-test="username"]').should('be.visible').type('locked_out_user').and('be.empty')
        cy.get('[data-test="password"]').should('be.visible').type('secret_sauce')
        cy.get('[data-test="login-button"]').should('be.visible').click()
      })
  
  
      it('Problem User', () => {
        cy.get('.login_logo').should('be.visible')
        cy.get('[data-test="username"]').should('be.visible').type('problem_user').and('be.empty')
        cy.get('[data-test="password"]').should('be.visible').type('secret_sauce')
        cy.get('[data-test="login-button"]').should('be.visible').click()
        cy.contains('Backpack').should('be.visible').and('not.be.empty')
        cy.contains('AAA').should('be.visible')
        cy.get('.inventory_list').should('exist')
        cy.get('.inventory_item').should('have.length.lessThan', 7).and('exist').and('not.be.empty')
        cy.get('#react-burger-menu-btn').click()
        cy.get('#logout_sidebar_link').click()
      })
  
    
      it('Performance Glitch User', () => {
        cy.get('.login_logo').should('be.visible')
        cy.get('[data-test="username"]').should('be.visible').type('performance_glitch_user').and('be.empty')
        cy.get('[data-test="password"]').should('be.visible').type('secret_sauce')
        cy.get('[data-test="login-button"]').should('be.visible').click()
        cy.contains('Backpack').should('be.visible').and('not.be.empty')
        cy.contains('AAA').should('be.visible')
        cy.get('.inventory_list').should('exist')
        cy.get('.inventory_item').should('have.length.lessThan', 7).and('exist').and('not.be.empty')
        cy.get('#react-burger-menu-btn').click()
        cy.get('#logout_sidebar_link').click()
      })
  

      it('Error User', () => {
        cy.get('.login_logo').should('be.visible')
        cy.get('[data-test="username"]').should('be.visible').type('error_user').and('be.empty')
        cy.get('[data-test="password"]').should('be.visible').type('secret_sauce')
        cy.get('[data-test="login-button"]').should('be.visible').click()
        cy.contains('Backpack').should('be.visible').and('not.be.empty')
        cy.contains('AAA').should('be.visible')
        cy.get('.inventory_list').should('exist')
        cy.get('.inventory_item').should('have.length.lessThan', 7).and('exist').and('not.be.empty')
        cy.get('#react-burger-menu-btn').click()
        cy.get('#logout_sidebar_link').click()
      })

  })