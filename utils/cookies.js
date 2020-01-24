function setCookie(cname, cvalue, exdays) {
	var d = new Date();
	d.setTime(d.getTime() + (exdays*24*60*60*1000));
	var expires = "expires="+ d.toUTCString();
	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
	var name = cname + "=";
	var decodedCookie = decodeURIComponent(document.cookie);
	var ca = decodedCookie.split(';');
	for(var i = 0; i <ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
}

function deleteAllCookies() {
	document.cookie = "name=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
	document.cookie = "sessionId=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

function checkForSessionExpireCall(status){
	if ( status == 440){
		deleteAllCookies();
		window.location.href='../login.php';
	}
}
