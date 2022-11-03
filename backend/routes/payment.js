var express = require('express'); 
var router = express.Router();

var authRequest = require('../paymentz/authToken')
var paymentRequest = require('../paymentz/payment')



router.post("/", async function(req, res, next) {

    // getting all the fields from the request
    const {currency, amount, creditcardnumber, expirymonth, 
        expiryyear, ownername, cvccode}  = req.body

    // checks if any field is empty then it should send the failure response
    if( !currency || !amount || !creditcardnumber || !expirymonth || 
        !expiryyear || !ownername || !cvccode ) {
        res.sendStatus(400)
        return
    }

    // getting authorization token from paymentz platform 
    const token = await authRequest.callRequest()

    // if token is empty, should send failure response
    if(!token){
        res.sendStatus(400)
        return
    }

    // token not empty? request the payment transaction from paymentz platform
    const response = await paymentRequest.callRequest(token, req.body)
    res.send(response)
});


////////////////////// GET METHOD NOT USED ////////////////////////
// router.get('/', async function(req, res, next){
//     res.send("Get method of /payment")
// })

module.exports = router;