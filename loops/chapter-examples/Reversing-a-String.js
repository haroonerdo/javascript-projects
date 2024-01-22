let str = "blue";
let reversed = "";

for (let i = 0; i < str.length; i++) {
    reversed = str[i] + reversed;
}

console.log(reversed);

let reversed1 = "";
for (let i = str.length-1; i>=0; i--) {
    reversed1 += str[i];
}
console.log(reversed1);