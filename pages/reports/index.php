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
								<li class="nav-item"><a class="nav-link" data-toggle="tab" href="#tab-catalog" role="tab" aria-selected="false"><i data-feather="book-open" class="mr-2"></i>Catalog</a></li>
<!--								<li class="nav-item"><a class="nav-link" data-toggle="tab" href="#tab-booking" role="tab" aria-selected="false"><i data-feather="grid" class="mr-2"></i>Room Bookings</a></li>-->
							</ul>
							<div class="tab-content" id="top-tabContent">
								<div class="tab-pane fade show active" id="tab-user" role="tabpanel" ng-init="getUserList()">
									<h5 class="f-w-600">Users Registration by</h5>
									<div class="col-auto mb-5">
										<input type="text" id="dateRangePicker_user" class="dateRangePicker form-control">
									</div>
									<table class="datatable table table-bordernone">
										<thead>
										<tr>
											<th scope="col">StudentId</th>
											<th scope="col">Name</th>
											<th scope="col">Created At</th>
											<th scope="col">Status</th>
										</tr>
										</thead>
										<tbody>
										<tr ng-repeat="x in usersListToShow">
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
										</tr>
										</tbody>
									</table>
								</div>
								<div class="tab-pane fade" id="tab-ebooks" role="tabpanel" ng-init="getEBookList()">
									<h5 class="f-w-600">eBooks Added by</h5>
									<div class="col-auto mb-5">
										<input type="text" id="dateRangePicker_ebook" class="dateRangePicker form-control">
									</div>
									<table class="datatable table table-bordernone" style="width:100%">
										<thead>
										<tr>
											<td scope="col">ISBN</td>
											<td scope="col">Title</td>
											<td scope="col">Author</td>
											<td scope="col">Edition</td>
											<td scope="col">Price</td>
											<td scope="col">Publish Date</td>
											<td scope="col">Added At</td>
										</tr>
										</thead>
										<tbody>
										<tr ng-repeat="x in ebookListToShow">
											<td>{{x.isbn}}</td>
											<td class="digits" style="font-weight: 600;">{{x.title}}</td>
											<td class="digits"><i class="fa fa-user"></i> {{x.author}}</td>
											<td class="digits">{{x.edition}}</td>
											<td class="digits"><i class="fa fa-money"></i>{{x.price}}</td>
											<td class="digits"><i class="fa fa-calendar"></i> {{formatDate(x.publish_date)}}</td>
											<td class="digits"><i class="fa fa-calendar"></i> {{formatDate(x.added_at)}}</td>
										</tr>
										</tbody>
									</table>
								</div>
								<div class="tab-pane fade" id="tab-papers" role="tabpanel" ng-init="getPaperList()">
									<h5 class="f-w-600">Exam Paper Added by</h5>
									<div class="col-auto mb-5">
										<input type="text" id="dateRangePicker_paper" class="dateRangePicker form-control">
									</div>
									<table class="datatable table table-bordernone" style="width:100%">
										<thead>
										<tr>
											<td scope="col">Subject Code</td>
											<td scope="col">Title</td>
											<td scope="col">Semester Month</td>
											<td scope="col">Year</td>
											<td scope="col">Added At</td>
										</tr>
										</thead>
										<tbody>
										<tr ng-repeat="x in paperListToShow">
											<td>{{x.subject_code}}</td>
											<td class="digits" style="font-weight: 600;">{{x.title}}</td>
											<td class="digits">{{months[x.semester_month]}}</td>
											<!--									<td class="digits"><a href="localhost:3006" target="_blank"><i class="fa fa-file-pdf">{{x.file}}</i></a>  /</td>-->
											<td class="digits"><i class="fa fa-calendar"></i> {{x.year}}</td>
											<td class="digits"><i class="fa fa-calendar"></i> {{formatDate(x.added_at)}}</td>
										</tr>
										</tbody>
									</table>
								</div>
								<div class="tab-pane fade" id="tab-catalog" role="tabpanel" ng-init="getCatalogList()">
									<h5 class="f-w-600">Exam Paper Added by</h5>
									<div class="col-auto mb-5">
										<input type="text" id="dateRangePicker_catalog" class="dateRangePicker form-control">
									</div>
									<table class="datatable table table-bordernone" style="width:100%">
										<thead>
										<tr>
											<td scope="col">ISBN</td>
											<td scope="col">Title</td>
											<td scope="col">Cover</td>
											<td scope="col">Author</td>
											<td scope="col">Edition</td>
											<td scope="col">Availability</td>
											<td scope="col">Rack</td>
											<td scope="col">Added At</td>
										</tr>
										</thead>
										<tbody>
										<tr ng-repeat="x in catalogListToShow">
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
											<td class="digits"><i class="fa fa-calendar"></i> {{formatDate(x.added_at)}}</td>
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
	// $(document).ready(function() {
	// 	$('.datatable').DataTable( {
	// 		dom: 'Bfrtip',
	// 		buttons: [
	// 			'print'
	// 		]
	// 	} );
	// } );

	$('#datatable').DataTable({});

</script>
