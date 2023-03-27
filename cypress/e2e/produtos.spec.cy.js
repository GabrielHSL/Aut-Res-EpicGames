/// <reference types="cypress" />

context('Funcionalidade página de produtos' , () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos')
    });
    

    it('selecionar produto da lista', () => {
        cy.get('.product-block').eq(4) .click()

    });


    it.only('selecionar e adiconar ao carrinho', () => {

var quantidade = 3

        cy.get('.product-block').eq(8) .click()
        cy.get('.button-variable-item-M').click()
        cy.get(':nth-child(2) > .value > .variable-items-wrapper > .variable-item').click()
        cy.get('.input-text').clear() .type(quantidade)
        cy.get('.single_add_to_cart_button').click()
        cy.get('.woocommerce-message').should('contain' , quantidade+' ×')
        cy.get('.dropdown-toggle > .mini-cart-items').should('contain' , quantidade)

    });

})