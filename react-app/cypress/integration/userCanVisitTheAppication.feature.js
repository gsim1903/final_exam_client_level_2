describe('Visitor  can ', () => {
  describe('see the website header', () => {
    beforeEach(() => {
      cy.visit('/')
    })

    it('is expected to website header', () => {
      cy.get('[data-cy=header]').should('contain.text', 'COURSE LIST')
    })
  })
})
