import 'cypress-iframe'

context('Actions', () => {
    beforeEach(() => {
        cy.viewport('iphone-6')

    })

    before(() => {

        cy.viewport('iphone-6')
        cy.clearCookies()
        cy.clearLocalStorage()
        cy.getAllLocalStorage().should('be.empty')
        cy.clearAllSessionStorage({log: true})
        cy.getCookies().should('be.empty')
        cy.visit("https://pwa.dev.tasn.ir//v2/login")
        //Remove WebEngage
        cy.wait(7000)
        cy.get('#webklipper-publisher-widget-container')
            .should('exist')
            .then(($element) => {
                cy.wrap($element).invoke('remove');
            })


        // cy.get('#webklipper-publisher-widget-container').invoke('remove');

        cy.get('input[type="tel"]').type("09128807316");
        cy.contains("تایید شماره همراه").click();
        cy.get('#1000').type('7');
        cy.get('#1001').type('3');
        cy.get('#1002').type('1');
        cy.get('#1003').type('6');
        cy.contains("فعال سازی").click({force: true});
        cy.wait(4000)

        //import aut_data into my data
        // cy.window().then((win) => {
        //     myData = win.localStorage.getItem('auth_data');
        //     cy.wrap(myData).as('myLocalStorageData');
        //
        //     console.log("myData");
        //     console.log(myData);
        // });

        cy.contains('پرواز داخلی').click();
        cy.wait(7000)
        //remove unexpected web engage
        // cy.iframe().find('#webklipper-publisher-widget-container-notification-frame')
        //     .should("exist")
        //     .then(($element) => {
        //         cy.wrap($element).invoke('remove');
        //         // cy.iframe().find('#webklipper-publisher-widget-container-notification-frame').invoke('remove');
        //     })
    })


    it('DFlight', () => {

        cy.get('.iframe').then(function ($frame) {
            let Origin = $frame.contents().find('.org-des-select-item').get().at(0);
            cy.wrap(Origin).click()
            cy.wait(1000)
        })

        cy.get('.iframe').then(function ($frame) {
            let searchOrigin = $frame.contents().find('.icon-input');
            cy.wrap(searchOrigin).type("تهران");
            cy.wait(1000)
        })

        cy.get('.iframe').then(function ($frame) {
            let firstOrigin = $frame.contents().find('.search-terminal-wrapper__terminal-row').get().at(0);
            cy.wrap(firstOrigin).click();
            cy.wait(1000)
        })

        cy.get('.iframe').then(function ($frame) {
            let Destination = $frame.contents().find('.org-des-select-item').get().at(1);
            cy.wrap(Destination).click()

        })

        cy.get('.iframe').then(function ($frame) {
            var searchDestination = $frame.contents().find('.icon-input');
            cy.wrap(searchDestination).type("مشهد");
            cy.wait(1000)
        })

        cy.get('.iframe').then(function ($frame) {
            var firstDestination = $frame.contents().find('.search-terminal-wrapper__terminal-row').get().at(0);
            cy.wrap(firstDestination).click();
            cy.wait(1000)

        })

        cy.get('.iframe').then(function ($frame) {
            var datePicker = $frame.contents().find('.icon-input-wrapper').get().at(0);
            cy.wrap(datePicker).click()

        })

        cy.iframe().find(".calendar-switch__title").should("be.visible").click();
        cy.wait(2000)
        cy.iframe().find(".calendar-today").should("be.visible").click();


        cy.get('.iframe').then(function ($frame) {
            var toDayBtn = $frame.contents().find('.calendar__accept-btn').get().at(0);
            cy.wrap(toDayBtn).click();
            cy.wait(2000)

        })

        cy.get('.iframe').then(function ($frame) {
            var firstDestination = $frame.contents().find('.button').get().at(0);
            ;cy.wrap(firstDestination).click();
            cy.wait(7000)

        })

        cy.get('.iframe').then(function ($frame) {
            var firstDestination = $frame.contents().find('.button').get().at(0);
            ;cy.wrap(firstDestination).click();
            cy.wait(7000)

        })
        cy.get('.iframe').then(function ($frame) {
            var firstTicket = $frame.contents().find('.ticket-card-container').get().at(0);
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
                        .find('.passenger-card__name-wrapper')
                        .eq(0)
                        .click();
                });
        });


        cy.iframe().find(".button").should("be.visible").click();


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