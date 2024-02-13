let a = 0;

function coolFunction() {
    let b = 2;
    return a + b;
}

function coolerFunction() {
    let c = 5;
    c += coolFunction();
    return c;
}

console.log(coolFunction());
console.log(coolerFunction());


function myFunction(n) {
    let a = 100;
    return a + n;
}

let x = 5;

x=myFunction(x);
console.log("hello JS");
console.log(x);
console.log("hello World");
// for (let i=1; i<=7; i=i+2){
// console.log(i+" and "+myFunction(i));
// }
// let i="bee";
// console.log(i);