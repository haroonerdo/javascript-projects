//throw Error("You cannot divide by zero!");

// expect( function() {
//     checkThrow(); 
// }).toThrow(new Error('You cannot divide by zero!'));

//throw SyntaxError("That is the incorrect syntax");


const input = require('readline-sync');

let animals = [{name: 'cat'}, {name: 'dog'}];
let index = Number(input.question("Enter index of animal:"));

try {
    console.log('animal at index:', animals[index].name);
} catch(err) {
    console.log("We caught a TypeError, but our program continues to run!");
    console.log("You tried to access an animal at index:", index);
}

console.log("the code goes on...");

let x;
console.log(x); // undefined