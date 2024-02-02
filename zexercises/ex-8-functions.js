function printMessage() {
    console.log("The future is now!");
}
setTimeout(printMessage, 2000);



let nums = [3.14, 42, 4811];

let timesTwo = function (n) {
    return n*2;
};
let doubled = nums.map(timesTwo);
console.log(nums);
console.log(doubled);


let doubled2= nums.map(function (n) {
    return n*2;
});
console.log(doubled2);

let doubled3=nums.map((n)=>{
    return n*2;
});
console.log(nums);
console.log(doubled3);


let halved = nums.map(function(m){
    return m/2;
});
console.log(halved)


let names = ["Chris", "Jim", "Sally", "Blake", "Paul", "John", "Courtney", "Carly"];

let namesFirst=[];
for (let i=0; i<names.length; i++){
   namesFirst.push(names[i].slice(0,1)); 
}
console.log(namesFirst);


// TODO: Write a mapping function
// and pass it to .map()
let first=[];
let firstInitials = names.map(function (f){
    for(let i=0;i<names.length;i++){
        first.push(names[i].slice(0,1));
    }return f;
});
console.log(first)
    
//console.log(firstInitials);

