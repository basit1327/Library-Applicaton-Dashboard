iukl.controller("bookCTRL", ['$http', '$scope', function(http,sc){
	sc.eBooksList = [];
	sc.editBookDetail={};
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

	sc.addNewBook = async ()=> {
		if ( sc.newBook.isbn && sc.newBook.title && sc.newBook.author && sc.newBook.edition && sc.newBook.price && sc.newBook.publish_date){
			try{
				sc.newBook.publish_date = new Date(sc.newBook.publish_date).getTime();
				var formData = new FormData();
				bookUploader.files.forEach(( e ) => {
					formData.append('book',e, 'book pdf file');
				});
				formData.append('data',JSON.stringify(sc.newBook));

				sc.processing = true;
				let serverResponse = await sendServerRequestWithAuthHeaderForForm(apiBaseURL+'ebook/add_new',formData,getCookie('sessionId'));
				sc.processing = false;
				if ( serverResponse ){
					if ( serverResponse.hasOwnProperty('status') ){
						if ( serverResponse.status==200 ){
							swal({
								title: "Succeed",
								text: serverResponse.detail,
								icon: "success",
								button: "Close",

							}).then(() => {
								window.location.href="index.php";
							});
						} else {
							swal({
								title: "Oops",
								text: serverResponse.detail,
								icon: "error",
								button: "Close",

							});
						}
					}
					else throw 'Invalid server response';
				}
				else throw 'No response by server';
				sc.$digest();
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
		}
	};

	sc.goToEditPage = (id)=>{
		let details = sc.eBooksList.filter(x=>x.id==id);
		if ( details.length>0 ){
			let data = details[0];
			localStorage.setItem("eBookDetail",JSON.stringify(data));
			window.location.href='edit_book.php?id='+id;
		}
	};

	sc.getInitialEditDetail = ()=>{
		try{
			let data = JSON.parse(localStorage.getItem("eBookDetail"));
			sc.editBookDetail = data;
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


	sc.updateEBook = async ()=> {
		if ( sc.editBookDetail.isbn && sc.editBookDetail.title && sc.editBookDetail.author && sc.editBookDetail.edition && sc.editBookDetail.price && sc.editBookDetail.new_publish_date){
			try{
				sc.editBookDetail.publish_date = new Date(sc.editBookDetail.new_publish_date).getTime()
				var formData = new FormData();
				bookUploader.files.forEach(( e ) => {
					formData.append('book',e, 'book file');
				});
				formData.append('data',JSON.stringify(sc.editBookDetail));

				sc.processing = true;
				let serverResponse = await sendServerRequestWithAuthHeaderForForm(apiBaseURL+'ebook/update',formData,getCookie('sessionId'));
				sc.processing = false;
				if ( serverResponse ){
					if ( serverResponse.hasOwnProperty('status') ){
						if ( serverResponse.status==200 ){
							swal({
								title: "Succeed",
								text: serverResponse.detail,
								icon: "success",
								button: "Close",

							}).then(() => {
								window.location.href="index.php";
							});
						} else {
							swal({
								title: "Oops",
								text: serverResponse.detail,
								icon: "error",
								button: "Close",

							});
						}
					}
					else throw 'Invalid server response';
				}
				else throw 'No response by server';
				sc.$digest();
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
		}
		else {
			swal({
				title: "Oops",
				text: "Fill all details",
				icon: "error",
				button: "Close",
			});
		}
	};


	sc.deleteCatalogBook = async (id)=>{
		var deleteExecutor = async ()=>{
			try{
				let serverResponse = await sendServerRequestWithAuthHeader(apiBaseURL+'ebook/delete?id='+id,"GET",null,getCookie('sessionId'));
				if ( serverResponse ){
					if ( serverResponse.hasOwnProperty('status') ){
						checkForSessionExpireCall(serverResponse.status);
						if ( serverResponse.status==200 ){
							swal({
								title: "Succeed",
								text: serverResponse.detail,
								icon: "success",
								button: "Close",

							}).then(() => {
								window.location.reload();
							});
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

		swal("Are you sure you want to delete it", {
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
					deleteExecutor();
					break;
			}
		});
	};



	var bookUploader;
	sc.initDropZone = ()=>{
		bookUploader = new Dropzone('#dropzoneForBook', {
			paramName: 'file', // The name that will be used to transfer the file
			dictDefaultMessage: 'Drop Images to Upload <span>or CLICK</span>',
			maxFilesize: 10, // MB
			autoProcessQueue: false,
			maxFiles: 1,
			acceptedFiles: 'application/pdf',
			maxThumbnailFilesize: 1,
			addRemoveLinks: true,
			thumbnailWidth: 140,
			thumbnailHeight: 140
		});
	};

}]);
