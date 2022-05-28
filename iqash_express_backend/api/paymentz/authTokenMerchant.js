var querystring = require('querystring');
var axios = require('axios')


const instance = axios.create({
	baseURL: 'https://preprod.transactworld.com'
  });

async function callRequest() {
	var path='/transactionServices/REST/v1/authToken';

	var data = querystring.stringify( {
		'authentication.partnerId' : '39',
		'merchant.username' : 'testst1',
		'authentication.sKey' : 'DQkJiaoERw7uMO1754DlSYDreb4gmXXO'
	});

	let config = {
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
			'Content-Length': data.length
		}
	  }
	return await instance.post(path, data, config ).then(resp => {
		console.log(resp.data)
		console.log('afdghj', resp.data.AuthToken)
		return resp.data.AuthToken
	}).catch(err => console.log(err))

}


module.exports = {callRequest};