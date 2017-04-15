function lieDetectorTest(){
    var lies = 0;


var stolenDiamond = {};
if (stolenDiamond){
    console.log("You Stole the diamond");
    lies++;
}
var car = {
    keysInPocket: null
};
if (car.keysInPocket){ //evaluates to falsey bc null
    console.log("uh oh, guess you stole the car!");
    lies++;
}
if (car.emptyGasTank){ //undefined evals to falsey
    console.log("you drove the car after you stole it!");
    lies++;
}
var foundYouAtTheCrimeScene = [];
if (foundYouAtTheCrimeScene){ //truthy
    console.log("A sure sign of guilt");
    lies++;
}
if (foundYouAtTheCrimeScene[0]){ //falsey undefined
    consol.log("caught with a stolen item!");
    lies++;
}
var yourName = ""; //falsey empty string
if (yourName){
    console.log("Guess you lied about your name");
    lies++;
}
return lies;
}
var numberOfLies = lieDetectorTest();
console.log("you told "+ numberOfLies + " lies!");
if (numberOfLies >=3){
    console.log("guilty as charged");
}

var name = "werdna";
for (i=name.length-1; i>=0; i--){
    console.log(name[i]);
}

function Duck(sound){
    this.sound = sound;
    this.quack = function() {console.log(this.sound);}
}
var toy = new Duck("quack quack");
toy.quack();
console.log(typeof toy);
console.log(toy instanceof Duck);
console.log(typeof 1/0);