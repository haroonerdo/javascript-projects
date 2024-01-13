const input = require('readline-sync');
console.log("Hello,");
let name = input.question("Enter your name: ");
console.log("Hello, " + name + "!")

let num1 = input.question("Enter a number: ");
let num2 = input.question("Enter another number: ");

console.log(parseInt(num1) + parseInt(num2));