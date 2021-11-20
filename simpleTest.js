
describe('This is first cypress test', () =>{
	it('Find some class on our project', () =>{
		cy.visit('/')
		clickLearn()
	})
	function clickLearn(){
		cy.get('#email').type('tnasim7@gmail.com').should('have.value', 'tnasim7@gmail.com')
		cy.get('#password').type('K0milj0n0722').should('have.value', 'K0milj0n0722')
		cy.get('.mb-3 [type="checkbox"]').not('[disabled]')
		.check().should('be.checked')
		cy.get('button[type=submit]').click()
	}
})