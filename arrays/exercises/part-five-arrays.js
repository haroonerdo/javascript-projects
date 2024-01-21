let str = 'In space, no one can hear you code.';
let arr = ['B', 'n', 'n', 5];

//1) Use the split method on the string to identify the purpose of the parameter inside the ().
let strArr=str.split(" ");
console.log(strArr)
console.log(typeof strArr)
console.log("he string was converted to array using the split method. ")
//2) Use the join method on the array to identify the purpose of the parameter inside the ().
let arrStr=arr.join(" ");
console.log(arrStr)
arrStr=arr.join("");
console.log(arrStr)
arrStr=arr.join("a");
console.log(arrStr)
console.log(typeof arrStr)
console.log("The array was changed to different strings using the join method. ")
//3) Do split or join change the original string/array?
console.log(typeof strArr)
console.log("Split method can be change a string to an array. ")
console.log(typeof arrStr)
console.log("Join method can be change an array to a string. ")
//4) We can take a comma-separated string and convert it into a modifiable array. Try it! Alphabetize the cargoHold string, and then combine the contents into a new string.
let cargoHold = "water,space suits,food,plasma sword,batteries";
let cargoHold1=cargoHold.split(",");
console.log(cargoHold1);
console.log("The string was converted to array using the split method. ")
let cargoHold2=cargoHold1.sort();
console.log(cargoHold2);
console.log("The array was sorted using the sort method.")