iukl.controller("accountsCTRL", ['$http', '$scope', function(http,sc){
	sc.adminsList = [];
	sc.usersList = [];
	sc.newAdmin = {};
	sc.newUser = {};
	sc.editUser = {};

	sc.getAdminsList = async ()=>{
		try{
			let serverResponse = await sendServerRequestWithAuthHeader(apiBaseURL+'account/get_all_admin',"GET",null,getCookie('sessionId'));
			if ( serverResponse ){
				if ( serverResponse.hasOwnProperty('status') ){
					checkForSessionExpireCall(serverResponse.status);
					if ( serverResponse.status==200 ){
						sc.adminsList= serverResponse.data;
						sc.$digest();
						$('#datatable').DataTable({});
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

	sc.addAdmin = async ()=>{
		try{
			if ( sc.newAdmin.staff_id && sc.newAdmin.password && sc.newAdmin.name){
				let data = sc.newAdmin;
				let serverResponse = await sendServerRequestWithAuthHeader(apiBaseURL+'account/add_admin','POST',JSON.stringify(data),getCookie('sessionId'))
				if ( serverResponse ){
					if ( serverResponse.hasOwnProperty('status') ){
						swal(serverResponse.detail);
						window.location.href='admin_accounts.php'
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

	sc.addUser = async ()=>{
		try{
			if ( sc.newUser.student_id && sc.newUser.password && sc.newUser.name){
				let data = sc.newUser;
				let serverResponse = await sendServerRequestWithAuthHeader(apiBaseURL+'account/add_user','POST',JSON.stringify(data),getCookie('sessionId'))
				if ( serverResponse ){
					if ( serverResponse.hasOwnProperty('status') ){
						swal(serverResponse.detail);
						window.location.href='user_accounts.php'
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

	sc.getUserList = async ()=>{
		try{
			let serverResponse = await sendServerRequestWithAuthHeader(apiBaseURL+'account/get_all_user',"GET",null,getCookie('sessionId'));
			if ( serverResponse ){
				if ( serverResponse.hasOwnProperty('status') ){
					checkForSessionExpireCall(serverResponse.status);
					if ( serverResponse.status==200 ){
						sc.usersList= serverResponse.data;
						sc.$digest();
						$('#datatable').DataTable({});
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

	sc.goToEditUserPage = (id)=>{
		let details = sc.usersList.filter(x=>x.id==id);
		if ( details.length>0 ){
			let data = details[0];
			localStorage.setItem("userDetail",JSON.stringify(data));
			window.location.href='edit_user_account.php?id='+id;
		}
	};

	sc.getInitialUserEditDetail = ()=>{
		try{
			let data = JSON.parse(localStorage.getItem("userDetail"));
			sc.editUser = data;
			sc.editUser.status = data.status.toString();
		}
		catch (e) {
			swal({
				title: "Oops",
				text: "Something not right",
				icon: "error",
				button: "Close",
			});
			console.log(e);
		}

	};

	sc.updateUser = async ()=>{
		try{
			if ( sc.editUser.student_id && sc.editUser.name && sc.editUser.status){
				if ( sc.editUser.newPassword!='' ){
					sc.editUser.password = sc.editUser.newPassword;
				}
				let data = sc.editUser;
				let serverResponse = await sendServerRequestWithAuthHeader(apiBaseURL+'account/update_user','POST',JSON.stringify(data),getCookie('sessionId'))
				if ( serverResponse ){
					if ( serverResponse.hasOwnProperty('status') ){
						if ( serverResponse.status==200 ){
							swal(serverResponse.detail);
							window.location.href='user_accounts.php'
						}
						else {
							swal(serverResponse.detail);
						}
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

	sc.deleteUser = async (id)=> {
		let deleteExecutor = async () => {
			try {
				let serverResponse = await sendServerRequestWithAuthHeader(apiBaseURL + 'account/delete_user?id=' + id, "GET", null, getCookie('sessionId'));
				if ( serverResponse ) {
					if ( serverResponse.hasOwnProperty('status') ) {
						checkForSessionExpireCall(serverResponse.status);
						if ( serverResponse.status == 200 ) {
							swal(serverResponse.detail);
							window.location.reload();
						} else {
							swal(serverResponse.detail);
						}
					} else throw 'Invalid server response';
				} else throw 'No response by server';
			}
			catch ( e ) {
				swal({
					title: "Oops",
					text: "Something not right",
					icon: "error",
					button: "Close",
				});
			}
		}

		swal("Are you sure you want to delete it", {
			buttons: {
				cancel: "Dismiss",
				doIt: {
					text: "Do it",
					value: "doIt",
				}
			},
		}).then(( value ) => {
			switch ( value ) {
				case "doIt":
					deleteExecutor();
					break;
			}
		});
	};


}]);
