// const supertest = require('supertest') 
// const request = require('../app') 
const axios = require('axios')


const instance = axios.create({
    baseURL: 'http://localhost:9000'
});

// const validdata = {
//     creditcardnumber: '4111110000000021',
//     expirymonth: '12',
//     expiryyear: '2030',
//     ownername: 'Max Müller',
//     cvccode: '123',
//     currency: 'EUR',
//     amount: '50.00'
//   }

const validdata = {
    currency: 'EUR',
    amount: '50.00',
    creditcardnumber: '4111110000000021',
    expirymonth: '12',
    expiryyear: '2030',
    ownername: 'Max Muller',
    cvccode: '123'
}


describe ('POST /payments', () => {
    describe ('given a payload', () => {

        test('should respond with a 200 status code', async () => {
            const response = await instance.post('/payment', validdata).then((resp) => { 
                return resp
            })
            expect(response.status).toBe(200)
        }
        )

        test('should specify json in content type header', async () => {
            const response = await instance.post('/payment', validdata).then((resp) => { 
                return resp
            })
            expect(response.headers['content-type']).toEqual(expect.stringContaining('json'))
        } 
        )

        
    })
        

    describe ('when any attribute of a payload is missing', () => {
        const bodyData = [
            {amount: '50.00',
            creditcardnumber: '4111110000000021',
            expirymonth: '12',
            expiryyear: '2030',
            ownername: 'Max Muller',
            cvccode: '123'},

            {currency: 'EUR',
            creditcardnumber: '4111110000000021',
            expirymonth: '12',
            expiryyear: '2030',
            ownername: 'Max Muller',
            cvccode: '123'},

            {currency: 'EUR',
            amount: '50.00',
            expirymonth: '12',
            expiryyear: '2030',
            ownername: 'Max Muller',
            cvccode: '123'},

            {currency: 'EUR',
            amount: '50.00',
            creditcardnumber: '4111110000000021',
            expiryyear: '2030',
            ownername: 'Max Muller',
            cvccode: '123'},

            {currency: 'EUR',
            amount: '50.00',
            creditcardnumber: '4111110000000021',
            expirymonth: '12',
            ownername: 'Max Muller',
            cvccode: '123'},

            {currency: 'EUR',
            amount: '50.00',
            creditcardnumber: '4111110000000021',
            expirymonth: '12',
            expiryyear: '2030',
            cvccode: '123'},

            {currency: 'EUR',
            amount: '50.00',
            creditcardnumber: '4111110000000021',
            expirymonth: '12',
            expiryyear: '2030',
            ownername: 'Max Muller'},

            {creditcardnumber: '4111110000000021',
            expirymonth: '12',
            expiryyear: '2030',
            ownername: 'Max Muller',
            cvccode: '123'},

            {currency: 'EUR',
            amount: '50.00',
            creditcardnumber: '4111110000000021',
            cvccode: '123'},

            {currency: 'EUR',
            amount: '50.00',
            creditcardnumber: '4111110000000021',
            expirymonth: '12',
            expiryyear: '2030'},

            {currency: 'EUR',
            amount: '50.00',
            creditcardnumber: '4111110000000021',
            ownername: 'Max Muller',
            cvccode: '123'},

            {}
        ]


        for(const body of bodyData){
            test('should respond with a status code 400', async () => {
                const response = await instance.post('/payment', body).then(r => {return r})
                .catch(err => {expect(err.response.status).toBe(400)})
            }
            ) 
        }

    })
}) 