describe('Visitor  can ', () => {
  describe('see the website header', () => {
    beforeEach(() => {
      cy.visit('/')
    })

    it('is expected to website header', () => {
      cy.get('[data-cy=header]').should('contain.text', 'COURSE LIST')
    })

    it('is see various sections', () => {
      cy.get('[data-cy=menu-workshop]').should('contain.text', 'Workshops')
    })

    it('is see various sections', () => {
      cy.get('[data-cy=menu-testing]').should('contain.text', 'Testing')
    })


    it('user can click to various courses', () => {
        cy.get('[data-cy=menu-testing]').click()
        cy.get('[data-cy=course-header]').should('contain.text', 'Testing')
      })



  })
})
