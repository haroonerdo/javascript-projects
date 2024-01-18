let cargoHold = [1138, 'space suits', 'parrot', 'instruction manual', 'meal packs', 'space tether', '20 meters'];

//Use splice to make the following changes to the cargoHold array. 
//Be sure to print the array after each step to confirm your updates.

//1) Insert the string 'keys' at index 3 without replacing any other entries.
console.log(cargoHold.length)  

let i=7;
for(i;i>3;i--){
    cargoHold[i]=cargoHold[i-1]
    console.log(cargoHold)
}
    // cargoHold[7]=cargoHold[6]
    // cargoHold[6]=cargoHold[5]
    // cargoHold[5]=cargoHold[4]
    // cargoHold[4]=cargoHold[3]
    cargoHold[3]='keys';
console.log(cargoHold)

//2) Remove ‘instruction manual’ from the array. 
//(Hint: indexOf is helpful to avoid manually counting an index).

/*
console.log(cargoHold.length) 
let k=0;
let l=cargoHold.length;
let newArrCargo=[];
for(k;k<l;k++){
    if(cargoHold[k]!="instruction manual")
    newArrCargo[k]=cargoHold[k]
    if(cargoHold[k]=="instruction manual")
    break
}
console.log(newArrCargo)
console.log(newArrCargo.length)
console.log(k)
cargoHold.splice(4,1)
console.log(`'instruction manual' elemt was removed in the array. \nNew array elements are: ${cargoHold}`)
console.log(cargoHold);
*/

let index=cargoHold.indexOf("instruction manual");
cargoHold.splice(index,1);
console.log(`'instruction manual' elemt was removed in the array. \nNew array elements are: ${cargoHold}`)
console.log(cargoHold);


//3) Replace the elements 
//at indexes 2 - 4 with the items ‘cat’, ‘fob’, and ‘string cheese’.

cargoHold[2]='cat';
console.log(cargoHold)
cargoHold[3]='fob';
console.log(cargoHold)
cargoHold[4]='string cheese';
console.log(cargoHold)