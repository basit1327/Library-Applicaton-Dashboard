iukl.controller("catalogCTRL", ['$http', '$scope', function(http,sc){

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

	sc.add = ()=>{
		swal('Book has been added to catalog');
		setTimeout(()=>{	window.location.href='index.php'},1000);
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

	var picUploader;
	sc.initDropZone = ()=>{
		picUploader = new Dropzone('#dropzoneForCover', {
			paramName: 'file', // The name that will be used to transfer the file
			dictDefaultMessage: 'Drop Images to Upload <span>or CLICK</span>',
			maxFilesize: 1, // MB
			autoProcessQueue: false,
			maxFiles: 1,
			acceptedFiles: 'image/*',
			maxThumbnailFilesize: 1,
			addRemoveLinks: true,
			thumbnailWidth: 140,
			thumbnailHeight: 140
		});
	};

}]);
