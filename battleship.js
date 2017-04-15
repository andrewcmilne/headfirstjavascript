var location1 = Math.floor(Math.random()*5);
var location2= location1+1;
var location3= location2 + 1;
var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;


while (isSunk == false){
    //get user input
    guess = prompt("Ready, aim, fire! Enter number between 0 and 6:");
    
    //compare the input to locations
    if(guess <0 || guess>6){
        alert("Please pick a valid coordinate!");
       }else{
       guesses+=1;
       if(guess == location1 || guess == location2|| guess == location3){
        hits+=1;
        alert("Hit!");
        if (hits==3){
            isSunk = true;
            //tell user
            alert("you sank my schooner!");
        }
            
        }else{
            alert("MISS!");
        }
       }
}
        
    

var stats = "You took "+ guesses + " guesses to sink my fleet!"+ " which means your accuracy was: "+ 3/guesses;
alert (stats);
