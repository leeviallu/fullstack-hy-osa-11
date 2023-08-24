describe('Anecdotes app', () => {
  beforeEach(function() {
    cy.visit('http://localhost:3000')
  })
  it('Front page starts', () => {
    cy.contains('Anecdotes')
  })
  it('Form for adding anecdotes is shown', function() {
    cy.contains('create new')
  })
  it('Page contains some anecdotes', function() {
    cy.contains('If it hurts, do it more often')
    cy.contains('Adding manpower to a late software project makes it later!')
    cy.contains('The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.')
  })
})