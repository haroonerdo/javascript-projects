function sayHello() {
    console.log("Hello, World!");
}

sayHello();

// function printArray(names) {
//     for (let i = 0; i < names.length; i++) {
//         console.log(names[i]);
//     }
// }
// let x=["Lena", "James", "Julio", "Jenette"]
// printArray(x);
// console.log("---");
// printArray(["orange", "apple", "pear"]);


// let names = ["Lena", "James", "Julio"];
// for (let i = 0; i < names.length; i++) {
//     console.log(names[i]);
// }
let x=["Lena", "James", "Julio", "Jenette"]
let names = ["Lena", "James", "Julio"];
console.log(names.length)
function printNames(names) {
    for (let i = 0; i < names.length; i++) {
        console.log(names[i]);
    }
}

printNames(x);
console.log("----------")
printNames(names);

