//Arrays can hold different data types, even other arrays! A multi-dimensional array is one with entries that are themselves arrays.

//1) Define and initialize the arrays specified in the exercise to hold the name, chemical symbol and mass for different elements.
let element1 = ['hydrogen', 'H', 1.008]
let element2 = ['helium', 'He', 4.003]
let element26 = ['iron', 'Fe', 55.85]
console.log(element1)
//2) Define the array 'table', and use 'push' to add each of the element arrays to it. Print 'table' to see its structure.
let multiDimArr=[];
console.log(multiDimArr)
multiDimArr.push(element1)
multiDimArr.push(element2)
multiDimArr.push(element26)
console.log(multiDimArr)
//3) Use bracket notation to examine the difference between printing 'table' with one index vs. two indices (table[][]).
console.log(multiDimArr[0])
console.log("--------------------------")
console.log(multiDimArr[0][0])

//4) Using bracket notation and the table array, print the mass of element1, the name for element 2 and the symbol for element26.
console.log(multiDimArr[0][2]+": the mass of element1.")
console.log(multiDimArr[1][0]+": the name for element2.")
console.log(multiDimArr[2][1]+" :the symbol for element26.")
//5) 'table' is an example of a 2-dimensional array. The first “level” contains the element arrays, and the second level holds the name/symbol/mass values. Experiment! Create a 3-dimensional array and print out one entry from each level in the array.
let newMultiDim=[[1,2,["a","b"]],["John",false ], ["Milk", "Bread", 987, "63"]]
console.log(newMultiDim.length) //3
console.log(newMultiDim[0].length) //3
console.log(newMultiDim[1].length) //2
console.log(newMultiDim[2].length) //4

console.log(newMultiDim[0][2])
    console.log(newMultiDim[1][1])
        console.log(newMultiDim[2][3])
