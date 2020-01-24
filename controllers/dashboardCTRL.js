iukl.controller("dashboardCTRL", ['$http', '$scope', function(http,sc){
	sc.dashboardStats={
		ebooks: '-',
		catalog: '-',
		papers: '-',
		users: '-',
		admins: '-',
	};

	sc.getDashboardStats = async ()=>{
		try{
			let serverResponse = await sendServerRequestWithAuthHeader(apiBaseURL+'dashboard/get_stats',"GET",null,getCookie('sessionId'));
			if ( serverResponse ){
				if ( serverResponse.hasOwnProperty('status') ){
					checkForSessionExpireCall(serverResponse.status);
					if ( serverResponse.status==200 ){
						sc.dashboardStats= serverResponse.data;
						sc.$digest();
					}
				}
				else throw 'Invalid server response';
			}
			else throw 'No response by server';

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

}]);
