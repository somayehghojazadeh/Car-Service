export function login() {


    describe('Open Base URl', () => {
        beforeEach(() => {


            cy.viewport('iphone-6')


        })
        it('login', () => {


            cy.visit("/login");
            cy.wait(10000)
            debugger
            cy.get('#webklipper-publisher-widget-container').invoke('remove');

            cy.get('input[type="tel"]').type("09128807316");
            cy.contains("تایید شماره همراه").click();
            cy.get('#1000').type('7');
            cy.get('#1001').type('3');
            cy.get('#1002').type('1');
            cy.get('#1003').type('6');
            cy.wait(2000)
            cy.contains("فعال سازی").click({force: true});
            cy.wait(4000)
            cy.visit("/v2/external?key=ap_busticket_new&url=ap_busticket_new/#inner_iframe");
            // cy.reload()
            cy.wait(4000)


            //     it('login', () => {
            //
            //
            //         cy.once("fail", (err) =>
            //         {
            //             return false;
            //         });
            //         cy.visit('v2/login')
            //         cy.wait(2000)
            //         cy.get('.iframe').then(function ($frame) {
            //             var webengage = $frame.contents().find('#webklipper-publisher-widget-container-notification-close-div').get().at(0);
            //             cy.wrap(webengage).click()
            //         })
            //
            //
            //         cy.get('.input-2-2-176').type('09128807316');
            //         // if (cy.get('.popUpHeader-2-2-292)')==false){
            //         //     cy.wait(2000)
            //         cy.get('.directionRTL-2-2-264').click();
            //         cy.get('#1000').type('7').should("be.visible");
            //         cy.get('#1001').type('3');
            //         cy.get('#1002').type('1');
            //         cy.get('#1003').type('6');
            //         cy.get('.button').click();
            //
            //         cy.visit('/v2/external?key=ap_busticket_new&url=ap_busticket_new/#inner_iframe');
            //         // cy.get('.rg-des-select-item').click({force:true});
            //         cy.get('.title-0-1-880').click(50,200)
            // })


        })
    })
}