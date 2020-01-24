iukl.controller("bookCTRL", ['$http', '$scope', function(http,sc){
	sc.eBooksList = [];
	sc.getEBooksList = async ()=>{
		try{
			let serverResponse = await sendServerRequestWithAuthHeader(apiBaseURL+'ebook/get_all',"GET",null,getCookie('sessionId'));
			if ( serverResponse ){
				if ( serverResponse.hasOwnProperty('status') ){
					checkForSessionExpireCall(serverResponse.status);
					if ( serverResponse.status==200 ){
						sc.eBooksList= serverResponse.data;
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



	//temp
	sc.editBookDetail={
		oldISBN:'',
		newISBN:'',
		title:'',
		author:'',
		date:''
	};

	sc.initEditPage = ()=>{
		const urlParams = new URLSearchParams(window.location.search);
		const isbn = urlParams.get('isbn');
		sc.editBookDetail.oldISBN = isbn;
		sc.editBookDetail.newISBN = isbn;
		sc.editBookDetail.title = urlParams.get('title');
		sc.editBookDetail.author = urlParams.get('author');
		sc.editBookDetail.date = urlParams.get('date');
		console.log(sc.editBookDetail);
	};

	sc.discard = ()=>{
		window.location.href='index.php'
	};

	sc.deleteBook = ( isbn )=>{
		try{
			swal("Are you sure you want to delete this book", {
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
						swal('eBook has been deleted');
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
