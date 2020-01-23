<?php require_once ('../partials/header.php') ?>

<div class="page-body" ng-controller="accountsCTRL">

	<!-- top bar starts-->
	<div class="container-fluid">
		<div class="page-header">
			<div class="row">
				<div class="col-lg-6">
					<div class="page-header-left">
						<h3>Admin Accounts
							<small>Manage IUKL Admin Accounts</small>
						</h3>
					</div>
				</div>
				<div class="col-lg-6">
					<ol class="breadcrumb pull-right">
						<li class="breadcrumb-item"><a href="admin_accounts.php"><i data-feather="home"></i></a></li>
						<li class="breadcrumb-item">User Management</li>
						<li class="breadcrumb-item">Admin</li>
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
									<th scope="col">StaffId</th>
									<th scope="col">Name</th>
									<th scope="col">Created At</th>
									<th scope="col">Created By</th>
								</tr>
								</thead>
								<tbody>
								<tr>
									<td>USR1</td>
									<td class="bd-t-none u-s-tb">
										<div class="align-middle image-sm-size"><img style="width: 35px;margin-top: 3%;" class="img-radius align-top m-r-15 rounded-circle blur-up lazyloaded" src="../../assets/images/user_placeholder.png" alt="" data-original-title="" title="">
											<div class="d-inline-block">
												<h6>Randy Ortan</h6>
											</div>
										</div>
									</td>
									<td class="digits">12-Dec-2018</td>
									<td class="digits">N/A</td>
								</tr>
								<tr>
									<td>USR2</td>
									<td class="bd-t-none u-s-tb">
										<div class="align-middle image-sm-size"><img style="width: 35px;margin-top: 3%;" class="img-radius align-top m-r-15 rounded-circle blur-up lazyloaded" src="../../assets/images/user_placeholder.png" alt="" data-original-title="" title="">
											<div class="d-inline-block">
												<h6>Marin Axe</h6>
											</div>
										</div>
									</td>
									<td class="digits">12-Dec-2018</td>
									<td class="digits">Randy Ortan</td>
								</tr>
								</tbody>
							</table>
							<a href="add_admin_account.php" class="btn btn-danger">Add New Admin</a>
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
<script>
	$(document).ready(function() {
		$('#datatable').DataTable( {} );
	} );
</script>