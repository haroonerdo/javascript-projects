
let giraffe = {
    species: "Reticulated Giraffe",
    name: "Cynthia",
    weight: 1500,
    age: 15,
    diet: "leaves",
    birthday: function () {
        giraffe.age= giraffe.age+1;}
  };
 
//   function birthday(animal) {
//       animal.age = animal.age + 1;
//       return animal;
//   }
 
  console.log(giraffe["age"]);
 
  giraffe.birthday();
 
  console.log(giraffe.age);



//   let tortoiseOne = {
//     age: 150,
//     species: "Galapagos Tortoise",
//     diet: ["pumpkins", "lettuce", "cabbage"]
//  };

//  let tortoiseTwo = {
//     age: 150,
//     species: "Galapagos Tortoise",
//     diet: ["pumpkins", "lettuce", "cabbage"]
//  };

//  if (tortoiseOne == tortoiseTwo){
//     console.log("tortoiseOne == tortoiseTwo true")
//  }else{
//     console.log("tortoiseOne == tortoiseTwo false")
//  };

//  if (tortoiseOne === tortoiseTwo){
//     console.log("tortoiseOne === tortoiseTwo true")
//  }else{
//     console.log("tortoiseOne === tortoiseTwo false")
//  }

//  if (tortoiseOne.age == tortoiseTwo.age){
//     console.log("tortoiseOne.age == tortoiseTwo.age true")
//  }else{
//     console.log("tortoiseOne.age == tortoiseTwo.age false")
//  }


// let num = Math.floor(Math.random()*10);
//     console.log(num);

// let num = Math.round(Math.random()*10);

//    console.log(num);

// let num1 =Math.floor(-3.87);
// console.log(num1);//-4 down

// let num2 =Math.random(-3.87);
// console.log(num2);// random number

// let num3 =Math.round(-3.87);
// console.log(num3);//-4 nearest
   
// let num4 =Math.trunc(-3.87);
// console.log(num4);//-3

// let num5=Math.abs(-7);
// console.log(num5);//7

// let num6=Math.ceil(3.14);
// console.log(num6);//4 up to

// let num7=Math.max(2,4,1,6,9,110);
// console.log(num7);//110

// let num8=Math.min(2,4,1,6,9,110);
// console.log(num8);//1

// let num9=Math.pow(5,3); 
// console.log(num9);//125

// let num10=Math.sqrt(36);
// console.log(num10);//36

// 
// console.log(Math.round(12.3456789)*10000/10000);

// console.log(Math.round(12.3456789*100)/100);

// console.log(Math.round(12.3456789)*100/100);

// console.log(Math.round(12.3456789*10000)/10000);




// function randomSelection(arr){
//     let index = Math.floor(Math.random()*arr.length);
//     return arr[index];
//  }

//  let happiness = ['Hope','Joy','Peace','Love','Kindness','Puppies','Kittens','Tortoise'];

//  for (i=0; i < 8; i++){
//     console.log(randomSelection(happiness));
//  }

const user={
  details:{
    name: "john",
    age:23
  }
};
console.log(user.details.name);
console.log(user.details["name"]);

const car={
  brand: "toyota",
  model: "camry",
  year: 2024,
  color: "silver"
};
for (const key in car) {
  console.log(`${key}: ${car[key]}`)
}

