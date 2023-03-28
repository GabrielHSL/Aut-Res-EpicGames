class ProdutoPage {

    adicionarProdutoCarrinho() {
        
        var quantidade = 3

        cy.get('.product-block').eq(8) .click()
        cy.get('.button-variable-item-M').click()
        cy.get(':nth-child(2) > .value > .variable-items-wrapper > .variable-item').click()
        cy.get('.input-text').clear() .type(quantidade)
        cy.get('.single_add_to_cart_button').click()
        cy.get('.woocommerce-message').should('contain' , quantidade+' ×')
        cy.get('.dropdown-toggle > .mini-cart-items').should('contain' , quantidade)


    }

}

export default new ProdutoPage()