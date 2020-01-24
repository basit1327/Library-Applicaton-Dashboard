iukl.controller("catalogCTRL", ['$http', '$scope', function(http,sc){
	sc.catalogBooksList = [];
	sc.editCatalogBookDetail={};
	sc.serverAddress = mainServerAddress;
	sc.getCatalogBooks = async ()=>{
		try{
			let serverResponse = await sendServerRequestWithAuthHeader(apiBaseURL+'catalog/get_all',"GET",null,getCookie('sessionId'));
			if ( serverResponse ){
				if ( serverResponse.hasOwnProperty('status') ){
					checkForSessionExpireCall(serverResponse.status);
					if ( serverResponse.status==200 ){
						sc.catalogBooksList= serverResponse.data;
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

	sc.openModal = (cover)=>{
		sc.coverAddress = cover;
		$('#coverModal').modal('toggle');
	};

	sc.addNewCatalogBook = async ()=> {
		if ( sc.newCatalog.isbn && sc.newCatalog.title && sc.newCatalog.author && sc.newCatalog.edition && sc.newCatalog.availability && sc.newCatalog.rack){
			try{
				sc.newCatalog.availability =  $('#availabilityString').val();
				var formData = new FormData();
				picUploader.files.forEach(( e ) => {
					formData.append('bookCover',e, 'book cover picture');
				});
				formData.append('data',JSON.stringify(sc.newCatalog));

				sc.processing = true;
				let serverResponse = await sendServerRequestWithAuthHeaderForForm(apiBaseURL+'catalog/add_new',formData,getCookie('sessionId'));
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
		let details = sc.catalogBooksList.filter(x=>x.id==id);
		if ( details.length>0 ){
			let data = details[0];
			localStorage.setItem("catalogBookDetail",JSON.stringify(data));
			window.location.href='edit_book.php?id='+id;
		}
	};

	sc.getInitialEditDetail = ()=>{
		try{
			let data = JSON.parse(localStorage.getItem("catalogBookDetail"));
			sc.editCatalogBookDetail = data;
			sc.editCatalogBookDetail.rack_number = Number(data.rack_number);
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

	sc.updateCatalogBook = async ()=> {
		if ( sc.editCatalogBookDetail.isbn && sc.editCatalogBookDetail.title && sc.editCatalogBookDetail.author && sc.editCatalogBookDetail.edition && sc.editCatalogBookDetail.availability && sc.editCatalogBookDetail.rack_number){
			try{
				sc.editCatalogBookDetail.availability =  $('#availabilityString').val();
				sc.editCatalogBookDetail.rack =  sc.editCatalogBookDetail.rack_number;
				var formData = new FormData();
				picUploader.files.forEach(( e ) => {
					formData.append('bookCover',e, 'book cover picture');
				});
				formData.append('data',JSON.stringify(sc.editCatalogBookDetail));

				sc.processing = true;
				let serverResponse = await sendServerRequestWithAuthHeaderForForm(apiBaseURL+'catalog/update',formData,getCookie('sessionId'));
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
				let serverResponse = await sendServerRequestWithAuthHeader(apiBaseURL+'catalog/delete?id='+id,"GET",null,getCookie('sessionId'));
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
