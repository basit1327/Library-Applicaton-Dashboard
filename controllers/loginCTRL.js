var iukl = angular.module('iukl',[]);
iukl.controller("loginCTRL", ['$http', '$scope', function(http,sc){
	sc.login = async ()=>{
		swal({
			title: "Login succeed",
			text: "Redirecting you to Dashboard",
			icon: "success",
			button: null,
		});

		setTimeout(()=>{
			window.location.href='dashboard/index.php';
		},1000);
	};
}]);
