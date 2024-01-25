function sumToN(n){
    let sum=0;
    for (let i=0; i<=n; i++){
        sum+=i
    }
    return sum;
}
console.log(sumToN(10));


function pastThePointOfReturn() {
    return "I'm done!";
    console.log("This will not be printed");
}

console.log(pastThePointOfReturn());

function countToN() {
    let count = 1;
    while (true) {
        if (count > n) {
            return;
        }
        console.log(count);
        count++;
    }
}
//don't understand

/*
function isEven(n) {
    if (n % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(isEven(4));
console.log(isEven(7));

function isEven(n) {
    if (n % 2 === 0) {
        return true;
    } 
        return false;
    
}

console.log(isEven(6));
console.log(isEven(9));
*/

function isEven(n) {
    return n % 2 === 0;
}

console.log(isEven("4"));
console.log(isEven(4));

function hello(name) {
    return `Hello, ${name}!`;
}

console.log(hello("Lamar"));

function hello(name = "World") {
    return `Hello, ${name}!`;
}

console.log(hello());
console.log(hello("Lamar"));
console.log(hello());

// returns "Launch"
console.log("LaunchCode".slice(0, 6));

// returns "Code"
console.log("LaunchCode".slice(6));

// also returns "Code"
console.log("LaunchCode".slice(6, 10));



function hello(name = "World") {
    return `Hello, ${name}!`;
}

console.log(hello("Jim", "McKelvey"));//Hello, Jim


