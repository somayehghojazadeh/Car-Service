


export function login (){


    describe('Open Base URl', () => {
        beforeEach(() => {


            cy.viewport('iphone-6')


    })

        it('login', () => {


            cy.once("fail", (err) =>
            {
                return false;
            });
            cy.visit('v2/login')
            // cy.wait(2000)



            cy.get('.input-2-2-176').type('09128807316');
            // if (cy.get('.popUpHeader-2-2-292)')==false){
            //     cy.wait(2000)
            cy.get('.directionRTL-2-2-264').click();
            cy.get('#1000').type('7').should("be.visible");
            cy.get('#1001').type('3');
            cy.get('#1002').type('1');
            cy.get('#1003').type('6');
            cy.get('.button').click();

            cy.visit('/v2/external?key=ap_busticket_new&url=ap_busticket_new/#inner_iframe');
            // cy.get('.rg-des-select-item').click({force:true});
            cy.get('.title-0-1-880').click(50,200)
    })



})
}