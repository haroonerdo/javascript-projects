// Experiment with this loop by modifying each of the following: the variable initialization, the boolean condition, and the update expression.

// for (let i = 0; i < 51; i++) {
//    console.log(i);
//  }

//  for (let i = 0; i < 51; i=i+2) {
//   console.log(i);
// }

// for (let i = 1; i < 51; i=i+2) {
//   console.log(i);
// }

let phrase = "Chili Cook-off";
for (let i = 0; i < phrase.length - 1; i = i + 3) {
   console.log(phrase[i]);
}

let newPhrase = "";
for (let i = 0; i < phrase.length - 1; i = i + 3) {
   newPhrase+=phrase[i]
}
console.log(newPhrase);

let name = "LaunchCode";
let newName="";
for (let i = 6; i < name.length; i++) {
   console.log(name[i]);
   newName+=name[i]
}
console.log(newName)

let n = 6;
let total = 0;
for (let i = 1; i <= n; i++) {
   total += i;
}
console.log("total: "+total);

let numbers = [2, -5, 13, 42];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
   sum += numbers[i];
}
console.log("sum: "+sum);