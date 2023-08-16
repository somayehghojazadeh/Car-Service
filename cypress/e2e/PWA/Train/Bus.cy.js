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
          cy.wait(5000)



          cy.get('.input-2-2-176').type('09128807316');

              cy.wait(5000)
          cy.get('.directionRTL-2-2-264').click();
          cy.get('#1000').type('7');
          cy.get('#1001').type('3');
          cy.get('#1002').type('1');
          cy.get('#1003').type('6');
          cy.get('.button').click();
          cy.visit('/v2/new')
          cy.visit('/v2/external?key=ap_busticket_new&url=ap_busticket_new/#inner_iframe');

          // cy.frameLoaded('.iframe')

            cy.wait(5000)

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
                cy.wait(4000)
            })

            cy.get('.iframe').then(function ($frame)
            {
                var firstOrgin = $frame.contents().find('.search-terminal-wrapper__terminal-row').get().at(0);
                cy.wrap(firstOrgin).click();
                cy.wait(4000)
            })


            cy.get('.iframe').then(function ($frame)
            {
                var Orgin = $frame.contents().find('#bus_home_destination_box');
                cy.wrap(Orgin).click()

            })

            cy.get('.iframe').then(function ($frame)
            {
                var searchDestination = $frame.contents().find('.icon-input');
                cy.wrap(searchDestination).type("مشهد");
                cy.wait(4000)
            })

            cy.get('.iframe').then(function ($frame)
            {
                var firstDestination = $frame.contents().find('.search-terminal-wrapper__terminal-row').get().at(0);
                cy.wrap(firstDestination).click();
                cy.wait(4000)

            })

            cy.get('.iframe').then(function ($frame)
            {
                var datePicker = $frame.contents().find('#bus_home_datepicker_input');
                cy.wrap(datePicker).click()

            })
            cy.get('.iframe').then(function ($frame)
            {
                var firstDestination = $frame.contents().find('.calendar-today').get().at(0);
                cy.wrap(firstDestination).click();
                cy.wait(4000)

            })
            cy.get('.iframe').then(function ($frame)
            {
                var firstDestination = $frame.contents().find('.calendar__accept-btn').get().at(0);
                cy.wrap(firstDestination).click();
                cy.wait(4000)

            })

            cy.get('.iframe').then(function ($frame)
            {
                var firstDestination = $frame.contents().find('#bus_home_submit');
                cy.wrap(firstDestination).click();
                cy.wait(4000)

            })



        })
      })
    })

