describe('Github', () => {
    describe('Site-Tracker', () => {
        it('should have not been updated', () => {
            cy.visit("https://github.com/easilyBaffled/site-tracker", { timeout: 30000 });
            cy.contains('Latest commit').parent().get('a').contains('4c57d67').should('exist')
        })
    })
});
