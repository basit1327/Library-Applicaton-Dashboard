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
						<h3>Add Catalog Book
							<small>Add New Book In Catalog</small>
						</h3>
					</div>
				</div>
				<div class="col-lg-6">
					<ol class="breadcrumb pull-right">
						<li class="breadcrumb-item"><a href="index.php"><i data-feather="home"></i></a></li>
						<li class="breadcrumb-item">Catalog</li>
						<li class="breadcrumb-item active">Add</li>
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
									<input class="form-control" ng-model="newCatalog.isbn"  type="text" required="">
								</div>
								<div class="form-group col-md-4">
									<label class="col-form-label pt-0"><span>*</span> Title</label>
									<input class="form-control" ng-model="newCatalog.title"  type="text" required="">
								</div>
								<div class="form-group col-md-4">
									<label class="col-form-label pt-0"><span>*</span> Author</label>
									<input class="form-control" ng-model="newCatalog.author" type="text" required="">
								</div>
							</div>
							<div class="row">
								<div class="form-group col-md-2">
									<label class="col-form-label pt-0"><span>*</span> Edition</label>
									<input class="form-control" ng-model="newCatalog.edition" type="number" required="">
								</div>
								<div class="form-group col-md-2">
									<label class="col-form-label pt-0"><span>*</span> Availability</label>
									<select id="availabilityString" ng-model="newCatalog.availability" class="form-control">
										<option value="1" select>Available</option>
										<option value="0">UnAvailable</option>
									</select>
								</div>
								<div class="form-group col-md-2">
									<label class="col-form-label pt-0"><span>*</span> Rack/Shelf Number</label>
									<input class="form-control" ng-model="newCatalog.rack" type="number" required="">
								</div>
							</div>
							<div class="form-group pull-right">
								<div class="product-buttons text-center">
									<button type="button" class="btn btn-light">Discard</button>
									<button type="button" ng-click="addNewCatalogBook()" class="btn btn-primary">Add</button>
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
<script> Dropzone.autoDiscover = false;</script>

<?php require_once ('../partials/footer.php') ?>


<!-- Angular controller for page -->
<script src="../../controllers/catalogCTRL.js"></script>

