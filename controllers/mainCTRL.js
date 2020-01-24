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
            let serverResponse = await sendServerRequestWithAuthHeader(mainServerAddress+logoutURL,"GET",null,getCookie('sessionId'));
            if ( serverResponse ){
                if ( serverResponse.hasOwnProperty('status') ){
                    checkForSessionExpireCall(serverResponse.status);
                    if ( serverResponse.status==200 ){
                        swal({
                            title: "Logged out",
                            text: "Redirecting you login",
                            icon: "success",
                            button: null,
                        });

                        deleteAllCookies();
                        window.location.href='../login.php';
                    }
                }
                else throw 'Invalid server response';
            }
            else throw 'No response by server';

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

    (checkIsLoggedIn =>{
        let sessionId = getCookie('sessionId');
        if (!sessionId ){
            window.location.href='../login.php';
        }
    })();


    sc.formatDate =(date)=>{
        let dt = new Date(Number(date));
        console.log(date,dt);
        if ( dt ){
            return (dt.getDate()>9?dt.getDate():'0'+dt.getDate()) +'-'+
                ((dt.getMonth()+1)>9?(dt.getMonth()+1):'0'+(dt.getMonth()+1)) +'-'+
                dt.getFullYear();
        }
        else {
            return '--';
        }
    };

}]);
