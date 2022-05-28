var querystring = require('querystring');
var axios = require('axios')


const instance = axios.create({
	baseURL: 'https://preprod.transactworld.com'
  });

async function callRequest(token, data) {
	var path='/transactionServices/REST/v1/payments';

	//	- have to generate checksum 
	//		- <memberId>|<secureKey>|<merchantTransactionId>|<amount>
	var values= `12754|DQkJiaoERw7uMO1754DlSYDreb4gmXXO|00001|${data.amount}`;
	var md5 = require('crypto').createHash('md5').update(values).digest('hex');
	console.log('this is checksum :' , md5)


	var data = querystring.stringify( {
		'authentication.memberId' : '12754',
		'authentication.accountId' : '2967',
		'authentication.checksum' : md5,
		'authentication.terminalId' : '4927',
		'merchantTransactionId' : '00001',
		'amount' : '50.00',
		'currency' : 'EUR',
		'orderDescriptor' : 'Test Transaction',
		'shipping.country' : 'UK',
		'shipping.city' : 'Aston',
		'shipping.state' : 'NA',
		'shipping.postcode' : 'CH5 3LJ',
		'shipping.street1' : '19 Scrimshire Lane',
		'customer.telnocc' : '+44',
		'customer.phone' : '07730432996',
		'customer.email' : 'john.doe@xyz.com',
		'customer.givenName' : 'John',
		'customer.surname' : 'Doe',
		'customer.ip' : '192.168.0.1',
		'customer.birthDate' : '19890202',
		'card.number' : data.creditcardnumber,
		'card.expiryMonth' : '12',
		'card.expiryYear' : '2030',
		'card.cvv' : '123',
		'paymentBrand' : 'VISA',
		'paymentMode' : 'CC',
		'paymentType' : 'DB',
		'merchantRedirectUrl' : 'https://www.merchantRedirectUrl.com',
		'notificationUrl' : 'www.merchantNotificationUrl.com',
		'tmpl_amount' : '50.00',
		'tmpl_currency' : 'EUR',
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
		// console.log(resp.data)
		// console.log('afdghj', resp.data.AuthToken)
		return resp.data.AuthToken
	}).catch(err => console.log(err))

}


module.exports = {callRequest};
// var authToken = require('./authTokenMerchant');


// var token = authToken.request(function(responseData){
// 	auth = responseData;
// 	console.log(auth);
// 	return auth;
// });

// console.log("this is token: " + token);

// console.log(authToken.request());
// console.log(`this is authentication token ${auth}`);




// var authentication = authToken.request(function(responseData){
// 	return responseData.AuthToken;
// });

// console.log(authentication);


// paremeters required:
// 	- Authentication Credentials
// 	- Type and amount of transactions
// 	- Payment information like card details, Payment Mode and Payment Brand

//	- have to generate checksum 
//		- <memberId>|<secureKey>|<merchantTransactionId>|<amount>
// var values= "12754|DQkJiaoERw7uMO1754DlSYDreb4gmXXO|00001|50.00";
// var md5 = require('crypto').createHash('md5').update(values).digest('hex');
// console.log('this is checksum :' , md5)

// function request(callback) {
// 	var path='/transactionServices/REST/v1/payments';
// 	var data = querystring.stringify( {
// 		'authentication.memberId' : '12754',
// 		'authentication.accountId' : '2967',
// 		'authentication.checksum' : md5,
// 		'authentication.terminalId' : '4927',
// 		'merchantTransactionId' : '00001',
// 		'amount' : '50.00',
// 		'currency' : 'EUR',
// 		'orderDescriptor' : 'Test Transaction',
// 		'shipping.country' : 'UK',
// 		'shipping.city' : 'Aston',
// 		'shipping.state' : 'NA',
// 		'shipping.postcode' : 'CH5 3LJ',
// 		'shipping.street1' : '19 Scrimshire Lane',
// 		'customer.telnocc' : '+44',
// 		'customer.phone' : '07730432996',
// 		'customer.email' : 'john.doe@xyz.com',
// 		'customer.givenName' : 'John',
// 		'customer.surname' : 'Doe',
// 		'customer.ip' : '192.168.0.1',
// 		'customer.birthDate' : '19890202',
// 		'card.number' : '4111110000000021',
// 		'card.expiryMonth' : '12',
// 		'card.expiryYear' : '2030',
// 		'card.cvv' : '123',
// 		'paymentBrand' : 'VISA',
// 		'paymentMode' : 'CC',
// 		'paymentType' : 'DB',
// 		'merchantRedirectUrl' : 'https://www.merchantRedirectUrl.com',
// 		'notificationUrl' : 'www.merchantNotificationUrl.com',
// 		'tmpl_amount' : '50.00',
// 		'tmpl_currency' : 'EUR',
// 		'recurringType' : 'INITIAL',
// 		'createRegistration' : 'true',
// 		'customer.customerId' : '12345'
// 	});
// 	var options = {
// 		port: 443,
// 		host: 'preprod.transactworld.com',
// 		path: path,
// 		method: 'POST',
// 		headers: {
// 			'Content-Type': 'application/x-www-form-urlencoded',
// 			'Content-Length': data.length,
// 			'AuthToken':'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0c3QxIiwicm9sZSI6Im1lcmNoYW50IiwiaXNzIjoiUFoiLCJleHAiOjE2NTM2NjI3MDh9.owDoXyAdQFe1tFcRAPA6NvFa-Um3cngmV3M2FPXQ_Ac'
// 		}
// 	};
// 	var postRequest = http.request(options, function(res) {
// 		res.setEncoding('utf8');
// 		res.on('data', function (chunk) {
// 			jsonRes = JSON.parse(chunk);
// 			return callback(jsonRes);
// 		});
// 	});
// 	postRequest.write(data);
// 	postRequest.end();
// }
	
// request(function(responseData) {
// 	console.log(responseData);
// });