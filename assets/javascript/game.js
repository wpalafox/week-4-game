$(document).ready(function(){
    
console.log("ready!");

$("#clickHere").on("click", function(){

		var maximum = 120;
		var minimum =  19;

		var randomNumber = Math.floor(Math.random()*(maximum-minimum +1))+minimum;
		
		console.log(randomNumber);
		
		$("#gameNumber").append(randomNumber);
	
		$("#clickHere").remove();


	}); 
 
var counter = 0;
  $("#yellow").on("click", function() {

    	var maximum = 12;
		var minimum =  1;

		var randomNumber = Math.floor(Math.random()*(maximum-minimum +1))+minimum;

		console.log(randomNumber);
  		//Push randomNumber to Overall Counter
  	
  	});


$("#blue").on("click", function() {

    	var maximum = 12;
		var minimum =  1;

		var randomNumber = Math.floor(Math.random()*(maximum-minimum +1))+minimum;

		console.log(randomNumber);

  });

$("#pink").on("click", function() {

    	var maximum = 12;
		var minimum =  1;

		var randomNumber = Math.floor(Math.random()*(maximum-minimum +1))+minimum;

		console.log(randomNumber);

  });

$("#rainbow").on("click", function() {

    	var maximum = 12;
		var minimum =  1;

		var randomNumber = Math.floor(Math.random()*(maximum-minimum +1))+minimum;

		console.log(randomNumber);

  });









 });