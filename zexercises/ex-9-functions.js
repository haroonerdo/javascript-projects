/*
let input = require('readline-sync');
let questions=['what day is it? ', 'First Name: ', 'Is purple a color? ']

let answers=questions.map((question, index)=>{
    return input.question(`${index+1}) ${question}`);
})
console.log(answers);
*/
const input = require('readline-sync');

function getValidInput(prompt, isValid) {

    // Prompt the user, using the prompt string that was passed
    let userInput = input.question(prompt);

    // Call the boolean function isValid to check the input
    while (!isValid(userInput)) {
    console.log("Invalid input. Try again.");
    userInput = input.question(prompt);
    }

    return userInput;
}

// A boolean function for validating input
let isEven = function(n) {
    return Number(n) % 2 === 0;
};

console.log(getValidInput('Enter an even number:', isEven));
