/*Exercise #1: Construct for loops that accomplish the following tasks:
    a. Print the numbers 0 - 20, one number per line.
    b. Print only the ODD values from 3 - 29, one number per line.
    c. Print the EVEN numbers 12 to -14 in descending order, one number per line.
    d. Challenge - Print the numbers 50 - 20 in descending order, but only if the numbers are multiples of 3. (Your code should work even if you replace 50 or 20 with other numbers). */
// //a
  for (let i=0; i<=20;i++){
    console.log(i)
  }

// //b
  for(let j=3; j<29; j+=2){
    console.log(j)
  }

//c
  for(let k=12; k>-14; k-=2){
    console.log(k)
  }  

//d
const input = require('readline-sync');
let minumumNo=""; //answer will be change
minumumNo=input.question("Could you please choose a minumum number: ")
let maximumNo=""; //answer will be change
maximumNo=input.question("Could you please choose a maximum number: ")
let multiplesNo=""; //answer will be change
multiplesNo=input.question("Could you please choose a number for multiples: ")
let arrMulti=[]

for(let l=Number(minumumNo); l<Number(maximumNo); l++){
  if((l%(Number(multiplesNo)))==0){
    arrMulti.push(l)
  } 
} 
console.log(arrMulti)

// let arrMulti=[]
// for(let l=20; l<50; l++){
//   if((l%3)==0){
//     arrMulti.unshift(l)
//   } 
// } 
// console.log(arrMulti)





/*Exercise #2: 
Initialize two variables to hold the string “LaunchCode” and the array [1, 5, ‘LC101’, ‘blue’, 42].


Construct ``for`` loops to accomplish the following tasks:
  a. Print each element of the array to a new line.
  b. Print each character of the string - in reverse order - to a new line. */ 
let str='LaunchCode'
let arr= [1, 5, 'LC101', 'blue', 42]

for (let i=0; i<arr.length; i++){
  console.log(arr[i])
}
let newStr="";
for (let i=0;i<str.length;i++){
newStr=str[i]+newStr
}
console.log(newStr)

/*Exercise #3:Construct a for loop that sorts the array [2, 3, 13, 18, -5, 38, -10, 11, 0, 104] into two new arrays:
  a. One array contains the even numbers, and the other holds the odds.
  b. Print the arrays to confirm the results. */

  let arrMain=[2, 3, 13, 18, -5, 38, -10, 11, 0, 104];
  let arrOdd=[];
  let arrEven=[];

  for (let i=0;i<arrMain.length; i++){
    if(arrMain[i]%2==0){
      arrEven.push(arrMain[i])
    }else{

      arrOdd.push(arrMain[i])
    }
  }
  console.log(`Even number array is ${arrEven} .`)
  console.log(`Odd number array is ${arrOdd} .`)
