let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6,
   astronautID: 1,
   move: function () {return Math.floor(Math.random()*11)},
   info: function(){console.log(`${this.name} is a ${this.species}. They are ${this.age} years old and ${this.mass} kilograms. Their ID is ${this.astronautID}.`)}

};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5,
   astronautID: 2,
   move: function () {return Math.floor(Math.random()*11)},
   info: function(){console.log(`${this.name} is a ${this.species}. They are ${this.age} years old and ${this.mass} kilograms. Their ID is ${this.astronautID}.`)}

};

let superChimpTwo = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6,
   astronautID: 3,
   move: function () {return Math.floor(Math.random()*11)},
   info: function(){console.log(`${this.name} is a ${this.species}. They are ${this.age} years old and ${this.mass} kilograms. Their ID is ${this.astronautID}.`)}

};

let dog = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5,
   astronautID: 4,
   move: function () {return Math.floor(Math.random()*11)},
   info: function(){console.log(`${this.name} is a ${this.species}. They are ${this.age} years old and ${this.mass} kilograms. Their ID is ${this.astronautID}.`)}

};

let waterBear = {
   name: "Almina",
   species: "Tardigrade",
   mass: 0.0000000001,
   age: 1,
   astronautID: 5,
   move: function () {return Math.floor(Math.random()*11)},
   info: function(){console.log(`${this.name} is a ${this.species}. They are ${this.age} years old and ${this.mass} kilograms. Their ID is ${this.astronautID}.`)}
};

let crew = [superChimpOne, superChimpTwo, salamander, dog, waterBear]; 
for (let i=0; i<crew.length; i++){
   crew[i].info();
}

// superChimpOne.info();
// salamander.info();
// superChimpTwo.info();
// dog.info();
// waterBear.info();



//// After you have created the other object literals, add the astronautID property to each one.

//// Create an array to hold the animal objects.

//// Print out the relevant information about each animal.

// Start an animal race!

function fitnessTest(candidates){
   let results = [], numSteps, turns;
   candidates=crew;
   for (let i = 0; i < candidates.length; i++){
       numSteps = 0;
       turns = 0;
       while(numSteps < 20){
       numSteps += candidates[i].move();
       turns++;
       }
       results.push(`${candidates[i].name} took ${turns} turns to take 20 steps.`);
   }
   return results;
  }
//   console.log(fitnessTest(superChimpOne));
//   console.log(fitnessTest(superChimpTwo));
//   console.log(fitnessTest(salamander));
//   console.log(fitnessTest(dog));
//   console.log(fitnessTest(waterBear));

// for(let i=0; i<crew.length; i++){
//  console.log(fitnessTest(crew[i]));
// }
  
// console.log(fitnessTest(crew));


fitnessTest(crew).map(result =>{
   console.log(result);
});
fitnessTest(crew).forEach(result => {
   console.log(result);
});



