const input = require('readline-sync');

function hello(name) {
    console.log('Hello,', name);
    name = 'Ruth';
    return doubleName(name);
}

function doubleName(name){
    console.log(name+name);
    return name+name;
}

let name = input.question("Please enter your name: ");

hello(name);
doubleName(name);
console.log(name);


let a=9;

function myFunction(){
    let a=11; // bunu kullandigimiz icin bu local varable oln a oldugundan a lar farkli
    //a=11; // bunu kullansaydik yukaridaki global varaible olan ayi almis olurduk alar ayni
    console.log("inside a: ",a);
    return a;
}

myFunction();
console.log("outside a: ",a);
