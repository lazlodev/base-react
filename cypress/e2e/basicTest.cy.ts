describe('template spec', () => {
  it('passes', () => {
    cy.visit('/')
    cy.title().should('eq', 'Base React')
    cy.contains('Next.js')
  })
})