// BUG FIXED, can't use random email

const fetch = require('node-fetch');
const moment = require('moment');
const fs = require('fs');
const UsernameGenerator = require('username-generator');

const username = () => {
    const generate = UsernameGenerator.generateUsername('-');
    const nama1 = generate.split('-')[0];
    const nama2 = generate.split('-')[1];
    const username = {
        nama1,
        nama2,
    }
    return username
};

const getCookie = () => new Promise((resolve, reject) => {
    fetch('https://cloud.ibm.com/registration')
        .then(res => {
            const data = res.text();
            const cookie = res.headers.raw()['set-cookie'];
            const trxid = res.headers.raw()['transaction-id'];
            const result = {
                data,
                cookie,
                trxid,
            }
            resolve(result)
        })
        .catch(err => reject(err))
});

const functionRegister = (bmsz, abck, trxidr, nama1, nama2, password) => new Promise((resolve, reject) => {
    const data = `{"contacts":[{"type":"PRIMARY","profile":{"userId":"${nama1}${nama2}@gmail.com","password":"${password}"},"firstName":"${nama1}","lastName":"${nama2}","emailAddress":"dokhusus@gmail.com"}],"csfingerprintId":"75fab4d9181363734e3dbed014e9c6960e6fe3d9ff5b27cbdea4be0fcbb161c6","bmKey":"nn85q504s83q17q86263p4638s7s5o3s7505os2rr749pqq09353s5s3nss987r4","countryCode":"ID","portalSourceIndicator":"CONSOLE","verificationCode":"6023316","loginUrl":"/login?defaultId=${nama1}${nama2}@gmail.com&firstLogin=true","reqType":"STANDARD_CREATE","promoCode":"FREEMIUM_TO_PAYG_200_35","anonymousId":"78382084-a22f-4724-9c15-5cf57ce43d1d","uPageViewId":"1d2e798b-9370-4351-8d6f-bc033aa68e50","notice_by_choice":{"by_email":"U","by_phone":"N"},"loginContext":"defaultId=${nama1}${nama2}@gmail.com"}`
    fetch('https://cloud.ibm.com/registration/register_unpaid_account', {
        method: 'POST',
        headers: {
            'authority': 'cloud.ibm.com',
            'accept': 'application/json',
            'transaction-id': trxidr,
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.102 Safari/537.36',
            'content-type': 'application/json',
            'origin': 'https://cloud.ibm.com',
            'sec-fetch-site': 'same-origin',
            'sec-fetch-mode': 'cors',
            'sec-fetch-dest': 'empty',
            'referer': 'https://cloud.ibm.com/registration',
            'accept-language': 'id',
            'cookie': `FEDERATED_TARGET=STANDARD; com.ibm.cloud.console.analytics.campaigns=; trial_info=%7B%22email%22%3A%22${nama1}${nama2}%40gmail.com%22%7D; bm_sz=${bmsz}; com.ibm.cloud.console.nEU=1; ak_bmsc=63F4E2D72DD9DD891B21249ECA83C37F~000000000000000000000000000000~YAAQRhQgFwnc3+17AQAA5x0UVg27jqbYAIlT6Sq5tg7IflKlGQ0UmkKyzkop4i+NRKzL8oRaqqsmL06diqWBqd7Rcp2T5ZhDbzm7p0izy19axydiietJmPv0kRbFiab3LdtTaEL3lqCcIqPmJMWtuzqBFlNFyVbQX+XtMSoouC++gWKdjA5XhNGOZSFtzgKYORE8AjZ2hQdf29xj61Yarsj6z2G0vWDUsr13fM9E8lO8BDgiwgdNGFUq1s7eg80M2vi3ejJj/k3ou6ZsrPcwwK4rBVvA4Kn7ej5h0GIE20a2eM4wX9yCiysW/47lJSN/LsofmrLV1cgdfBMQYyaATtrT6nyYZ7bAq/X2vkQePs7pGII2bpiTP3E+MXo1shZRIFXC36qRGg==; optimizelyEndUserId=oeu1633531732975r0.45036000427105294; BMAID=c1235139-e877-4148-9748-5acfaf032e23; CISESSIONIDPR02A02=PBC5YS:2551732044; AMCVS_D10F27705ED7F5130A495C99%40AdobeOrg=1; _ga=GA1.2.1770725685.1633531738; _gid=GA1.2.752535546.1633531738; AMCV_D10F27705ED7F5130A495C99%40AdobeOrg=359503849%7CMCMID%7C51108687338512399143996275942233233661%7CMCAAMLH-1634136537%7C3%7CMCAAMB-1634136537%7C6G1ynYcLPuiQxYZrsz_pkqfLG9yMXBpb2zX5dvJdYQJzPXImdj0y%7CMCCIDH%7C591843374%7CMCOPTOUT-1633538937s%7CNONE%7CMCSYNCSOP%7C411-18914%7CvVersion%7C5.0.1; ajs_anonymous_id=%2278382084-a22f-4724-9c15-5cf57ce43d1d%22; _hjid=e3eefc75-20f5-4615-ba09-b78ec8c9ad2f; _hjFirstSeen=1; userContext=c1235139-e877-4148-9748-5acfaf032e23|0|0|0|ID|JI|0|n/a|implied; _hjAbsoluteSessionInProgress=0; RT="sl=3&ss=1633531730022&tt=6854&obo=0&sh=1633532325952%3D3%3A0%3A6854%2C1633532318079%3D2%3A0%3A5892%2C1633531735012%3D1%3A0%3A4986&dm=ibm.com&si=7efv4chkdpu"; pageviewContext=2fc2b070-711d-4fde-8576-fb8db6c18002; OPTOUTMULTI=0:0%7Cc1:1%7Cc2:0%7Cc3:0; notice_behavior=implied|eu; _uetsid=88fc84e026b411ecb815bf154823bc9b; _uetvid=88fcbaa026b411ec829715014368134b; _gat_gtag_UA_143580012_4=1; _hjIncludedInPageviewSample=1; _hjIncludedInSessionSample=0; _abck=${abck}; bm_sv=8FF085831A6ECA237265E4EEB02436F9~issEm9h2//iE4624ddclCHL4SPeNEiNEWAcFLZjCBkYWdF3UlkmilCzQGkQfnGFJkArf6J7jgQxw9/tmCOcjTkjJ8923xhElXAzDHGKa1/vdpvpeXJfQLE9VVuxwzhQ6gWs7p8xqk0YCDVHb8XzCgw==; utag_main=v_id:017c561433750022d6f6b8582e7805072002206a00bd0$_sn:1$_se:49$_ss:0$_st:1633534419561$ses_id:1633531736949%3Bexp-session$_pn:4%3Bexp-session$is_country_requiring_explicit_consent:false$dc_visit:1$dc_event:45%3Bexp-session$mm_sync:1%3Bexp-session$mm_ga_sync:1%3Bexp-session$dc_region:ap-east-1%3Bexp-session`
        },
        body: data
    })
        .then(res => res.text())
        .then(result => {
            hasil = result;
            resolve(hasil)
        })
        .catch(err => reject(err))
});

const akunRegister = async () => {
    const password = ""
    let email = []
    let sukses = false
    let gagal = 0
    while (sukses == false) {
        const resultusername = username();
        const nama1 = resultusername.nama1
        const nama2 = resultusername.nama2
        const dapatcookie = await getCookie()
        const bmsz = dapatcookie.cookie[2].split(';')[0]
        const abck = dapatcookie.cookie[3].split(';')[0]
        const trxidr = dapatcookie.trxid
        const resultfunctionRegister = await functionRegister(bmsz, abck, trxidr, nama1, nama2, password)
        const arrayresult = resultfunctionRegister.split(',')[3]
        if (arrayresult === `"description":"We're in progress...."`) {
            console.log(`[${moment().format('HH:mm:ss')}] ${nama1}${nama2}@gmail.com : Sukses`)
            fs.appendFile('resultibm.txt', `${nama1}${nama2}@gmail.com|${password}\n`, function (err) { });
            email.push(`${nama1}${nama2}@gmail.com`)
            email.push(password)
            sukses = true
        } else {
            console.log(`[${moment().format('HH:mm:ss')}] ${nama1}${nama2}@gmail.com : ${resultfunctionRegister}`)
            gagal += 1
        }
    }
    if (gagal == 3) {
        return false
    }
    return email
};

akunRegister()