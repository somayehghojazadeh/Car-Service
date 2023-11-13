let activationId;
let registerToken;
context('Actions',  () => {
    beforeEach(() => {
        cy.viewport('iphone-6')


    })

    before(() => {

    })


    it('Bus_Selector', async () => {

        const data1 = await cy.request({
            url:"https://pwa.dev.tasn.ir/gateway/api/v1/base/auth/",
            "headers": {
                "accept": "application/json, text/plain, */*",
                "accept-language": "fa",
                "content-type": "application/json",
                "sec-ch-ua": "\"Chromium\";v=\"118\", \"Google Chrome\";v=\"118\", \"Not=A?Brand\";v=\"99\"",
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-platform": "\"macOS\"",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin",
                "cookie": "_gid=GA1.2.592214724.1698079609; _ga_8V2KMYD6LB=GS1.1.1698229560.26.1.1698231159.59.0.0; _ga=GA1.1.209645802.1696757448; _ga_K53SB64SV8=GS1.2.1698229566.20.1.1698231159.60.0.0",
                "Referer": "https://pwa.dev.tasn.ir/v2/splash",
                "Referrer-Policy": "strict-origin-when-cross-origin"
            },
            "body": "{\"op_code\":1010,\"payload\":\"{\\\"distribution_type\\\":5000}\",\"mobile_no\":\"\",\"device_id\":\"35b25a81-8eda-4d52-91d1-56e8e3d9b4f51\",\"version\":\"2.4.53\"}",
            "method": "POST"
        });

        const data2 = await cy.request({
            url: "https://pwa.dev.tasn.ir/gateway/api/v1/base/auth/",
            "headers": {
                "accept": "application/json, text/plain, */*",
                "accept-language": "fa",
                "content-type": "application/json",
                "sec-ch-ua": "\"Chromium\";v=\"118\", \"Google Chrome\";v=\"118\", \"Not=A?Brand\";v=\"99\"",
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-platform": "\"macOS\"",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin",
                "cookie": "_gid=GA1.2.592214724.1698079609; _ga=GA1.2.209645802.1696757448; _gat_UA-186233134-1=1; _ga_K53SB64SV8=GS1.2.1698229566.20.1.1698231644.60.0.0; _ga_8V2KMYD6LB=GS1.1.1698229560.26.1.1698231645.58.0.0",
                "Referer": "https://pwa.dev.tasn.ir/v2/login",
                "Referrer-Policy": "strict-origin-when-cross-origin"
            },
            body: {
                "op_code": 1012,
                "payload": JSON.stringify({
                    register_token: data1.body.payload.register_token,
                    activation_id: data1.body.payload.activation_id,
                    "region": "IR"
                }),
                "mobile_no": "+989128807316",
                "device_id": "35b25a81-8eda-4d52-91d1-56e8e3d9b4f51",
                "version": "2.4.53"
            },
            "method": "POST"
        });

        const data3 = await cy.request("https://pwa.dev.tasn.ir/gateway/api/v1/base/auth/", {
            "headers": {
                "accept": "application/json, text/plain, */*",
                "accept-language": "fa",
                "content-type": "application/json",
                "sec-ch-ua": "\"Chromium\";v=\"118\", \"Google Chrome\";v=\"118\", \"Not=A?Brand\";v=\"99\"",
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-platform": "\"macOS\"",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin",
                "cookie": "_gid=GA1.2.592214724.1698079609; _ga=GA1.2.209645802.1696757448; _gat_UA-186233134-1=1; _ga_K53SB64SV8=GS1.2.1698229566.20.1.1698231681.23.0.0; _ga_8V2KMYD6LB=GS1.1.1698229560.26.1.1698231682.21.0.0",
                "Referer": "https://pwa.dev.tasn.ir/v2/verify",
                "Referrer-Policy": "strict-origin-when-cross-origin"
            },
            "body": {
                "op_code": 1013,
                "payload": JSON.stringify({
                    register_token: data1.body.payload.register_token,
                    activation_id: data1.body.payload.activation_id,
                    "activation_code": "7316"
                }),
                "mobile_no": "+989128807316",
                "device_id": "35b25a81-8eda-4d52-91d1-56e8e3d9b4f51",
                "version": "2.4.53"
            },
            "method": "POST"
        });

        console.log(data1,data2,data3)

    //     const res = await cy.request({
    //         method: 'POST',
    //         url: 'https://pwa.dev.tasn.ir/gateway/api/v1/base/auth/',
    //         headers: {
    //             'authority': 'pwa.dev.tasn.ir',
    //             'accept': 'application/json, text/plain, */*',
    //             'accept-language': 'fa',
    //             'content-type': 'application/json',
    //             'cookie': '_gid=GA1.2.231044019.1697627651; _ga_K53SB64SV8=GS1.2.1697630148.13.1.1697631656.14.0.0; _gat_UA-186233134-1=1; _ga=GA1.1.209645802.1696757448; _ga_8V2KMYD6LB=GS1.1.1697630124.18.1.1697631674.60.0.0',
    //             'origin': 'https://pwa.dev.tasn.ir',
    //             'referer': 'https://pwa.dev.tasn.ir/v2/splash',
    //             'sec-fetch-dest': 'empty',
    //             'sec-fetch-mode': 'cors',
    //             'sec-fetch-site': 'same-origin',
    //             'user-agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1'
    //         },
    //         body: {
    //             op_code: 1010,
    //             payload: '{"distribution_type": 5000}',
    //             mobile_no: '',
    //             device_id: '778411a7-fe70-4cfa-be5f-02d2d61447cc',
    //             version: '2.4.35'
    //         },
    //     })
    //
    //     const resp = res?.body?.payload
    //     cy.wait(2000)
    //     const nextRep = await cy.request({
    //         method: 'POST',
    //         url: 'https://pwa.dev.tasn.ir/gateway/api/v1/base/auth/',
    //         headers: {
    //             'authority': 'pwa.dev.tasn.ir',
    //             'accept': 'application/json, text/plain, */*',
    //             'accept-language': 'fa',
    //             'content-type': 'application/json',
    //             'cookie': '_gid=GA1.2.231044019.1697627651; _ga_K53SB64SV8=GS1.2.1697630148.13.1.1697632220.60.0.0; _gat_UA-186233134-1=1; _ga=GA1.1.209645802.1696757448; _ga_8V2KMYD6LB=GS1.1.1697630124.18.1.1697632221.57.0.0',
    //             'origin': 'https://pwa.dev.tasn.ir',
    //             'referer': 'https://pwa.dev.tasn.ir/v2/login',
    //             'sec-fetch-dest': 'empty',
    //             'sec-fetch-mode': 'cors',
    //             'sec-fetch-site': 'same-origin',
    //             'user-agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1'
    //         },
    //         body: {
    //             op_code: 1012,
    //             payload: JSON.stringify({
    //                 register_token: resp.register_token,
    //                 activation_id: resp.activation_id,
    //                 region: 'IR',
    //             }),
    //             mobile_no: '+989128807316',
    //             device_id: '778411a7-fe70-4cfa-be5f-02d2d61447cc',
    //             version: '2.4.35',
    //         },
    // })
    //     console.log('nextRep')






    })
})