//Part 1
/*
Create an array called practiceFile with the following entry: 273.15
*/
let practiceFile=[];
practiceFile[0]=273.15;
console.log(practiceFile)
practiceFile.push(1);
console.log(practiceFile)
practiceFile.push(2);
console.log(practiceFile)

/*
Use the bracket notation method to add "42" and "hello" to the array. 
Add these new items one at a time. 
Print the array after each step to confirm the changes.
*/
console.log(practiceFile.length);//3 last indeks=2 
practiceFile[3]=42;
console.log(practiceFile)
practiceFile[4]="hello";
console.log(practiceFile)


/*
Use a single .push() to add the following items:
false, -4.6, and "87".  Print the array to confirm the changes.
*/
practiceFile.push(false, -4.6, "87")
console.log(practiceFile)

