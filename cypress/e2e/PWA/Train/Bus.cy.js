import 'cypress-iframe'
require('@cypress/xpath');




// login()
context('Actions', () => {
  beforeEach(() => {
    cy.viewport('iphone-6')
  })

      describe('Open Base URl', () => {


        it('login', () => {


          cy.once("fail", (err) =>
          {
            return false;
          });
          cy.visit('/v2/login')
          cy.wait(2000)



          cy.get('.input-2-2-176').type('09128807316');
          // if (cy.get('.popUpHeader-2-2-292)')==false){
          //     cy.wait(2000)
          cy.get('.directionRTL-2-2-264').click();
          cy.get('#1000').type('7');
          cy.get('#1001').type('3');
          cy.get('#1002').type('1');
          cy.get('#1003').type('6');
          cy.get('.button').click();

          cy.visit('/v2/external?key=ap_busticket_new&url=ap_busticket_new/#inner_iframe');

          // cy.frameLoaded('.iframe')

            cy.wait(3000)

            //Iframe
          cy.get('.iframe').then(function ($frame)
          {
              var Orgin = $frame.contents().find('#bus_home_origin_box');
              cy.wrap(Orgin).click()


          })

            cy.get('.iframe').then(function ($frame)
            {
                var searchOrgin = $frame.contents().find('.icon-input');
                cy.wrap(searchOrgin).type("تهران");
            })

            cy.get('.iframe').then(function ($frame)
            {
                var Tehran = $frame.contents().find('.search-terminal-item');
                cy.wrap(Tehran).click();
            })


            // cy.get('#bus_home_origin_box').click();

            // it('کلیک در داخل iframe', () => {
            //     // یافتن iframe بر اساس ویژگی‌های آن (مانند name یا selector)
            //     cy.get('iframe[name="ap_frame"]').then($iframe => {
            //         const iframeContent = $iframe.contents().find('body');
            //
            //         // کلیک درون iframe
            //         cy.wrap(iframeContent).find('#bus_home_origin_box').click();
            //
            //
            //

          // cy.get('#bus_home_origin_box').click()
        })
      })
    })

