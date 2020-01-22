var iukl = angular.module('iukl',[]);
iukl.controller("mainCTRL", ['$http', '$scope', function(http, sc){

    sc.loggedinUser={
        name:'Kamran Khan',
        accountTitle:'Administrator'
    };
    sc.routes = [
        {"route":"../dashboard/index.php","label":"Dashboard","icon":"home"},
        {"route":"","label":"Catalog","icon":"book-open",
            child:[
                {"route":"../catalog/index.php","label":"View"},
                {"route":"../catalog/add_book.php","label":"Add Book"},
            ]
        },
        {"route":"","label":"eBook","icon":"book",
            child:[
                {"route":"../books/index.php","label":"View"},
                {"route":"../books/add_book.php","label":"Add eBook"},
            ]
        },
        {"route":"","label":"Exam Papers","icon":"file-text",
            child:[
                {"route":"../papers/index.php","label":"View"},
                {"route":"../papers/add_paper","label":"Add Paper"},
            ]
        },
        {"route":"","label":"User Management","icon":"users",
            child:[
                {"route":"../user/admin_accounts.php","label":"Admin Accounts"},
                {"route":"../user/user_accounts.php","label":"User Accounts"},
            ]
        },
        {"route":"","label":"Room Booking","icon":"grid",
            child:[
                {"route":"../rooms/pending_request.php","label":"Pending Bookings"},
                {"route":"../rooms/reserved_bookings.php","label":"Reserved Bookings"},
            ]
        },
        {"route":"../reports/index.php","label":"Reports","icon":"clipboard"},
    ];
    
    setTimeout(()=>{
        feather.replace()
    },500);
    
    sc.logout = async ()=>{
        try{
            swal({
                title: "Logged out",
                text: "Redirecting you login",
                icon: "success",
                button: null,
            });
            setTimeout(()=>{
                window.location.href='../login.php';
            },1000);
        }
        catch (e) {
            swal({
                title: "Oops",
                text: "Something not right",
                icon: "error",
                button: "Close",
            });
        }

    };

}]);
