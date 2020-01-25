iukl.controller("paperCTRL", ['$http', '$scope', function(http,sc){
	sc.papersList = [];
	sc.months = ['-','Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
	sc.editPaperDetail = {};

	sc.getPapersList = async ()=>{
		try{
			let serverResponse = await sendServerRequestWithAuthHeader(apiBaseURL+'paper/get_all',"GET",null,getCookie('sessionId'));
			if ( serverResponse ){
				if ( serverResponse.hasOwnProperty('status') ){
					checkForSessionExpireCall(serverResponse.status);
					if ( serverResponse.status==200 ){
						sc.papersList= serverResponse.data;
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

	sc.addNewPaper = async ()=> {
		if ( sc.newPaper.subject_code && sc.newPaper.title && sc.newPaper.semester_month && sc.newPaper.year){
			try{
				var formData = new FormData();
				bookUploader.files.forEach(( e ) => {
					formData.append('paper',e, 'paper pdf file');
				});
				formData.append('data',JSON.stringify(sc.newPaper));

				sc.processing = true;
				let serverResponse = await sendServerRequestWithAuthHeaderForForm(apiBaseURL+'paper/add_new',formData,getCookie('sessionId'));
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
		let details = sc.papersList.filter(x=>x.id==id);
		if ( details.length>0 ){
			let data = details[0];
			localStorage.setItem("paperDetail",JSON.stringify(data));
			window.location.href='edit_paper.php?id='+id;
		}
	};

	sc.getInitialEditDetail = ()=>{
		try{
			let data = JSON.parse(localStorage.getItem("paperDetail"));
			sc.editPaperDetail = data;
			sc.editPaperDetail.semester_month = data.semester_month.toString();
			sc.editPaperDetail.year = data.year.toString();
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

	sc.updatePaper = async ()=> {
		if ( sc.editPaperDetail.subject_code && sc.editPaperDetail.title && sc.editPaperDetail.semester_month && sc.editPaperDetail.year){
			try{
				var formData = new FormData();
				bookUploader.files.forEach(( e ) => {
					formData.append('paper',e, 'paper file');
				});
				formData.append('data',JSON.stringify(sc.editPaperDetail));

				sc.processing = true;
				let serverResponse = await sendServerRequestWithAuthHeaderForForm(apiBaseURL+'paper/update',formData,getCookie('sessionId'));
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

	sc.deletePaper = async (id)=>{
		var deleteExecutor = async ()=>{
			try{
				let serverResponse = await sendServerRequestWithAuthHeader(apiBaseURL+'paper/delete?id='+id,"GET",null,getCookie('sessionId'));
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
		bookUploader = new Dropzone('#dropzoneForPaper', {
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
