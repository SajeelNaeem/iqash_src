var querystring = require('querystring');
var axios = require('axios')


const instance = axios.create({
	baseURL: 'https://preprod.transactworld.com'
  });

async function callRequest(token, payload) {
	var path='/transactionServices/REST/v1/payments';

	//	- have to generate checksum 
	//		- <memberId>|<secureKey>|<merchantTransactionId>|<amount>
	var transId = Date.now()
	var values= `12754|DQkJiaoERw7uMO1754DlSYDreb4gmXXO|${transId}|${payload.amount}`;
	var md5 = require('crypto').createHash('md5').update(values).digest('hex');

	// console.log(payload)


	var data = querystring.stringify( {
		'authentication.memberId' : '12754',
		'authentication.accountId' : '',
		'authentication.checksum' : md5,
		'authentication.terminalId' : '4927',
		'merchantTransactionId' : transId,
		'amount' : payload.amount,
		'currency' : payload.currency,
		'orderDescriptor' : 'Test Transaction',
		'shipping.country' : 'US',
		'shipping.city' : 'New York',
		'shipping.state' : 'New York',
		'shipping.postcode' : '10013',
		'shipping.street1' : '4705 Forest Avenue',
		'customer.telnocc' : '+1',
		'customer.phone' : '06467322281',
		'customer.email' : 'john.doe@xyz.com',
		'customer.givenName' : 'John',
		'customer.surname' : 'Doe',
		'customer.ip' : '192.168.0.1',
		'customer.birthDate' : '19890202',
		'card.number' : payload.creditcardnumber,
		'card.expiryMonth' : payload.expirymonth,
		'card.expiryYear' : payload.expiryyear,
		'card.cvv' : payload.cvccode,
		'paymentBrand' : 'VISA',
		'paymentMode' : 'CC',
		'paymentType' : 'DB',
		'merchantRedirectUrl' : 'https://www.merchantRedirectUrl.com',
		'notificationUrl' : 'www.merchantNotificationUrl.com',
		'tmpl_amount' : payload.amount,
		'tmpl_currency' : payload.currency,
		'recurringType' : 'INITIAL',
		'createRegistration' : 'true',
		'customer.customerId' : '12345'
	});

	let config = {
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
			'Content-Length': data.length,
			'AuthToken': token,
		}
	  }
	return await instance.post(path, data, config ).then(resp => {
		console.log(resp.data)
		return resp.data
	}).catch(err => console.log(err))

}


module.exports = {callRequest};