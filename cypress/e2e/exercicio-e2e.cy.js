/// <reference types="cypress" />

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
  /*  Como cliente 
      Quero acessar a Loja EBAC 
      Para fazer um pedido de 4 produtos 
      Fazendo a escolha dos produtos
      Adicionando ao carrinho
      Preenchendo todas opções no checkout
      E validando minha compra ao final */


  beforeEach(() => {

      cy.visit('produtos')
  });

  it.only('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
    
    cy.get('.product-block ')
    cy.get('.product').eq(0).click();
    cy.get('.button-variable-item-L').click()
    cy.get('.button-variable-item-Red').click()
    cy.get('.single_add_to_cart_button').click();
    cy.get('#primary-menu .menu-item-629 a').click();

    cy.get('.product').eq(1).click();
    cy.get('.button-variable-item-L').click()
    cy.get('.button-variable-item-Brown').click()
    cy.get('.single_add_to_cart_button').click();
    cy.get('#primary-menu .menu-item-629 a').click();

    cy.get('.product').eq(2).click();
    cy.get('.button-variable-item-33').click()
    cy.get('.button-variable-item-Green').click()    
    cy.get('.single_add_to_cart_button').click();
    cy.get('#primary-menu .menu-item-629 a').click();

    cy.get('.product').eq(3).click();
    cy.get('.button-variable-item-XS').click()
    cy.get('.button-variable-item-Green').click()
    cy.get('.single_add_to_cart_button').click();
    cy.get('.woocommerce-message > .button').click()
    cy.get('.checkout-button').click()
    
    cy.get('#place_order').click()
    cy.get('#billing_first_name').type('Fernando');
    cy.get('#billing_last_name').type('Dalberto');
    cy.get('#billing_address_1').type('Rua Exemplo, 123');
    cy.get('#billing_city').type('Osasco');
    cy.get('#billing_postcode').type('01000-000');
    cy.get('#billing_phone').type('11999999999');
    cy.get('#billing_email').type('fernando@example.com');
    cy.get('#terms').click()
    cy.get('#place_order').click()
  
    

  
});

  
});


