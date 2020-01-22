<?php require_once ('../partials/header.php') ?>

<div class="page-body" ng-controller="accountsCTRL">

	<!-- top bar starts-->
	<div class="container-fluid">
		<div class="page-header">
			<div class="row">
				<div class="col-lg-6">
					<div class="page-header-left">
						<h3>Reserved Bookings
							<small>List of Reserved Booking</small>
						</h3>
					</div>
				</div>
				<div class="col-lg-6">
					<ol class="breadcrumb pull-right">
						<li class="breadcrumb-item"><a href="#"><i data-feather="home"></i></a></li>
						<li class="breadcrumb-item">Reserved Bookings</li>
					</ol>
				</div>
			</div>
		</div>
	</div>
	<!-- top bar Ends-->


	<!-- list of bookings -->
	<div class="container-fluid">
		<div class="row">
			<div class="col-md-12">
				<div class="card">
					<div class="card-body">
						<div class="user-status table-responsive latest-order-table">
							<table id="datatable" class="table table-bordernone">
								<thead>
								<tr>
									<th scope="col">UserId</th>
									<th scope="col">Name</th>
									<th scope="col">Email</th>
									<th scope="col">Room</th>
									<th scope="col">Date</th>
									<th scope="col">Checkin Time</th>
									<th scope="col">Checkout Time</th>
									<th scope="col">status</th>
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
									<td class="digits">randy@mail.com</td>
									<td class="digits">Meeting Room</td>
									<td class="digits">22-Jan-2020</td>
									<td class="digits">12:00 PM</td>
									<td class="digits">02:00 PM</td>
									<td class="digits"><span class="label label-secondary" style="padding: 5px">upcoming</span></td>
								</tr>
								<tr>
									<td>USR1</td>
									<td class="bd-t-none u-s-tb">
										<div class="align-middle image-sm-size"><img style="width: 35px;margin-top: 3%;" class="img-radius align-top m-r-15 rounded-circle blur-up lazyloaded" src="../../assets/images/user_placeholder.png" alt="" data-original-title="" title="">
											<div class="d-inline-block">
												<h6>Randy Ortan</h6>
											</div>
										</div>
									</td>
									<td class="digits">randy@mail.com</td>
									<td class="digits">Meeting Room</td>
									<td class="digits">23-Jan-2020</td>
									<td class="digits">01:00 PM</td>
									<td class="digits">02:00 PM</td>
									<td class="digits"><span class="label label-secondary" style="padding: 5px">upcoming</span></td>
								</tr>
								<tr>
									<td>USR2</td>
									<td class="bd-t-none u-s-tb">
										<div class="align-middle image-sm-size"><img style="width: 35px;margin-top: 3%;" class="img-radius align-top m-r-15 rounded-circle blur-up lazyloaded" src="../../assets/images/user_placeholder.png" alt="" data-original-title="" title="">
											<div class="d-inline-block">
												<h6>Randy Ortan</h6>
											</div>
										</div>
									</td>
									<td class="digits">randy@mail.com</td>
									<td class="digits">Auditorium</td>
									<td class="digits">12-Dec-2018</td>
									<td class="digits">12:00 PM</td>
									<td class="digits">02:00 PM</td>
									<td class="digits"><span class="label label-success" style="padding: 5px">completed</span></td>

								</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- list of bookings Ends-->

</div>

<?php require_once ('../partials/footer.php') ?>

<!-- Angular controller for page -->
<script src="../../controllers/accountsCTRL.js"></script>

<script>
	$(document).ready(function() {
		$('#datatable').DataTable( {} );
	} );
</script>
