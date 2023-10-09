import 'cypress-iframe'
import {login} from "../login/Login";

require('@cypress/xpath');


// login()
context('Actions', () => {
    beforeEach(() => {
        cy.viewport('iphone-6')
    })

    before(() => {
        cy.viewport('iphone-6')
        cy.visit("/login")
        cy.wait(10000)
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
        cy.wait(10000)
        // cy.get('#webklipper-publisher-widget-container').invoke('remove');
    })


    it('Bus_Selector', () => {

        //Iframe
        cy.get('.iframe').then(function ($frame) {
            var Orgin = $frame.contents().find('#bus_home_origin_box');
            cy.wrap(Orgin).click()
        })

        cy.get('.iframe').then(function ($frame) {
            var searchOrgin = $frame.contents().find('.icon-input');
            cy.wrap(searchOrgin).type("تهران");
            cy.wait(4000)
        })

        cy.get('.iframe').then(function ($frame) {
            var firstOrgin = $frame.contents().find('.search-terminal-wrapper__terminal-row').get().at(0);
            cy.wrap(firstOrgin).click();
            cy.wait(4000)
        })


        cy.get('.iframe').then(function ($frame) {
            var Orgin = $frame.contents().find('#bus_home_destination_box');
            cy.wrap(Orgin).click()

        })

        cy.get('.iframe').then(function ($frame) {
            var searchDestination = $frame.contents().find('.icon-input');
            cy.wrap(searchDestination).type("مشهد");
            cy.wait(4000)
        })

        cy.get('.iframe').then(function ($frame) {
            var firstDestination = $frame.contents().find('.search-terminal-wrapper__terminal-row').get().at(0);
            cy.wrap(firstDestination).click();
            cy.wait(4000)

        })

        cy.get('.iframe').then(function ($frame) {
            var datePicker = $frame.contents().find('#bus_home_datepicker_input');
            cy.wrap(datePicker).click()

        })
        cy.get('.iframe').then(function ($frame) {
            var firstDestination = $frame.contents().find('.calendar-today').get().at(0);
            cy.wrap(firstDestination).click();
            cy.wait(4000)

        })
        cy.get('.iframe').then(function ($frame) {
            var firstDestination = $frame.contents().find('.calendar__accept-btn').get().at(0);
            cy.wrap(firstDestination).click();
            cy.wait(4000)

        })

        cy.get('.iframe').then(function ($frame) {
            var firstDestination = $frame.contents().find('#bus_home_submit');
            cy.wrap(firstDestination).click();
            cy.wait(4000)

        })

    })
})