<?php require_once ('../partials/header.php') ?>

<!-- Dropzone css-->
<link rel="stylesheet" type="text/css" href="../../assets/css/dropzone.css">


<div class="page-body" ng-controller="catalogCTRL">

	<!-- top bar starts-->
	<div class="container-fluid">
		<div class="page-header">
			<div class="row">
				<div class="col-lg-6">
					<div class="page-header-left">
						<h3>Edit Catalog Book
							<small>Edit the book detail</small>
						</h3>
					</div>
				</div>
				<div class="col-lg-6">
					<ol class="breadcrumb pull-right">
						<li class="breadcrumb-item"><a href="index.php"><i data-feather="home"></i></a></li>
						<li class="breadcrumb-item">Catalog</li>
						<li class="breadcrumb-item active">Edit</li>
					</ol>
				</div>
			</div>
		</div>
	</div>
	<!-- top bar Ends-->


	<!-- create account starts-->
	<div class="container-fluid" ng-init="initDropZone()">
		<div class="row product-adding">
			<div class="col-xl-12">
				<div class="card">
					<div class="card-header">
						<h5 style="text-transform: none">Book Details</h5>
					</div>
					<div class="card-body">
						<div class="digital-add needs-validation">
							<div class="col-xl-5">
								<div class="card">
									<div class="card-body">
										<span style="font-size: 1.0em; color:red;">Upload new cover image (Optional)</span>
										<form action="#" class="dropzone" id="dropzoneForCover">
											<div class="fallback">
												<input name="file" type="file"/>
											</div>
										</form>
									</div>
								</div>
							</div>
							<div class="row">
								<div class="form-group col-md-4">
									<label class="col-form-label pt-0"><span>*</span> ISBN</label>
									<input class="form-control" value="SB512551242322" type="text" required="">
								</div>
								<div class="form-group col-md-4">
									<label class="col-form-label pt-0"><span>*</span> Title</label>
									<input class="form-control" value="Data Structure" type="text" required="">
								</div>
								<div class="form-group col-md-4">
									<label class="col-form-label pt-0"><span>*</span> Author</label>
									<input class="form-control" value="Kewin Ovin" type="text" required="">
								</div>
							</div>
							<div class="row">
								<div class="form-group col-md-2">
									<label class="col-form-label pt-0"><span>*</span> Edition</label>
									<input class="form-control" value="9" type="number" required="">
								</div>
								<div class="form-group col-md-2">
									<label class="col-form-label pt-0"><span>*</span> Availability</label>
									<select class="form-control">
										<option>Available</option>
										<option>UnAvailable</option>
									</select>
								</div>
								<div class="form-group col-md-3">
									<label class="col-form-label pt-0"><span>*</span> Current Cover</label>
									<br>
									<img data-toggle="modal" data-original-title="test" data-target="#coverModal" src="../../assets/images/book-placeholder.png" width="30px">
								</div>
							</div>
							<div class="form-group pull-right">
								<div class="product-buttons text-center">
									<button type="button" class="btn btn-light">Discard</button>
									<button type="button" ng-click="add()" class="btn btn-primary">Update</button>
								</div>
							</div>
						</div>

						<div class="modal fade" id="coverModal" tabindex="-1" role="dialog" aria-hidden="true">
							<div class="modal-dialog" role="document">
								<div class="modal-content">
									<div class="modal-header">
										<h5 class="modal-title f-w-600" id="exampleModalLabel">Data Structure</h5>
										<button class="close" type="button" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
									</div>
									<div class="modal-body text-center">
										<img src="../../assets/images/book-placeholder.png" width="300px">
									</div>
								</div>
							</div>
						</div>


					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- create account Ends-->

</div>
<!-- Dropzone js-->
<script src="../../assets/js/dropzone/dropzone.js"></script>

<?php require_once ('../partials/footer.php') ?>


<!-- Angular controller for page -->
<script src="../../controllers/catalogCTRL.js"></script>

<script> Dropzone.autoDiscover = false;</script>
