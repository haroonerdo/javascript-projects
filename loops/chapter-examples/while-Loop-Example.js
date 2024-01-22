// let i = 0;
// while (i < 51) {
//   console.log(i);
//   i++;
// }

// const input = require('readline-sync');

// let num = input.question('Please enter a positive number:');
// num = Number(num);

// while (num <= 0) {
//    num = input.question('Invalid input. Please enter a positive number:');
//    num = Number(num);
// }

// let j = 0;
// while (j < 51) {
//    console.log(j);
//    i--;
// }

let n = 10;
let answer = 1;

while (n > 0) {
   answer = answer + n;
   n = n - 1; //n=n+1 infinity loop
}

console.log(answer);

for (let i = 0; i < 42; i++) {
   // rest of loop body
   if (i > 10) {
      console.log("loop breaked because i>10")
      break;
   }
}

let numbers = [ 12,22,32,42,52,62];
let searchVal = 42;
let i = 0;

while (i < numbers.length) {
   if (numbers[i] === searchVal) {
      break;
   }
   i++;
}

if (i < numbers.length) {
   console.log("The value", searchVal, "was located at index", i);
} else {
   console.log("The value", searchVal, "is not in the array.");
}