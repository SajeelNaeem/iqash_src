var http = require('https');
var querystring = require('querystring');

function request(callback) {
	var jsonRes;
	var path='/transactionServices/REST/v1/authToken';
	var data = querystring.stringify( {
		'authentication.partnerId' : '39',
		'merchant.username' : 'testst1',
		'authentication.sKey' : 'DQkJiaoERw7uMO1754DlSYDreb4gmXXO'
	});
	var options = {
		port: 443,
		host: 'preprod.transactworld.com',
		path: path,
		method: 'POST',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
			'Content-Length': data.length
		}
	};
	var postRequest = http.request(options, function(res) {
		res.setEncoding('utf8');
		res.on('data', function (chunk) {
			jsonRes = JSON.parse(chunk);
			return callback(jsonRes);
		});
	});
	postRequest.write(data);
	postRequest.end();
}
	
request(function(responseData) {
	console.log(responseData);
});

// request();

// module.exports = {request};