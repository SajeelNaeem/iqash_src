var express = require('express'); 
var router = express.Router();

var authRequest = require('../paymentz/authTokenMerchant')
var paymentRequest = require('../paymentz/payment')

router.post("/", async function(req, res, next) {


    const token = await authRequest.callRequest()

    await paymentRequest.callRequest(token, req.body)
    
    res.send("API is working properly!")
});

module.exports = router;