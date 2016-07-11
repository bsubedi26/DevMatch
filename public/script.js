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

	
  		//this variable changes all of the string values to numbers and adds them together to get a point sum
  		var answer = parseInt($("#q1").val())+parseInt($("#q2").val())+parseInt($("#q3").val())+parseInt($("#q4").val())+parseInt($("#q5").val())+parseInt($("#q6").val())+parseInt($("#q7").val())+parseInt($("#q8").val())+parseInt($("#q9").val())+parseInt($("#q10").val())
  		console.log(answer);
  		var totalPercentage =100-(parseInt(answer)*2)

  

	
  		console.log(totalPercentage);
		

      	
   	 		

			// Creates an object for the user's data
	    	var applicantData = {
	    		name: $("#name").val(),
	    		score: (totalPercentage)
	    	}

			console.log("Ok");

//info pulled from form and entered into database


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