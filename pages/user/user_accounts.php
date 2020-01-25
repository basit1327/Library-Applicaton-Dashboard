<?php require_once ('../partials/header.php') ?>

<div class="page-body" ng-controller="accountsCTRL" ng-init="getUserList()">

	<!-- top bar starts-->
	<div class="container-fluid">
		<div class="page-header">
			<div class="row">
				<div class="col-lg-6">
					<div class="page-header-left">
						<h3>User Accounts
							<small>Manage IUKL Application Users</small>
						</h3>
					</div>
				</div>
				<div class="col-lg-6">
					<ol class="breadcrumb pull-right">
						<li class="breadcrumb-item"><a href="admin_accounts.php"><i data-feather="home"></i></a></li>
						<li class="breadcrumb-item">User Management</li>
						<li class="breadcrumb-item">Users</li>
						<li class="breadcrumb-item active">View</li>
					</ol>
				</div>
			</div>
		</div>
	</div>
	<!-- top bar Ends-->


	<!-- list of accounts -->
	<div class="container-fluid">
		<div class="row">
			<div class="col-md-12">
				<div class="card">
					<div class="card-header bg-danger">
						<h5 style="color: white">All Accounts <i data-feather="user-check"></i></h5>
						<div class="card-header-right">
							<ul class="list-unstyled card-option">
								<li><i class="icofont icofont-simple-left"></i></li>
								<li><i class="icofont icofont-maximize full-card"></i></li>
								<li><i class="icofont icofont-minus minimize-card"></i></li>
								<li><i class="icofont icofont-refresh reload-card"></i></li>
							</ul>
						</div>
					</div>
					<div class="card-body">
						<div class="user-status table-responsive latest-order-table">
							<table id="datatable" class="table table-bordernone">
								<thead>
								<tr>
									<th scope="col">StudentId</th>
									<th scope="col">Name</th>
									<th scope="col">Created At</th>
									<th scope="col">Status</th>
									<th scope="col">Actions</th>
								</tr>
								</thead>
								<tbody>
								<tr ng-repeat="x in usersList">
									<td>{{x.student_id}}</td>
									<td class="bd-t-none u-s-tb">
										<div class="align-middle image-sm-size"><img style="width: 35px;margin-top: 3%;" class="img-radius align-top m-r-15 rounded-circle blur-up lazyloaded" src="../../assets/images/user_placeholder.png" alt="" data-original-title="" title="">
											<div class="d-inline-block">
												<h6>{{x.name}}</h6>
											</div>
										</div>
									</td>
									<td class="digits">{{formatDate(x.created_at)}}</td>
									<td class="digits" ng-if="x.status==1"><span style="color: green">Approved</span></td>
									<td class="digits" ng-if="x.status==2"><span style="color: red">Not Approved</span></td>
									<td class="digits">
										<a href="#" ng-click="goToEditUserPage(x.id)"><i class="fa fa-edit text-info"></i></a>
										<a href="#"><i ng-click="deleteUser(x.id)" class="fa fa-trash text-danger"></i></a>
									</td>
								</tr>
								</tbody>
							</table>
							<a href="add_user_account.php" class="btn btn-danger">Add New User</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- list of accounts Ends-->


</div>

<?php require_once ('../partials/footer.php') ?>

<!-- Angular controller for page -->
<script src="../../controllers/accountsCTRL.js"></script>

