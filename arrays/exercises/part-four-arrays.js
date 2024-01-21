let holdCabinet1 = ['duct tape', 'gum', 3.14, false, 6.022e23];
let holdCabinet2 = ['orange drink', 'nerf toys', 'camera', 42, 'parsnip'];

//Explore the methods concat, slice, reverse, and sort to determine which ones alter the original array.

//1) Print the result of using concat on the two arrays. Does concat alter the original arrays? Verify this by printing holdCabinet1 after using the method.
console.log(holdCabinet1)
console.log(holdCabinet2)
let newHoldCabinet1;
let newHoldCabinet2;
newHoldCabinet1=holdCabinet1.concat(holdCabinet2)
newHoldCabinet2=holdCabinet2.concat(holdCabinet1)
console.log(holdCabinet1)
console.log(newHoldCabinet1)
console.log('holdCabinet1 is different newHoldCabinet1')
console.log(holdCabinet2)
console.log(newHoldCabinet2)
console.log('holdCabinet2 is different newHoldCabinet2')
console.log("Method concat changed the orginal array.")
//2) Print a slice of two elements from each array. Does slice alter the original arrays?
let newArr1=holdCabinet1.slice(1,3);
console.log(newArr1);
console.log(holdCabinet1)
let newArr2=holdCabinet2.slice(2,4);
console.log(newArr2);
console.log(holdCabinet2)
console.log("Method slice make  a new array, but the orginal array doesn't cahange.")
//3) reverse the first array, and sort the second. What is the difference between these two methods? Do the methods alter the original arrays?
let newArr11=[];
let newArr22=[];

newArr11=holdCabinet1.reverse();
console.log(newArr11);
if (newArr11===holdCabinet1){
    console.log("Reverse does change the element order in the array. ")
}else{
    console.log("Reverse doesn't change the element order in the array.")
}

newArr22=holdCabinet2.reverse();
console.log(newArr22);
if (newArr22===holdCabinet2){
    console.log("Reverse does change the element order in the array. ")
}else{
    console.log("Reverse doesn't change the element order in the array.")
}