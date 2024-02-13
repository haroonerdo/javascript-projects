let a=0;
console.log(a); // print value of a

function coolFunction(){
    let b=2;
    console.log(`a=${a}, b=${b}.`); // print the values of a and b
    return a+b;
}

a+=1;
console.log(a); // print value of a
coolFunction(); // call the function for line 6
//console.log(b); // undefind

/*
>>>>console 
0                          ex-Scope.js:2
1                          ex-Scope.js:11
a=1, b=2.                  ex-Scope.js:6
Process exited with code 1
Uncaught ReferenceError ReferenceError: b is not defined
*/

/*Block/Local Scope*/
function myFunction(){
    let i=10;
    return 10 +i
}
//console.log(i); //ReferenceError: i is not defined
console.log(myFunction());

// Code here CAN use newVariable.
newVaraible=11;
console.log("it is newVaraible. newVaraible is  Global Scope. "+newVaraible);
function coolFunction1(){
    newVaraible=5; // newVaraible is a GLOBAL SCOPE
    return newVaraible;
}
// Code here CAN use newVariable.
newVaraible=33;
console.log("it is newVaraible. newVaraible is  Global Scope. "+newVaraible);
console.log(coolFunction1()); //Only return from in the function
//coolFunction1(); //--> eger bunu kullansaydik function icine console.log yazmaliydik
newVaraible=44;
console.log("it is newVaraible. newVaraible is  Global Scope. "+newVaraible);
