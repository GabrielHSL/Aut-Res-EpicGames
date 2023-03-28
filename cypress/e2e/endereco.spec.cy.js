/// <reference types="cypress" />

context('Funcionalidade Endereços - Faturamento e Entrega' , () => {
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.login('teste00@aulaebac.net', '@aula@EBAC123')
    });
    
    it('Cadastro de faturamento com sucesso', () => {
        cy.get('.woocommerce-MyAccount-navigation-link--edit-address > a').click()
        cy.get(':nth-child(1) > .title > .edit').click()
        cy.get('#select2-billing_country-container').click()
        cy.get('.select2-search__field').click().type('Brasil{enter}')
        cy.get('#billing_address_1').click().type('{selectAll}Av. Paulista')
        cy.get('#billing_address_2').click().type('{selectAll}3° andar')
        cy.get('#billing_city').click().type('{selectAll}São Paulo')
        cy.get('#select2-billing_state-container').click()
        cy.get('.select2-search__field').click().type('São Paulo{enter}')
        cy.get('#billing_postcode').click().type('{selectAll}01310904')
        cy.get('#billing_phone').click().type('{selectAll}99887766554')
        cy.get('.button').click()
        cy.get('.woocommerce-message').should('contain' , 'Endereço alterado com sucesso.')
    

    })
    
    it.only('Cadastro de entrega com sucesso', () => {
        cy.get('.woocommerce-MyAccount-navigation-link--edit-address > a').click()
        cy.get(':nth-child(2) > .title > .edit').click()
        cy.get('#shipping_first_name').type('Tester')
        cy.get('#shipping_last_name').type('Ebac')
        cy.get('#select2-shipping_country-container').click()
        cy.get('.select2-search__field').type('Brasil{enter}')
        cy.get('#shipping_address_1').type('{selectAll}Av. Paulista')
        cy.get('#shipping_address_2').type('{selectAll}3° andar')
        cy.get('#shipping_city').type('{selectAll}São Paulo')
        cy.get('#select2-shipping_state-container').click()
        cy.get('.select2-search__field').type('São Paulo{enter}')
        cy.get('#shipping_postcode').type('{selectAll}01310904')
        cy.get('.button').click()
        cy.get('.woocommerce-message').should('contain' , 'Endereço alterado com sucesso.')
    

    })











})