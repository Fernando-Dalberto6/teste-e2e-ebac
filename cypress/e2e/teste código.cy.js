describe('Fluxo de compra na Loja EBAC', () => {
  beforeEach(() => {
    cy.visit('http://lojaebac.ebaconline.art.br/')
  })

  it('Deve comprar 4 produtos e finalizar o pedido com sucesso', () => {
    // Adiciona 4 produtos diferentes ao carrinho
    cy.get('.products li').eq(0).contains('Comprar').click()
    cy.get('.products li').eq(1).contains('Comprar').click()
    cy.get('.products li').eq(2).contains('Comprar').click()
    cy.get('.products li').eq(3).contains('Comprar').click()

    // Acessa o carrinho
    cy.get('.cart-toggle').click()

    // Vai para o checkout
    cy.contains('Finalizar Compra').click()

    // Preenche o formulário de checkout
    cy.get('#billing_first_name').type('Fernando')
    cy.get('#billing_last_name').type('Dalberto')
    cy.get('#billing_address_1').type('Rua Exemplo 123')
    cy.get('#billing_city').type('São Paulo')
    cy.get('#billing_postcode').type('12345-678')
    cy.get('#billing_phone').type('11999999999')
    cy.get('#billing_email').type('fernando@email.com')
    cy.get('#terms').check()

    // Finaliza a compra
    cy.get('#place_order').click()

    // Valida a mensagem de sucesso
    cy.get('.woocommerce-notice').should('contain', 'Obrigado. Seu pedido foi recebido.')
  })
})