// Write a function called 'divide' that takes two parameters: a numerator and a denominator.

// Your function should return the result of numerator / denominator.

// However, if the denominator is zero you should throw the error, "Attempted to divide by zero."

// Code your divide function here:

/*
const input = require('readline-sync');
let numerator = Number(input.question("Enter a number for numerator:"));
let denominator = Number(input.question("Enter a number for denominator:"));
let divided=(numerator/denominator);
if(numerator===0 && denominator===0){
    throw Error('Zero divided by zero is indeterminate!');
}else if (denominator === 0) {
   throw Error('You cannot divide by zero!');
} 
console.log(divided);
*/


function divide(numerator, denominator) {
    if(numerator===0 && denominator===0){
        throw Error('Zero divided by zero is indeterminate!');
    }else if (denominator === 0) {
       throw Error('You cannot divide by zero!');
    } 
    let divideTo=numerator/denominator;
    // divideTo=Math.round(divideTo); // 23/5=5
    // divideTo=Math.floor(divideTo); // 23/5=4
    // divideTo=Math.ceil(divideTo); // 23/5=5
    //divideTo=Math.trunc(divideTo);  // 23/5=4
    return console.log(divideTo);
 }
 divide(23,5); //4.6
 //divide(0,3); //0
 //divide(0,0); //'Zero divided by zero is indeterminate!'
 //divide(3,0); //'You cannot divide by zero!'
