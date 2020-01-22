<?php require_once ('../partials/header.php') ?>

<div class="page-body" ng-controller="accountsCTRL">

	<!-- top bar starts-->
	<div class="container-fluid">
		<div class="page-header">
			<div class="row">
				<div class="col-lg-6">
					<div class="page-header-left">
						<h3>Add User Account
							<small>Add New User Accounts</small>
						</h3>
					</div>
				</div>
				<div class="col-lg-6">
					<ol class="breadcrumb pull-right">
						<li class="breadcrumb-item"><a href="admin_accounts.php"><i data-feather="home"></i></a></li>
						<li class="breadcrumb-item">User Management</li>
						<li class="breadcrumb-item">Users</li>
						<li class="breadcrumb-item active">Add</li>
					</ol>
				</div>
			</div>
		</div>
	</div>
	<!-- top bar Ends-->


	<!-- create account starts-->
	<div class="container-fluid">
		<div class="row product-adding">
			<div class="col-xl-12">
				<div class="card">
					<div class="card-header">
						<h5>Account Details</h5>
					</div>
					<div class="card-body">
						<div class="digital-add needs-validation">
							<div class="form-group">
								<label class="col-form-label pt-0"><span>*</span> Email</label>
								<input class="form-control"  type="email" required="">
							</div>
							<div class="form-group">
								<label class="col-form-label pt-0"><span>*</span> Name</label>
								<input class="form-control"  type="text" required="">
							</div>
							<div class="form-group">
								<label class="col-form-label"><span>*</span>Password </label>
								<div class="input-group mb-3">
									<input type="password" class="form-control">
									<div class="input-group-prepend">
										<span class="input-group-text">
											<i class="fa fa-eye"></i>
										</span>
									</div>
								</div>
							</div>
							<div class="form-group pull-right">
								<div class="product-buttons text-center">
									<a type="button" href="user_accounts.php" class="btn btn-light">Discard</a>
									<button type="button" ng-click="createUserAccount()" class="btn btn-primary">Create</button>
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
