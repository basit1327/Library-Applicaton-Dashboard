/**
 * @param url
 * @param method
 * @param data
 * @param headers
 * @returns URL response
 */
function sendServerRequest(url,method,data) {
	return new Promise(function ( resolve ) {
		resolve($.ajax({
			url,
			method: method || 'GET',
			data,
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			crossDomain:true,
			success: function ( data ) {
				return data
			},
			error: function ( err ) {
				try {
					let responseStatus = err.responseJSON
					if ( responseStatus.status == sessionExpires ) {
						alert('your session has been expired')
					}
				} catch ( e ) {
					console.log('Failed to get response');
					console.log(e);
				}
			}
		}));
	})
}

function sendServerRequestWithAuthHeader(url,method,data,AuthKey) {
	return new Promise(function ( resolve ) {
		resolve($.ajax({
			url,
			method: method || 'GET',
			data,
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
				'Authorization':AuthKey
			},
			crossDomain:true,
			success: function ( data ) {
				return data
			},
			error: function ( err ) {
				try {
					let responseStatus = err.responseJSON
					if ( responseStatus.status == sessionExpires ) {
						alert('your session has been expired')
					}
				} catch ( e ) {
					console.log('Failed to get response');
					console.log(e);
				}
			}
		}));
	})
}
