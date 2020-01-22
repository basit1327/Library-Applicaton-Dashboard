iukl.controller("paperCTRL", ['$http', '$scope', function(http,sc){

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

	sc.deletePaper = (id)=>{
		try{
			swal("Are you sure you want to delete this Paper", {
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
						swal('Exam paper has been deleted');
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
