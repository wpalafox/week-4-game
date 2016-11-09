$(document).ready(function(){

console.log("ready!");

var maximum = 120;

var minimum =  19;
		
 //Selects random number to manifest itself at the beginning of the game
 //Will land between 19-120  

targetNumber = Math.floor(Math.random()*(maximum-minimum +1))+minimum;



//Sets up random numbers for each jewel
var maximum = 12;
var minimum =  1;

var yellowNumber = Math.floor(Math.random()*(maximum-minimum +1))+minimum;
var blueNumber = Math.floor(Math.random()*(maximum-minimum +1))+minimum;
var pinkNumber = Math.floor(Math.random()*(maximum-minimum +1))+minimum;
var rainbowNumber = Math.floor(Math.random()*(maximum-minimum +1))+minimum;



var score = 0;
var wins = 0;
var losses = 0;


//Functions


function reset(){

	var maximum = 120;
	var minimum =  19;

	targetNumber = Math.floor(Math.random()*(maximum-minimum +1))+minimum;
	$("#gameNumber").html(targetNumber);
	
	var maximum = 12;
	var minimum =  1;

	yellowNumber = Math.floor(Math.random()*(maximum-minimum +1))+minimum;
	blueNumber = Math.floor(Math.random()*(maximum-minimum +1))+minimum;
	pinkNumber = Math.floor(Math.random()*(maximum-minimum +1))+minimum;
	rainbowNumber = Math.floor(Math.random()*(maximum-minimum +1))+minimum;



	score = 0;
	$("#scoreDisplay").html(score);
	

};


function lose(){

	losses++;
	$("#lossesDisplay").html(losses);



}

function win() {

	wins++;
	$("#winsDisplay").html(wins);

}




$("#clickHere").on("click", function(){

		
	console.log(targetNumber);
		
	$("#gameNumber").append(targetNumber);
	
	$("#clickHere").remove();


	}); 

  /////////////////////////////////////////



 $("#yellow").on("click", function(){

    console.log(yellowNumber);
		score += yellowNumber;
		console.log(score);
  		$("#scoreDisplay").html(score);
  
	if(targetNumber == score){

		win();

		reset();

	} else if (score > targetNumber){

		lose();

		reset();
	}
	


	});


$("#blue").on("click", function(){

    	
	console.log(blueNumber);
		score += blueNumber;
		console.log(score);
  		$("#scoreDisplay").html(score);
		
		if(targetNumber == score){

		win();

		reset();


	} else if (score > targetNumber){

		lose();

		reset();

	}
  



  });

$("#pink").on("click", function() {

 	
 	console.log(pinkNumber);
		score += pinkNumber;
		console.log(score);
  		$("#scoreDisplay").html(score);

	
 
  	if(targetNumber == score){

		win();

		reset();


	} else if (score > targetNumber){

		lose();

		reset();

	}



 });

$("#rainbow").on("click", function(){

	console.log(rainbowNumber);
		score += rainbowNumber;
		console.log(score);
  		$("#scoreDisplay").html(score);
  
	if(targetNumber == score){

		win();

		reset();

	} else if (score > targetNumber){

		lose();

		reset();

	}


	});


$("#resetButton").on("click", function(){

	reset(); 

});








 });