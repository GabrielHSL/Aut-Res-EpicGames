/// <reference types="cypress" />

import ProdutoPage from '../support/page-objects/produto.page'

context('Funcionalidade de checkout de compra' , () => {
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.login('teste00@aulaebac.net', '@aula@EBAC123')
        cy.get('.logo-in-theme > .logo > a > .logo-img').click()
        cy.get('#primary-menu > .menu-item-629 > a').click()
        ProdutoPage.adicionarProdutoCarrinho()
        cy.get('.woocommerce-message > .button').click()
    });

    it('Finalizar compra com sucesso' , () => {
        cy.get('.checkout-button').click()
        cy.get('#terms').check()
        cy.get('#place_order').click()
        cy.get('#tbay-main-content').should('contain' , 'Obrigado. Seu pedido foi recebido.')

    })

    it.only('Remover produto carrinho' , () => {
        cy.get('.remove > .fa').click()
        cy.get('#main').should('contain' , 'removido. Desfazer?')

    })



})