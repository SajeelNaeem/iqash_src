var http = require('https');
var querystring = require('querystring');

function request(callback) {
	var path='/fraudServices/REST/v1/regenerateToken';
	var data = querystring.stringify( {
		'authentication.partnerId' : '39',
		'authToken' : 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0c3QxIiwicm9sZSI6Im1lcmNoYW50IiwiaXNzIjoiUFoiLCJleHAiOjE2NTMzODk0MjB9.IMuj4ZiCSztUPJMWL_mBwJoWq3iA4S2iY6w7Dlx5Q3U'
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