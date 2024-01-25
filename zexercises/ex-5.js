function removeHyphens(str) {
    let strWithoutHyphens = ''

    for (let i = 0; i < str.length; i++) {
    if (str[i] !== '-') {
        strWithoutHyphens += str[i];
    }
    }

    return strWithoutHyphens;
}

let launchCodePhone = "314-254-0107";
console.log(removeHyphens(launchCodePhone)); //3142540107
//console.log(strWithoutHyphens); 
//strWithoutHyphens is not defined
//In particular, a variable defined using let within a function is not visible outside of that function.

let message = "Hello, World!";

function printMessage() {
    console.log(message);
}

printMessage(); // Hello, World!
console.log(message); // undefiend
message="Goodbye";
printMessage(); // Goodbye

//let message = "Hello, World!";

function printMessage(message) {
    console.log(message);
}

printMessage("Goodbye");

let num = 42;

function isEven (num) { 
    return num % 2 === 0; 
}

console.log(isEven(num)); //true
console.log(isEven(42)); //true
console.log(isEven(43)); // false