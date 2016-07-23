//If admin login username and password are admin, allow access to /admin
$("#submitAdmin").on("click", function(e) {
	e.preventDefault();
	if ($("#adminname").val() === 'admin' && $("#password").val() === 'admin') {
		$(location).attr('href', '/admin')
	}
	else {
		var alert = $("body").prepend('<div class=" text-center alert alert-danger"><strong>Wrong Admin Username/Password!</strong></div>')
	}
});

// On click function to retrieve data from db to display for modal pop up
$("table tr").click(function() {
     
    var userID = $(this).find("#user_id").html().trim();
    userID = parseInt(userID);
    console.log(userID);
    console.log(typeof(userID));
    // Get request to the URL to retrieve the data from the database
    $.get('/userInfo/'+userID, function(data) {
        console.log(data[0])
        $(".modal-body").append("Full Name: " + data[0].first_name + " " + data[0].last_name + "<br>")
                        .append("Email: " + data[0].email + "<br>")
                        .append("Phone Number: " + data[0].phone_number + "<br>")
                        .append("Github: " + data[0].github + "<br>")
                        .append("LinkedIn: " + data[0].linkedin + "<br>")

        
        $("#myModal").modal("show");
    })
})
