/// <reference types="cypress" />

var faker = require('faker');

context('Cadastro de novo usuário', () =>{

    beforeEach(() => {
        cy.visit ('http://lojaebac.ebaconline.art.br/minha-conta/')
    });
    
    

    it('escolha de email e senha e conclusão com nome e sobrenome', () => {
        
        cy.get('#reg_email').type ('teste00@aulaebac.net')
        cy.get('#reg_password').type ('@aula@EBAC123')
        cy.get(':nth-child(4) > .button').click()
        cy.get('#main').should('contain' , 'Olá,')
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type('Tester')
        cy.get('#account_last_name').type('Ebac')
        cy.get('#account_display_name').type('{selectall}{backspace}Tester EBAC')
        cy.get('.woocommerce-Button').click()
        cy.get('#main').should('contain' , 'Detalhes da conta modificados com sucesso.')
    
        
    })


    
})