<?php require_once ('../partials/header.php') ?>
<!-- Dropzone css-->
<link rel="stylesheet" type="text/css" href="../../assets/css/dropzone.css">


<div class="page-body" ng-controller="bookCTRL">

	<!-- top bar starts-->
	<div class="container-fluid">
		<div class="page-header">
			<div class="row">
				<div class="col-lg-6">
					<div class="page-header-left">
						<h3 style="text-transform: none">Edit Exam Paper
							<small style="text-transform: none">Edit Exam Paper details</small>
						</h3>
					</div>
				</div>
				<div class="col-lg-6">
					<ol class="breadcrumb pull-right">
						<li class="breadcrumb-item"><a href="index.php"><i data-feather="home"></i></a></li>
						<li class="breadcrumb-item">Exam Papers</li>
						<li class="breadcrumb-item active">Edit</li>
					</ol>
				</div>
			</div>
		</div>
	</div>
	<!-- top bar Ends-->


	<!-- create account starts-->
	<div class="container-fluid" ng-init="initEditPage()">
		<div class="row product-adding">
			<div class="col-xl-12">
				<div class="card">
					<div class="card-header">
						<h5 style="text-transform: none">Exam Paper Details</h5>
					</div>
					<div class="card-body">
						<div class="digital-add needs-validation">
							<div class="row">
								<div class="form-group col-md-6">
									<label class="col-form-label pt-0"><span>*</span> Subject Code</label>
									<input class="form-control" value="CS4" type="text" required="">
								</div>
								<div class="form-group col-md-6">
									<label class="col-form-label pt-0"><span>*</span> Title</label>
									<input class="form-control" value="Discrete Mathmatics" type="text" required="">
								</div>
							</div>
							<div class="row">
								<div class="form-group col-md-4">
									<label class="col-form-label pt-0"><span>*</span> Semester</label>
									<input class="form-control" value="9" type="text" required="">
								</div>
								<div class="form-group col-md-4">
									<label class="col-form-label pt-0"><span>*</span> Year</label>
									<select class="form-control"  required="">
										<option>2020</option>
										<option>2019</option>
										<option>2018</option>
										<option>2017</option>
										<option>2016</option>
										<option>2015</option>
										<option>2014</option>
										<option>2013</option>
									</select>
								</div>
							</div>
							<div class="form-group pull-right">
								<div class="product-buttons text-center">
									<button type="button" ng-click="discard()" class="btn btn-light">Discard</button>
									<button type="button" ng-click="createAccount()" class="btn btn-primary">Update</button>
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
<script src="../../controllers/bookCTRL.js"></script>

<script> Dropzone.autoDiscover = false;</script>
