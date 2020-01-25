iukl.controller("reportCTRL", ['$http', '$scope', function(http,sc){
	sc.months = ['-','Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
	sc.usersList = [];
	sc.usersListToShow = [];

	sc.ebookList = [];
	sc.ebookListToShow = [];

	sc.paperList = [];
	sc.paperListToShow = [];

	sc.catalogList = [];
	sc.catalogListToShow = [];

	var dateRangesForReceivedServices = {
		fromDate:getDateForRangePicker(1),
		toDate:getDateForRangePicker(0)
	};

	sc.getUserList = async ()=>{
		try{
			let serverResponse = await sendServerRequestWithAuthHeader(apiBaseURL+'account/get_all_user',"GET",null,getCookie('sessionId'));
			if ( serverResponse ){
				if ( serverResponse.hasOwnProperty('status') ){
					checkForSessionExpireCall(serverResponse.status);
					if ( serverResponse.status==200 ){
						sc.usersList= serverResponse.data;
						filterUsers();
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

	sc.getEBookList = async ()=>{
		try{
			let serverResponse = await sendServerRequestWithAuthHeader(apiBaseURL+'ebook/get_all',"GET",null,getCookie('sessionId'));
			if ( serverResponse ){
				if ( serverResponse.hasOwnProperty('status') ){
					checkForSessionExpireCall(serverResponse.status);
					if ( serverResponse.status==200 ){
						sc.ebookList= serverResponse.data;
						filterEBook()
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

	sc.getPaperList = async ()=>{
		try{
			let serverResponse = await sendServerRequestWithAuthHeader(apiBaseURL+'paper/get_all',"GET",null,getCookie('sessionId'));
			if ( serverResponse ){
				if ( serverResponse.hasOwnProperty('status') ){
					checkForSessionExpireCall(serverResponse.status);
					if ( serverResponse.status==200 ){
						sc.paperList= serverResponse.data;
						filterPaper()
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

	sc.getCatalogList = async ()=>{
		try{
			let serverResponse = await sendServerRequestWithAuthHeader(apiBaseURL+'catalog/get_all',"GET",null,getCookie('sessionId'));
			if ( serverResponse ){
				if ( serverResponse.hasOwnProperty('status') ){
					checkForSessionExpireCall(serverResponse.status);
					if ( serverResponse.status==200 ){
						sc.catalogList= serverResponse.data;
						filterCatalog()
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

	$('#dateRangePicker_user').daterangepicker({
		ranges: {
			'Today': [moment(), moment()],
			'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
			'Last 7 Days': [moment().subtract(6, 'days'), moment()],
			'Last 30 Days': [moment().subtract(29, 'days'), moment()],
			'This Month': [moment().startOf('month'), moment().endOf('month')],
			'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
		},
		"startDate": dateRangesForReceivedServices.fromDate,
		"endDate": dateRangesForReceivedServices.toDate,
		"maxDate": dateRangesForReceivedServices.toDate
	}, (start, end)=> {
		let a = start.format('MM/DD/YYYY');
		let b = end.format('MM/DD/YYYY');
		filterUsers(a,b);
	});

	$('#dateRangePicker_ebook').daterangepicker({
		ranges: {
			'Today': [moment(), moment()],
			'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
			'Last 7 Days': [moment().subtract(6, 'days'), moment()],
			'Last 30 Days': [moment().subtract(29, 'days'), moment()],
			'This Month': [moment().startOf('month'), moment().endOf('month')],
			'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
		},
		"startDate": dateRangesForReceivedServices.fromDate,
		"endDate": dateRangesForReceivedServices.toDate,
		"maxDate": dateRangesForReceivedServices.toDate
	}, (start, end)=> {
		let a = start.format('MM/DD/YYYY');
		let b = end.format('MM/DD/YYYY');
		filterEBook(a,b);
	});

	$('#dateRangePicker_paper').daterangepicker({
		ranges: {
			'Today': [moment(), moment()],
			'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
			'Last 7 Days': [moment().subtract(6, 'days'), moment()],
			'Last 30 Days': [moment().subtract(29, 'days'), moment()],
			'This Month': [moment().startOf('month'), moment().endOf('month')],
			'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
		},
		"startDate": dateRangesForReceivedServices.fromDate,
		"endDate": dateRangesForReceivedServices.toDate,
		"maxDate": dateRangesForReceivedServices.toDate
	}, (start, end)=> {
		let a = start.format('MM/DD/YYYY');
		let b = end.format('MM/DD/YYYY');
		filterPaper(a,b);
	});

	$('#dateRangePicker_catalog').daterangepicker({
		ranges: {
			'Today': [moment(), moment()],
			'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
			'Last 7 Days': [moment().subtract(6, 'days'), moment()],
			'Last 30 Days': [moment().subtract(29, 'days'), moment()],
			'This Month': [moment().startOf('month'), moment().endOf('month')],
			'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
		},
		"startDate": dateRangesForReceivedServices.fromDate,
		"endDate": dateRangesForReceivedServices.toDate,
		"maxDate": dateRangesForReceivedServices.toDate
	}, (start, end)=> {
		let a = start.format('MM/DD/YYYY');
		let b = end.format('MM/DD/YYYY');
		filterCatalog(a,b);
	});


	function filterUsers (start,end) {
		if(!start||!end){
			start = dateRangesForReceivedServices.fromDate
			end = dateRangesForReceivedServices.toDate
		}
		sc.usersListToShow = [];
		sc.usersList.forEach(e=>{
			let createdDate = new Date(Number(e.created_at));
			let filterStartDate = new Date(start);
			let filterEndDate = new Date(end);

			createdDate.setHours(0,0,0,0);
			filterStartDate.setHours(0,0,0,0);
			filterEndDate.setHours(0,0,0,0);

			if ( createdDate>=filterStartDate && createdDate<=filterEndDate ){
				sc.usersListToShow.push(e);
			}
		});
		sc.$digest();
	}

	function filterEBook (start,end) {
		if(!start||!end){
			start = dateRangesForReceivedServices.fromDate
			end = dateRangesForReceivedServices.toDate
		}
		sc.ebookListToShow = [];
		sc.ebookList.forEach(e=>{
			let createdDate = new Date(Number(e.added_at));
			let filterStartDate = new Date(start);
			let filterEndDate = new Date(end);

			createdDate.setHours(0,0,0,0);
			filterStartDate.setHours(0,0,0,0);
			filterEndDate.setHours(0,0,0,0);

			if ( createdDate>=filterStartDate && createdDate<=filterEndDate ){
				sc.ebookListToShow.push(e);
			}
		});
		sc.$digest();
	}

	function filterPaper (start,end) {
		if(!start||!end){
			start = dateRangesForReceivedServices.fromDate
			end = dateRangesForReceivedServices.toDate
		}
		sc.paperListToShow = [];
		sc.paperList.forEach(e=>{
			let createdDate = new Date(Number(e.added_at));
			let filterStartDate = new Date(start);
			let filterEndDate = new Date(end);

			createdDate.setHours(0,0,0,0);
			filterStartDate.setHours(0,0,0,0);
			filterEndDate.setHours(0,0,0,0);

			if ( createdDate>=filterStartDate && createdDate<=filterEndDate ){
				sc.paperListToShow.push(e);
			}
		});
		sc.$digest();
	}

	function filterCatalog (start,end) {
		if(!start||!end){
			start = dateRangesForReceivedServices.fromDate
			end = dateRangesForReceivedServices.toDate
		}
		sc.catalogListToShow = [];
		sc.catalogList.forEach(e=>{
			let createdDate = new Date(Number(e.added_at));
			let filterStartDate = new Date(start);
			let filterEndDate = new Date(end);

			createdDate.setHours(0,0,0,0);
			filterStartDate.setHours(0,0,0,0);
			filterEndDate.setHours(0,0,0,0);

			if ( createdDate>=filterStartDate && createdDate<=filterEndDate ){
				sc.catalogListToShow.push(e);
			}
		});
		sc.$digest();
	}

}]);
