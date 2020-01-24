var iukl = angular.module('iukl',[]);
iukl.controller("loginCTRL", ['$http', '$scope', function(http,sc){
	sc.login = async ()=>{
		try{
			if ( sc.staffid && sc.password ){
				let data = {
					"staffId": sc.staffid,
					"password": sc.password
				};

				let serverResponse = await sendServerRequest(mainServerAddress+loginURL,'POST',JSON.stringify(data))
				if ( serverResponse ){
					if ( serverResponse.hasOwnProperty('status') ){
						parseLoginResponse(serverResponse);
					}
					else throw 'Invalid server response';
				}
				else throw 'No response by server';
			}
		}
		catch (e) {
			swal({
				title: "Oops",
				text: "Something not right",
				icon: "error",
				button: "Close",
			});
		}
	};


	function parseLoginResponse ( serverResponse ) {
		if ( serverResponse.status===200 ) {
			swal({
				title: "Login succeed",
				text: "Redirecting you to HMS Dashboard",
				icon: "success",
				button: null,
			});
			setCookie('name',serverResponse.name,1);
			setCookie('sessionId',serverResponse.sessionId,1);
			window.location.href='../pages/dashboard/index.php'
		}
		else {
			swal({
				title: "Oops",
				text: serverResponse.detail,
				icon: "error",
				button: "Close",
			});
		}
	}

	(checkIsLoggedIn =>{
		let sessionId = getCookie('sessionId');
		if (sessionId ){
			window.location.href='../pages/dashboard/index.php';
		}
	})();

}]);
