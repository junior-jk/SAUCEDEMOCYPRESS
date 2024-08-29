// describe e conjunto de suite de teste
describe('Selecionar Produtos', () => {
  // Atributos

  beforeEach(() => {
    cy.visit('/')
  })

  it('Selecionar Sauce Labs Backpack', () => {

    cy.title()
      .should('eq', 'Swag Labs')


    cy.get('[data-test="username"]')
      .type('standard_user')

    cy.get('[data-test="password"]')
      .type('secret_sauce')

    cy.get('[data-test="login-button"]').click()
    cy.contains('Products')
      .should('be.visible')

    cy.get('[data-test="item-4-title-link"] > [data-test="inventory-item-name"]').click()

    cy.contains('Sauce Labs Backpack')
      .should('be.visible')

    cy.get('div.inventory_details_price').contains('$29.99')
    cy.get('[data-test="add-to-cart"]').click()
    cy.get('[data-test="shopping-cart-link"]').click()

    cy.contains('Your Cart')
      .should('be.visible')

    cy.get('[data-test="item-quantity"]')
      .contains('1')

    cy.get('[data-test="checkout"]').click()

    cy.get('[data-test="title"]')
      .contains('Checkout: Your Information')

    cy.get('[data-test="firstName"]').type('jkl')
    cy.get('[data-test="lastName"]').type('josep')
    cy.get('[data-test="postalCode"]').type('19123')
    cy.get('[data-test="continue"]').click()

    cy.get('[data-test="title"]')
      .contains('Checkout: Overview')
    cy.get('[data-test="finish"]').click()

    cy.get('[data-test="complete-header"]')
      .contains('Thank you for your order!')

    cy.get('#react-burger-menu-btn').click();
    cy.get('[data-test="logout-sidebar-link"]').click()


  })// termina describe

})