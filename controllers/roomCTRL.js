iukl.controller("roomCTRL", ['$http', '$scope', function(http,sc){

	sc.approve = (id)=>{
		try{
			swal("Are you sure you want to approve this booking", {
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
						swal('Room has been booked');
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

}]);
