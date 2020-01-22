iukl.controller("accountsCTRL", ['$http', '$scope', function(http,sc){
	sc.updateUserDetail={
		id:'',
		email:'',
		name:''
	};

	sc.createUserAccount = ()=>{
		swal({
			title: "Succeed",
			text: "New user account has been created",
			icon: "success",
			button: "Close",

		}).then((value) => {
			window.location.href="user_accounts.php";
		});
	};

	sc.updateUserAccount = ()=>{
		swal({
			title: "Updated",
			text: "Account details has been updated",
			icon: "success",
			button: "Close",

		}).then((value) => {
			window.location.href="user_accounts.php";
		});
	};

	sc.initUpdateUserPage = ()=>{
		sc.updateUserDetail={
			id:1,
			email:'randy@mail.com',
			name:'Randy Ortan'
		};
	};

	sc.deleteUserAccount = ()=>{
		try{
			swal("Are you sure you want to delete this user account", {
				buttons: {
					cancel: "Dismiss",
					doIt: {
						text: "Do it",
						value: "doIt",
					}
				},
			}).then((value) => {
				switch (value) {
					case "doIt":
						swal('User account has been deleted');
						window.location.reload();
						break;
				}
			});
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




	sc.createAdminAccount = ()=>{
		swal({
			title: "Succeed",
			text: "New Admin account has been created",
			icon: "success",
			button: "Close",

		}).then((value) => {
			window.location.href="admin_accounts.php";
		});
	};




}]);
