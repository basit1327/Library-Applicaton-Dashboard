<?php require_once ('../partials/header.php') ?>

<div class="page-body" ng-controller="bookCTRL" ng-init="getEBooksList()">

	<!-- top bar starts-->
	<div class="container-fluid">
		<div class="page-header">
			<div class="row">
				<div class="col-lg-6">
					<div class="page-header-left">
						<h3 style="text-transform: none">eBooks
							<small style="text-transform: none;">list of saved eBooks</small>
						</h3>
					</div>
				</div>
				<div class="col-lg-6">
					<ol class="breadcrumb pull-right">
						<li class="breadcrumb-item"><a href="index.php"><i data-feather="home"></i></a></li>
						<li class="breadcrumb-item">eBooks</li>
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
						<h5 style="text-transform: none">eBooks List</h5>
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
									<td scope="col">Author</td>
									<td scope="col">Edition</td>
									<td scope="col">Price</td>
									<td scope="col">Publish Date</td>
									<td scope="col">Action</td>
								</tr>
								</thead>
								<tbody>
								<tr ng-repeat="x in eBooksList">
									<td>{{x.isbn}}</td>
									<td class="digits" style="font-weight: 600;">{{x.title}}</td>
									<td class="digits"><i class="fa fa-user"></i> {{x.author}}</td>
									<td class="digits">{{x.edition}}</td>
									<td class="digits"><i class="fa fa-money"></i>{{x.price}}</td>
									<td class="digits"><i class="fa fa-calendar"></i> {{formatDate(x.publish_date)}}</td>
									<td class="digits">
										<a href="edit_book.php?isbn=SB512551242322&title=Data%20Structure&author=Kewin Ovin&date=01/22/2013"><i class="fa fa-edit text-info"></i></a>
										<a href="#"><i ng-click="deleteBook()" class="fa fa-trash text-danger"></i></a>
									</td>
								</tr>
								</tbody>
							</table>
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
<script src="../../controllers/bookCTRL.js"></script>
