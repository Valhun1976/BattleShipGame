
var randomLoc = Math.floor(Math.random() * 5);
var shipPoint1 = randomLoc;
var shipPoint2 = shipPoint1 + 1;
var shipPoint3 = shipPoint2 + 1;
var guess;
var hits = 0;
var guesses = 0;

var isSunk = false;

console.log(randomLoc);

while(isSunk == false){
	
	guess = prompt("Ready, aim, fire! (enter a number from 0-6):");
	
	//check for valid input of an int from 0-6
	//if the input is not valid tell the player to enter a valid number from 0-6
	if(guess < 0 || guess > 6){
		
		alert("Please enter a valid number from 0-6!");
		
	}
	else{
		
		//else the input is valid add one to guesses
		guesses += 1;
	
		//if the input matches a ship position point add one to hits
		if(guess == shipPoint1 || guess == shipPoint2 || guess == shipPoint3){
			
			hits += 1;
			alert("Hit!");
			
			//if hits variable is equal to 3 set isSunk to true and tell the player they sunk the battleship
			if(hits == 3){
				
				isSunk = true;
				alert("You sunk my battleship!");
				
			}
			
		}
		else{
			
			alert("Miss!");
			
		}

	}
	
}

//so the player their stats
var stats = "You took " + guesses + " guesses to sink the battleship, " + 
	"which means your shooting accuracy was " + (3/guesses);
	
alert(stats);