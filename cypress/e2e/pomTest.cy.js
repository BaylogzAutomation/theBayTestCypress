import{elements} from '../fixtures/pomSelector'
describe('PAGE OBJECT PRACTICE', ()=> {
    beforeEach(()=>{
        cy.visit('/')
    })

    it('standard user',()=>{
        cy.get(elements.usernameField).type('standard_user')
        cy.wait(5000)
        cy.get(elements.passwordField).type('secret_sauce')
        cy.get(elements.loginButton).click()
    })

    it('locked user',()=>{
        cy.get(elements.usernameField).type('locked_out_user')
        cy.wait(5000)
        cy.get(elements.passwordField).type('secret_sauce')
        cy.get(elements.loginButton).click()
    })

    it('problem user', ()=>{
        cy.get(elements.usernameField).type('problem_user')
        cy.wait(5000)
        cy.get(elements.passwordField).type('secret_sauce')
        cy.screenshot()
        cy.get(elements.loginButton).click()
    })

    it('error user', ()=>{
        cy.get(elements.usernameField).type('error_user')
        cy.wait(5000)
        cy.get(elements.passwordField).type('secret_sauce')
        cy.get(elements.loginButton).click()
    })

    it('visual user', ()=>{
        cy.get(elements.usernameField).type('visual_user')
        cy.wait(5000)
        cy.get(elements.passwordField).type('secret_sauce')
        cy.get(elements.loginButton).click()
    })

})
    