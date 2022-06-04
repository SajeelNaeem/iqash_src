const paymentRouter = require('../routes/payment') 
const supertest = require('supertest') 
const request = require('../app') 
const axios = require('axios')


const instance = axios.create({
    baseURL: 'http://localhost:9000'
  });


 describe ('POST /payments', () => {

    describe ('given a payload', () => {

        test('should respond with a 200 status code', async () => {
            const data = {
                currency: 'EUR',
                amount: '50.00',
                creditcardnumber: '4111110000000021',
                expirationmonth: '12',
                expirationyear: '2030',
                ownername: 'Max Muller',
                cvccode: '123'
            }

            
            const response = await instance.post('/payment', data).then((resp) => { 
                return resp.data
            })
            expect(response.statusCode).toBe(200)
        })
    // should specify json in content type header
    })
        
    

    describe ('when any attribute of a payload is missing', () => {
        // should respond with a status code 400 

    })
 }) 