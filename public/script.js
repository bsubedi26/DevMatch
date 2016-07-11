$(document).ready(function(){
console.log("js loaded");


//submit button function to capture user info and calculate personality match

$( "#submit" ).click(function(){
//form validation function
function validateForm() {
		  var isValid = true;
		  //this checks each question the user must enter
		  $('.form-control').each(function() {
		    if ( $(this).val() === "" )
		        isValid = false;
		  });
		  //this checks all personality questions have been answered
		  $('.chosen-select').each(function() {
		  	if( $(this).val() === "")
		  		isValid = false
		  })
		  //uses the results of the validation to collect data or alert user
		  return isValid;
		}
		// If all required fields are filled
		if (validateForm() == true)
		{


			console.log("Ok");

//info pulled from form and entered into database




//function for personality
//pull the values from the 5 questions to calculate the %


//add 1% for every check box that's added

//result is % matching variable

//info enters column into database
	}
	else
	{
		alert("Please fill out all questions before submitting");
	}
	return false
	});//end of form validation
	

	});//end of submit onclick
 //end of document ready