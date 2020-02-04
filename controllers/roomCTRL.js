iukl.controller("roomCTRL", ['$http', '$scope', function(http,sc){
	sc.pendingBookingList = [];
	sc.reservedBookingList = [];

	sc.getPendingBookingList = async ()=>{
		try{
			let serverResponse = await sendServerRequestWithAuthHeader(apiBaseURL+'room_booking/get_pending',"GET",null,getCookie('sessionId'));
			if ( serverResponse ){
				if ( serverResponse.hasOwnProperty('status') ){
					checkForSessionExpireCall(serverResponse.status);
					if ( serverResponse.status==200 ){
						sc.pendingBookingList= serverResponse.data;
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

	sc.getReservedBookingList = async ()=>{
		try{
			let serverResponse = await sendServerRequestWithAuthHeader(apiBaseURL+'room_booking/get_reserved',"GET",null,getCookie('sessionId'));
			if ( serverResponse ){
				if ( serverResponse.hasOwnProperty('status') ){
					checkForSessionExpireCall(serverResponse.status);
					if ( serverResponse.status==200 ){
						sc.reservedBookingList= serverResponse.data;
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

	sc.approveBooking = async (id)=>{
		try{
			let serverResponse = await sendServerRequestWithAuthHeader(apiBaseURL+'room_booking/approve?bookingId='+id,"GET",null,getCookie('sessionId'));
			if ( serverResponse ){
				if ( serverResponse.hasOwnProperty('status') ){
					checkForSessionExpireCall(serverResponse.status);
					if ( serverResponse.status==200 ){
						swal(serverResponse.detail);
						sc.pendingBookingList.forEach((e,i)=>{
							if ( e.id==id ){
								sc.pendingBookingList.splice(i,1)
							}
						});
						sc.$digest();
					}
					else swal({
						title: "Oops",
						text: serverResponse.detail,
						icon: "error",
						button: "Close",
					});
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

	sc.rejectBooking = async (id)=>{
		try{
			let serverResponse = await sendServerRequestWithAuthHeader(apiBaseURL+'room_booking/reject?bookingId='+id,"GET",null,getCookie('sessionId'));
			if ( serverResponse ){
				if ( serverResponse.hasOwnProperty('status') ){
					checkForSessionExpireCall(serverResponse.status);
					if ( serverResponse.status==200 ){
						swal(serverResponse.detail);
						sc.pendingBookingList.forEach((e,i)=>{
							if ( e.id==id ){
								sc.pendingBookingList[i].status = 3;
							}
						});
						sc.$digest();
					}
					else swal({
						title: "Oops",
						text: serverResponse.detail,
						icon: "error",
						button: "Close",
					});
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
