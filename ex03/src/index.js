// Create a myPetsArray array here
var myPetsArray = ["Dog", "Cat"];
// End of myPetsArray array
function myArrayFunction(myPets) {
    var myNewPets = [...myPets];
    // Only change code below this line
    var firstPet;
    var lastPet;
    myNewPets.push("Bird", "Fish");
    firstPet = myNewPets.shift();
    lastPet = myNewPets.pop();
    myNewPets.unshift("Lion");
    return myNewPets;
    // Only change code above this line
}

console.log(myArrayFunction(myPetsArray)); // Change this line
module.exports = myArrayFunction;
