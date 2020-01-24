<?php require_once ('../partials/header.php') ?>

<div class="page-body" ng-controller="dashboardCTRL" ng-init="getDashboardStats()">
		<!-- Container-fluid starts-->
		<div class="container-fluid">
            <div class="page-header">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="page-header-left">
                            <h3>Dashboard
                                <small>IUKL Pocket Library</small>
                            </h3>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <ol class="breadcrumb pull-right">
                            <li class="breadcrumb-item"><a href="index.php"><i data-feather="home"></i></a></li>
                            <li class="breadcrumb-item active">Dashboard</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
        <!-- Container-fluid Ends-->

        <!-- stats pill-->
        <div class="container-fluid">
            <div class="row" >
				<div class="col-xl-3 col-md-6 xl-50">
					<div class="card o-hidden widget-cards">
						<div class="bg-primary card-body" style="background-color: #212123 !important;">
							<div class="media static-top-widget row">
								<div class="icons-widgets col-2">
									<div class="align-self-center text-center"><i data-feather="book" class="font-primary" style="color: #212123 !important;"></i></div>
								</div>
								<div class="media-body col-4"><span class="m-0">eBooks</span>
									<h3 class="mb-0"><span>{{dashboardStats.ebooks}}</span><small> In Total</small></h3>
								</div>
								<div class="icons-widgets col-2">
									<div class="align-self-center text-center"><i data-feather="book-open" class="font-primary" style="color: #212123 !important;"></i></div>
								</div>
								<div class="media-body col-4"><span class="m-0">Catalog</span>
									<h3 class="mb-0"><span>{{dashboardStats.catalog}}</span><small> In Total</small></h3>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="col-xl-3 col-md-6 xl-50">
					<div class="card o-hidden widget-cards">
						<div class="bg-black card-body" style="background-color: #212123 !important;">
							<div class="media static-top-widget row">
								<div class="icons-widgets col-4">
									<div class="align-self-center text-center"><i data-feather="file-text"  style="color: #212123;"></i></div>
								</div>
								<div class="media-body col-8"><span class="m-0" style="color: white;">Exam Papers</span>
									<h3 class="mb-0"><span>{{dashboardStats.papers}}</span><small> In Total</small></h3>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="col-xl-3 col-md-6 xl-50">
					<div class="card o-hidden  widget-cards">
						<div class="bg-danger card-body" style="background-color: #212123 !important;">
							<div class="media static-top-widget row">
								<div class="icons-widgets col-4">
									<div class="align-self-center text-center"><i data-feather="users" class="font-secondary" style="color: #212123 !important;"></i></div>
								</div>
								<div class="media-body col-8"><span class="m-0">Registered Users</span>
									<h3 class="mb-0">
										<span>{{dashboardStats.users}}</span><small> In Total</small>
									</h3>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="col-xl-3 col-md-6 xl-50">
                    <div class="card o-hidden widget-cards">
                        <div class="bg-danger card-body" style="background-color: #212123 !important;">
                            <div class="media static-top-widget row">
                                <div class="icons-widgets col-4">
                                    <div class="align-self-center text-center"><i data-feather="users" class="font-warning" style="color: #212123 !important;"></i></div>
                                </div>
                                <div class="media-body col-8"><span class="m-0">Admin account</span>
                                    <h3 class="mb-0"> <span>{{dashboardStats.admins}}</span><small> In Total</small></h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- stats pill Ends-->
</div>

<?php require_once ('../partials/footer.php') ?>

<!--Report chart-->
<script src="../../assets/js/admin-reports.js"></script>

<!-- Angular controller for page -->
<script src="../../controllers/dashboardCTRL.js"></script>

