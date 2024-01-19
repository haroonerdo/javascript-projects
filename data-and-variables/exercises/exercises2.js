// const input = require('readline-sync');
// console.log("Hello,");
// let name = input.question("Enter your name: ");
// console.log("Hello, " + name + "!")

// let num1 = input.question("Enter a number: ");
// let num2 = input.question("Enter another number: ");

// console.log(Number(num1) + Number(num2));

let str1="3,6,9,12"
let str2="A;C;M;E"
let str3="space delimited string"
let str4="Comma-spaces, might, require, typing, caution"
let arr1;
let arr2;
let check;

if (str1.includes(',')){
    arr1=str1.split(',').reverse().join(',')
}console.log(arr1)

if (str2.includes(';')){
    arr2=str2.split(';').sort().join('-');
    }console.log(arr2)

    if (str3.includes(' ')){
        arr3=str3.split(' ').sort().reverse().join(' ');
        }console.log(arr3)

        if (str4.includes(', ')){
            arr4=str4.split(', ').reverse().join(',');
            }console.log(arr4)