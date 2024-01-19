// let name1="LaunchCode";
// for (let i=0; i<name1.length;i++){
//     console.log(name1[i])

//}

// for (let i = 0; i < 6; i++) {
//     console.log(i);
//  }

//  let i = 0;
// while (i <6) {
//    console.log(i);
//    i++;
// }

// for (i=12;i>=(-11); i=i-2 ){
//     console.log(i)
// }

let strWorld="Hello World";
let result=strWorld.split('').reverse().join('').toUpperCase();
console.log(result)

let part1=strWorld.split('');
console.log(`part1 : ${part1} and is of types ${typeof part1} 
and is it an array? ${Array.isArray(part1)}
and what type arethe elements? ${typeof part1[0]}  `)
