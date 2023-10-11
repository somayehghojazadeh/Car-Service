import {login} from "../login/Login";



// login()
context('Actions', () => {
    beforeEach(() => {
        cy.viewport('iphone-6')
    })

    before(() => {
        cy.viewport('iphone-6')
        cy.visit("/login")
        cy.wait(6500);
        debugger
        cy.get('#webklipper-publisher-widget-container').invoke('remove');
        cy.get('input[type="tel"]').type("09128807316");
        cy.contains("تایید شماره همراه").click();
        //invalid otp should test
        cy.get('#1000').type('7');
        cy.get('#1001').type('3');
        cy.get('#1002').type('1');
        cy.get('#1003').type('6');
        cy.wait(2000)
        cy.contains("فعال سازی").click({force: true});
        cy.wait(4000)
        cy.contains('بلیط اتوبوس جدید').click();

        cy.wait(5000)
        // window.reload()
        // cy.get('#webklipper-publisher-widget-container').invoke('remove');
    })


    it('Bus_Selector', () => {
        //Iframe
        cy.get('.iframe').then(function ($frame) {
            var Orgin = $frame.contents().find('#bus_home_origin_box');
            cy.wrap(Orgin).click()
            cy.wait(2000)

        })

        cy.get('.iframe').then(function ($frame) {
            var searchOrgin = $frame.contents().find('.icon-input');
            cy.wrap(searchOrgin).type("تهران");
            cy.wait(2000)
        })

        cy.get('.iframe').then(function ($frame) {
            var firstOrgin = $frame.contents().find('.search-terminal-wrapper__terminal-row').get().at(0);
            cy.wrap(firstOrgin).click();
            cy.wait(2000)
        })


        cy.get('.iframe').then(function ($frame) {
            var Orgin = $frame.contents().find('#bus_home_destination_box');
            cy.wrap(Orgin).click()

        })

        cy.get('.iframe').then(function ($frame) {
            var searchDestination = $frame.contents().find('.icon-input');
            cy.wrap(searchDestination).type("تبریز");
            cy.wait(2000)
        })

        cy.get('.iframe').then(function ($frame) {
            var firstDestination = $frame.contents().find('.search-terminal-wrapper__terminal-row').get().at(0);
            cy.wrap(firstDestination).click();
            cy.wait(2000)

        })

        cy.get('.iframe').then(function ($frame) {
            var datePicker = $frame.contents().find('#bus_home_datepicker_input');
            cy.wrap(datePicker).click()

        })

        cy.get('.iframe').then(function ($frame) {
            var firstDestination = $frame.contents().find('.calendar-today').get().at(0);
            cy.wrap(firstDestination).click();
            cy.wait(3000)

        })

        cy.get('.iframe').then(function ($frame) {
            var firstDestination = $frame.contents().find('.calendar__accept-btn').get().at(0);
            cy.wrap(firstDestination).click();
            cy.wait(3000)

        })

        cy.get('.iframe').then(function ($frame) {
            var firstDestination = $frame.contents().find('#bus_home_submit');
            cy.wrap(firstDestination).click();
            cy.wait(7000)

        })

        cy.get('.iframe').then(function ($frame) {
            var firstTicket = $frame.contents().find('.bus-new-card').get().at(0);
            cy.wrap(firstTicket).click();
            cy.wait(5000)

        })
        cy.get('.iframe').then(function ($frame) {
            var conditionAccept = $frame.contents().find('.button').get().at(0);
            cy.wrap(conditionAccept).click();
            cy.wait(5000)
        })
        cy.get('.iframe').then(($frame) => {
            cy.wrap($frame)
                .its('0.contentDocument.body')
                .should('not.be.empty')
                .then((body) => {
                    cy.wrap(body)
                        .find('.select-seat-icon-wrapper')
                        .eq(29)
                        .click();
                });
        });

        cy.get('.iframe').then(function ($frame) {
            var acceptSeat = $frame.contents().find('.button').get().at(0);
            cy.wrap(acceptSeat).click();
            cy.wait(3000)
        })
        cy.get('.iframe').then(($frame) => {
            cy.wrap($frame)
                .its('0.contentDocument.body')
                .should('not.be.empty')
                .then((body) => {
                    cy.wrap(body)
                        .find('.passenger-card__name-wrapper')
                        .eq(0)
                        .click();
                });
        });

        cy.get('.iframe').then(function ($frame) {
            var selectPassenger = $frame.contents().find('.button').get().at(0);
            cy.wrap(selectPassenger).click();
            cy.wait(3000)
        })

        cy.get('.iframe').then(function ($frame) {
            const iframeContents = $frame.contents();
            cy.wrap(iframeContents)
                .find('button.button--fix')
                .click();
        });

        cy.contains('شماره کارت').click();

        cy.get('input').then($inputs => {
            const targetInput = [...$inputs].find(input => input.className.includes('myInput'));
            if (targetInput) {
                cy.wrap(targetInput).type('6219861056301707');
            }
        });

        cy.get('#new-design-sticky').click()
        cy.contains('ورود رمز پویا').type('12345');
        cy.contains('CVV2').type('983');
        cy.get('input[name="month"]').type('08');
        cy.get('input[name="year"]').type('05');
        cy.contains('پرداخت با کارت').type('123456');


    })
})