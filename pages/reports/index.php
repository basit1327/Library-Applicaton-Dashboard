<?php require_once ('../partials/header.php') ?>

<div class="page-body" ng-controller="reportCTRL">

	<!-- top bar starts-->
	<div class="container-fluid">
		<div class="page-header">
			<div class="row">
				<div class="col-lg-6">
					<div class="page-header-left">
						<h3>Report</h3>
					</div>
				</div>
				<div class="col-lg-6">
					<ol class="breadcrumb pull-right">
						<li class="breadcrumb-item"><a href="#"><i data-feather="home"></i></a></li>
						<li class="breadcrumb-item">Reports</li>
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
					<div class="card tab2-card">
						<div class="card-body">
							<ul class="nav nav-tabs nav-material" id="top-tab" role="tablist">
								<li class="nav-item"><a class="nav-link active"  data-toggle="tab" href="#tab-user" role="tab"  aria-selected="true"><i data-feather="user" class="mr-2"></i>Users</a></li>
								<li class="nav-item"><a class="nav-link" data-toggle="tab" href="#tab-ebooks" role="tab" aria-selected="false"><i data-feather="book" class="mr-2"></i>eBooks</a></li>
								<li class="nav-item"><a class="nav-link" data-toggle="tab" href="#tab-papers" role="tab" aria-selected="false"><i data-feather="file-text" class="mr-2"></i>Exam Papers</a></li>
								<li class="nav-item"><a class="nav-link" data-toggle="tab" href="#tab-booking" role="tab" aria-selected="false"><i data-feather="grid" class="mr-2"></i>Room Bookings</a></li>
							</ul>
							<div class="tab-content" id="top-tabContent">
								<div class="tab-pane fade show active" id="tab-user" role="tabpanel">
									<h5 class="f-w-600">Users Registration by</h5>
									<div class="col-auto mb-5">
										<input type="text" class="dateRangePicker form-control">
									</div>
									<table class="datatable table table-bordernone">
										<thead>
										<tr>
											<th scope="col">ID</th>
											<th scope="col">Name</th>
											<th scope="col">Email</th>
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
											<td class="digits">randy@mail.com</td>
											<td class="digits">12-Dec-2018</td>
											<td class="digits">Martin Axe</td>
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
											<td class="digits">Marin@mail.com</td>
											<td class="digits">12-Dec-2018</td>
											<td class="digits">Martin Axe</td>
										</tr>
										</tbody>
									</table>
								</div>
								<div class="tab-pane fade" id="tab-ebooks" role="tabpanel">
									<h5 class="f-w-600">eBooks Added by</h5>
									<div class="col-auto mb-5">
										<input type="text" class="dateRangePicker form-control">
									</div>
									<table class="datatable table table-bordernone" style="width:100%">
										<thead>
										<tr>
											<td scope="col">ISBN</td>
											<td scope="col">Title</td>
											<td scope="col">Author</td>
											<td scope="col">Edition</td>
											<td scope="col">Price</td>
											<td scope="col">Purchase Date</td>
											<td scope="col">Added Date</td>
										</tr>
										</thead>
										<tbody>
										<tr>
											<td>SB512551242322</td>
											<td class="digits" style="font-weight: 600;">Data Structure</td>
											<td class="digits"><i class="fa fa-user"></i> Kewin Ovin</td>
											<td class="digits">9</td>
											<td class="digits"><i class="fa fa-money"></i>1500</td>
											<td class="digits"><i class="fa fa-calendar"></i> 13-06-2013</td>
											<td class="digits"><i class="fa fa-calendar"></i> 01-01-2019</td>
										</tr>
										</tbody>
									</table>
								</div>
								<div class="tab-pane fade" id="tab-papers" role="tabpanel">
									<h5 class="f-w-600">Exam Paper Added by</h5>
									<div class="col-auto mb-5">
										<input type="text" class="dateRangePicker form-control">
									</div>
									<table class="datatable table table-bordernone" style="width:100%">
										<thead>
										<tr>
											<td scope="col">Subject Code</td>
											<td scope="col">Title</td>
											<td scope="col">Semester Name</td>
											<td scope="col">Year</td>
											<td scope="col">Added Date</td>
										</tr>
										</thead>
										<tbody>
										<tr>
											<td>DT1</td>
											<td class="digits" style="font-weight: 600;">Calculas 1</td>
											<td class="digits"><i class="fa fa-user"></i> BSCS-1</td>
											<td class="digits"><i class="fa fa-calendar"></i> 2019</td>
											<td class="digits"><i class="fa fa-calendar"></i> 01-01-2019</td>
										</tr>
										<tr>
											<td>CS4</td>
											<td class="digits" style="font-weight: 600;">Discrete Mathmatics</td>
											<td class="digits"><i class="fa fa-user"></i> MSc P1</td>
											<td class="digits"><i class="fa fa-calendar"></i> 2019</td>
											<td class="digits"><i class="fa fa-calendar"></i> 01-01-2019</td>
										</tr>
										</tbody>
									</table>
								</div>
								<div class="tab-pane fade" id="tab-booking" role="tabpanel">
									<h5 class="f-w-600">Room Bookings by</h5>
									<div class="col-auto mb-5">
										<input type="text" class="dateRangePicker form-control">
									</div>
									<table class="datatable table table-bordernone" style="width:100%">
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
		</div>
	</div>
	<!-- list of bookings Ends-->

</div>

<?php require_once ('../partials/footer.php') ?>

<!-- Angular controller for page -->
<script src="../../controllers/reportCTRL.js"></script>

<!--datatable print buttons-->
<script src="../../assets/js/datatables/datatable-button.min.js"></script>
<script src="../../assets/js/datatables/datatable-print-button.min.js"></script>

<script>
	$(document).ready(function() {
		$('.datatable').DataTable( {
			dom: 'Bfrtip',
			buttons: [
				'print'
			]
		} );
	} );

	var dateRangesForReceivedServices = {
		fromDate:getDateForRangePicker(1),
		toDate:getDateForRangePicker(0)
	};

	$('.dateRangePicker').daterangepicker({
		ranges: {
			'Today': [moment(), moment()],
			'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
			'Last 7 Days': [moment().subtract(6, 'days'), moment()],
			'Last 30 Days': [moment().subtract(29, 'days'), moment()],
			'This Month': [moment().startOf('month'), moment().endOf('month')],
			'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
		},
		"startDate": dateRangesForReceivedServices.fromDate,
		"endDate": dateRangesForReceivedServices.toDate,
		"maxDate": dateRangesForReceivedServices.toDate
	}, (start, end)=> {
		dateRangesForReceivedServices.fromDate = start.format('MM/DD/YYYY');
		dateRangesForReceivedServices.toDate = end.format('MM/DD/YYYY');
		console.log('New date range selected: ',dateRangesForReceivedServices);
	})

</script>
