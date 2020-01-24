<?php require_once ('../partials/header.php') ?>

<div class="page-body" ng-controller="catalogCTRL" ng-init="getCatalogBooks()">

	<!-- top bar starts-->
	<div class="container-fluid">
		<div class="page-header">
			<div class="row">
				<div class="col-lg-6">
					<div class="page-header-left">
						<h3>Catalog
							<small style="text-transform: none;">Book Catalog</small>
						</h3>
					</div>
				</div>
				<div class="col-lg-6">
					<ol class="breadcrumb pull-right">
						<li class="breadcrumb-item"><a href="index.php"><i data-feather="home"></i></a></li>
						<li class="breadcrumb-item">Catalog</li>
						<li class="breadcrumb-item active">View</li>
					</ol>
				</div>
			</div>
		</div>
	</div>
	<!-- top bar Ends-->


	<!-- list of eBooks -->
	<div class="container-fluid mt-3">
		<div class="row">
			<div class="col-xl-6 xl-100">
				<div class="card">
					<div class="card-header">
						<h5 style="text-transform: none">Books List</h5>
						<div class="card-header-right">
							<ul class="list-unstyled card-option">
								<li><i class="icofont icofont-simple-left"></i></li>
								<li><i class="icofont icofont-maximize full-card"></i></li>
								<li><i class="icofont icofont-minus minimize-card"></i></li>
								<li><i id="reloadPatientList" class="icofont icofont-refresh reload-card"></i></li>
							</ul>
						</div>
					</div>
					<div class="card-body">
						<div class="user-status table-responsive latest-order-table">
							<table id="datatable" class="table table-bordernone">
								<thead>
								<tr>
									<td scope="col">ISBN</td>
									<td scope="col">Title</td>
									<td scope="col">Cover</td>
									<td scope="col">Author</td>
									<td scope="col">Edition</td>
									<td scope="col">Availability</td>
									<td scope="col">Rack</td>
									<td scope="col">Action</td>
								</tr>
								</thead>
								<tbody>
								<tr ng-repeat="x in catalogBooksList">
									<td>{{x.isbn}}</td>
									<td class="digits" style="font-weight: 600;">{{x.title}}</td>
									<td class="digits"><img ng-click="openModal(x.cover)" class="cover_image_placeholder"  src="../../assets/images/book-placeholder.png" width="20"></td>
									<td class="digits"><i class="fa fa-user"></i> {{x.author}}</td>
									<td class="digits">{{x.edition}}</td>
									<td class="digits">
										<span ng-if="x.availability==true" class="btn btn-xs btn-success">Available</span>
										<span ng-if="x.availability==false" class="btn btn-xs btn-danger">UnAvailable</span>
									</td>
									<td class="digits">{{x.rack_number}}</td>
									<td class="digits">
										<a href="#" ng-click="goToEditPage(x.id)"><i class="fa fa-edit text-info"></i></a>
										<a href="#" ng-click="deleteCatalogBook(x.id)"><i class="fa fa-trash text-danger"></i></a>
									</td>
								</tr>
								</tbody>
							</table>

							<div class="modal fade" id="coverModal" tabindex="-1" role="dialog" aria-hidden="true">
								<div class="modal-dialog" role="document">
									<div class="modal-content">
										<div class="modal-header">
											<h5 class="modal-title f-w-600" id="exampleModalLabel">Data Structure</h5>
											<button class="close" type="button" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
										</div>
										<div class="modal-body text-center">
											<img id="image_in_modal" src="{{serverAddress+'images/'+coverAddress}}" width="300px">
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- list of eBooks -->


</div>

<?php require_once ('../partials/footer.php') ?>

<!-- Angular controller for page -->
<script src="../../controllers/catalogCTRL.js"></script>
