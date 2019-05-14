describe('Testando Tela Inicial', function () {
    beforeEach(() => {
        telaInicial()
    })
    it('Cadastrar', function () {
        rota('[href="/cadastrar"]')
        cy.get('[aria-label="Nome"]').type('Nome Teste')
        cy.get('[aria-label="E-mail"]').type('email.olocoooo@gmail.com')
        cy.get('[aria-label="Senha"]').type('123456')
        cy.get(':nth-child(1) > .v-list__tile > .v-list__tile__content > .v-input > .v-input__control > .v-input__slot > .v-input--selection-controls__input > .v-input--selection-controls__ripple').click()
        cy.get('.v-btn').click()
        cy.get('.v-snack__content').contains('Cadastro Realizado com Sucesso!')
    })
    it('Recuperar Senha', function () {
        rota('[href="/recuperar"]')
        cy.get('[aria-label="E-mail"]').type('email.teste@gmail.com')
        cy.get('[aria-label="Nova Senha"]').type('123456')
        cy.get('[aria-label="Confirmar Senha"]').type('123456')
        cy.get('.v-btn').click()
        cy.get('.v-snack__content').contains('Senha alterada com sucesso!')
    
    });
})

const telaInicial = () => {
    cy.wait(1000)
    cy.visit('http://' + Cypress.env('VUE_APP_HOST') + ':' + Cypress.env('VUE_APP_PORT') + '/login')
}

const rota = (rota) => {
    cy.get(rota).should('have.attr', 'href').then((href) => {
        cy.visit('http://' + Cypress.env('VUE_APP_HOST') + ':' + Cypress.env('VUE_APP_PORT') + href)
    })
}
