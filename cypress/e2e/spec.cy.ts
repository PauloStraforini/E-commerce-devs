describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://mindflush.com.br/')

    cy.contains('Cadastre-se').click()
  })
})