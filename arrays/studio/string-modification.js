const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
// let newStr1="";
// let newStr2="";
// let strModifed="";
// newStr1=str.slice(0,3);
// newStr2=str.slice(3,str.length)
// console.log(newStr1);
// console.log(newStr2);
//strModifed=newStr2.concat(newStr1)

let newStr=str.slice(4).concat(str.slice(0,3));
console.log(newStr)

//Use a template literal to print the original and modified string in a descriptive phrase.
console.log(` The orginal string read as : ${str} aand the new string is ${newStr} . `)

//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.

//function ask(){
    //const input = require('readline-sync');
    let question="Could you please enter a number between (0-"+str.length+") in the cargo hold?: ";
    let answer="";
    console.log("The number you enter must be less than the length of the word.")
    answer=input.question("Nuumber: ")
    console.log("The number you enter must be less than the length of the word.")
    answer=Number(answer)

//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, 
//default to moving 3 characters. Also, the template literal should note the error.
if(answer<str.length){
let newStr1=str.slice(0,answer);
let newStr2=str.slice(answer,str.length)
console.log(newStr1);
console.log(newStr2);
strModifed=newStr2.concat(newStr1)
console.log(str+" modifed to "+strModifed+" using string methods. ")
}else{
    newStr=str.slice(4).concat(str.slice(0,3));
    console.log(`Your new word: ${newStr}  \nERROR: The number is not less than the length of the word. `)
}
//}
