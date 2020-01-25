<?php require_once ('../partials/header.php') ?>

<div class="page-body" ng-controller="accountsCTRL">

	<!-- top bar starts-->
	<div class="container-fluid">
		<div class="page-header">
			<div class="row">
				<div class="col-lg-6">
					<div class="page-header-left">
						<h3>Edit User Account
							<small>Edit User Account</small>
						</h3>
					</div>
				</div>
				<div class="col-lg-6">
					<ol class="breadcrumb pull-right">
						<li class="breadcrumb-item"><a href="admin_accounts.php"><i data-feather="home"></i></a></li>
						<li class="breadcrumb-item">User Management</li>
						<li class="breadcrumb-item active">Edit</li>
					</ol>
				</div>
			</div>
		</div>
	</div>
	<!-- top bar Ends-->


	<!-- create account starts-->
	<div class="container-fluid" ng-init="getInitialUserEditDetail()">
		<div class="row product-adding">
			<div class="col-xl-12">
				<div class="card">
					<div class="card-header">
						<h5>Account Details</h5>
					</div>
					<div class="card-body">
						<div class="digital-add needs-validation">
							<div class="row">
								<div class="form-group col-md-6">
									<label class="col-form-label pt-0"><span>*</span> StudentId</label>
									<input class="form-control" ng-model="editUser.student_id" type="text" disabled required="">
								</div>
								<div class="form-group col-md-6">
									<label class="col-form-label pt-0"><span>*</span> Name</label>
									<input class="form-control" ng-model="editUser.name" type="text" required="">
								</div>
							</div>
							<div class="row">
								<div class="form-group col-md-6">
									<label class="col-form-label"><span>*</span>New Password <span style="font-size: 0.6em;">leave blank to not change the password</span></label>
									<div class="input-group mb-3">
										<input type="password" ng-model="editUser.newPassword" class="form-control">
										<div class="input-group-prepend">
										<span class="input-group-text">
											<i class="fa fa-eye"></i>
										</span>
										</div>
									</div>
								</div>
								<div class="form-group col-md-6">
									<label class="col-form-label pt-0"><span>*</span> Status</label>
									<select class="form-control" ng-model="editUser.status">
										<option value="1">Approve</option>
										<option value="2">UnApprove</option>
									</select>
								</div>
							</div>

							<div class="form-group pull-right">
								<div class="product-buttons text-center">
									<a href="user_accounts.php" class="btn btn-light">Discard</a>
									<button type="button" ng-click="updateUser()" class="btn btn-primary">Update</button>
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

<?php require_once ('../partials/footer.php') ?>

<!-- Angular controller for page -->
<script src="../../controllers/accountsCTRL.js"></script>
