describe('assignment test', function () {

    before(function () {
        cy.fixture('testdata').then(function (testdata) {
          this.testdata = testdata;
        })
      })

    it('navigate to automationpratice.com/index.php url and verify the homepage contains Sign in text', function () {

        cy.visit(this.testdata.url)
        cy.title().should('contain','My Store')
        

    })

    it('click on Sign in and login with valid credentials', function () {

        cy.contains('Sign in').click()
        cy.title().should('contain','Login - My Store')
        cy.get('input[id="email"]').type("kunalbhaskarlnct123@gmail.com")
        cy.get('input[name="passwd"]').type("Qwerty123")
        cy.get('button[id="SubmitLogin"]').click()
        cy.title().should('contain','My account - My Store')
        
    })

    it('select products and add them to cart', function () {

        cy.get('a[title="Women"]').click()
        cy.title().should('contain','Women - My Store')
        cy.get('img[title = "Blouse"]').click()
        cy.title().should('contain','Blouse - My Store')
        cy.get('button[name="Submit"]').click()


    })

    it('Place the order', function () {
       cy.get('a[title="Proceed to checkout"]').click()
       cy.get('a[href="http://automationpractice.com/index.php?controller=order&step=1"]').click()
       cy.get('input[id="email"]').type("kunalbhaskarlnct123@gmail.com")
       cy.get('input[name="passwd"]').type("Qwerty123")
       cy.get('button[id="SubmitLogin"]').click()
       cy.get('button[name="processAddress"]').click()
       cy.get('input[type="checkbox"]').click()
       cy.get('button[name="processCarrier"]').click()
       cy.get('a[href="http://automationpractice.com/index.php?fc=module&module=bankwire&controller=payment"]').click()
       cy.xpath('//span[contains(text(),"I confirm my order")]').click()
       cy.title().should('contain','Order confirmation - My Store')
       

    })

})