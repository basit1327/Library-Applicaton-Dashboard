<!DOCTYPE html>
<html lang="en">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Multikart admin is super flexible, powerful, clean &amp; modern responsive bootstrap 4 admin template with unlimited possibilities.">
    <meta name="keywords" content="admin template, Multikart admin template, dashboard template, flat admin template, responsive admin template, web app">
    <meta name="author" content="pixelstrap">
    <link rel="icon" href="../../assets/images/dashboard/favicon.png" type="image/x-icon">
    <link rel="shortcut icon" href="../../assets/images/dashboard/favicon.png" type="image/x-icon">
    <title>IUKL Administrator Dashboard</title>

    <!-- Google font-->
<!--    <link href="https://fonts.googleapis.com/css?family=Work+Sans:100,200,300,400,500,600,700,800,900" rel="stylesheet">-->
<!--    <link href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet">-->

    <!-- Font Awesome-->
    <link rel="stylesheet" type="text/css" href="../../assets/css/fontawesome.css">

    <!-- Flag icon-->
    <link rel="stylesheet" type="text/css" href="../../assets/css/flag-icon.css">

    <!-- ico-font-->
    <link rel="stylesheet" type="text/css" href="../../assets/css/icofont.css">

    <!-- Prism css-->
    <link rel="stylesheet" type="text/css" href="../../assets/css/prism.css">

    <!-- Chartist css -->
    <link rel="stylesheet" type="text/css" href="../../assets/css/chartist.css">

    <!-- Bootstrap css-->
    <link rel="stylesheet" type="text/css" href="../../assets/css/bootstrap.css">

    <!-- App css-->
    <link rel="stylesheet" type="text/css" href="../../assets/css/admin.css">

	<!-- daterange picker css-->
	<link rel="stylesheet" type="text/css" href="../../assets/css/daterangepicker.css">

	<!-- datatable css-->
	<link rel="stylesheet" type="text/css" href="../../assets/css/data-table.css">


</head>

<body ng-app="iukl" ng-controller="mainCTRL">

<!-- page-wrapper Start-->
<div class="page-wrapper">

    <!-- Page Header Start-->
    <div class="page-main-header">
        <div class="main-header-right row">
            <div class="main-header-left d-lg-none">
                <div class="logo-wrapper"><a href="index.php"><img class="blur-up lazyloaded" src="../../assets/images/dashboard/logo.png" alt=""></a></div>
            </div>
            <div class="mobile-sidebar">
                <div class="media-body text-right switch-sm">
                    <label class="switch"><a href="#"><i id="sidebar-toggle" data-feather="align-left"></i></a></label>
                </div>
            </div>
            <div class="nav-right col">
                <ul class="nav-menus">
                    <li><a class="text-dark" href="#!" onclick="javascript:toggleFullScreen()"><i data-feather="maximize-2"></i></a></li>
                    <li class="onhover-dropdown">
                        <div class="media align-items-center"><img class="align-self-center pull-right img-30 rounded-circle blur-up lazyloaded" src="../../assets/images/user_placeholder.png" alt="header-user">
<!--                            <div class="dotted-animation"><span class="animate-circle"></span><span class="main-circle"></span></div>-->
                        </div>
                        <ul class="profile-dropdown onhover-show-div p-20 profile-dropdown-hover">
                            <li><a href="#" ng-click="logout()"><i data-feather="log-out"></i>Logout</a></li>
                        </ul>
                    </li>
                </ul>
                <div class="d-lg-none mobile-toggle pull-right"><i data-feather="more-horizontal"></i></div>
            </div>
        </div>
    </div>
    <!-- Page Header Ends -->

    <!-- Page Body Start-->
    <div class="page-body-wrapper">

        <!-- Page Sidebar Start-->
        <div class="page-sidebar">
            <div class="main-header-left d-none d-lg-block">
                <div class="logo-wrapper"><a href="index.php"><img style="width: 200px !important;" class="blur-up lazyloaded" src="../../assets/images/dashboard/logo.png" alt=""></a></div>
            </div>
            <div class="sidebar custom-scrollbar">
                <div class="sidebar-user text-center">
                    <div><img class="img-60 rounded-circle lazyloaded blur-up" src="../../assets/images/user_placeholder.png" alt="#">
                    </div>
                    <h6 class="mt-3 f-14">{{loggedinUser.name}}</h6>
                    <p>{{loggedinUser.accountTitle}}</p>
                </div>
                <ul class="sidebar-menu" style="margin-bottom: 35px;">
                    <li ng-repeat="x in routes">
                        <a class="sidebar-header" href="{{x.route}}"><i data-feather="{{x.icon}}"></i> <span>{{x.label}}</span><i ng-if="x.child" class="fa fa-angle-right pull-right"></i></a>
                        <ul class="sidebar-submenu" ng-if="x.child">
                                <li ng-repeat="cx in x.child"><a href={{cx.route}}><i class="fa fa-circle"></i>{{cx.label}}</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
        <!-- Page Sidebar Ends-->
