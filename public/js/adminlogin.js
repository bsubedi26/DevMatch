//If admin login username and password are admin, allow access to /admin
$("#submitAdmin").on("click", function() {
	if ($("#adminname").val() === 'admin' && $("#password").val() === 'admin') {
		$(location).attr('href', '/admin')
	}
	else {
		var alert = $("body").prepend('<div class=" text-center alert alert-danger"><strong>Wrong Admin Username/Password!</strong></div>')
	}
});
