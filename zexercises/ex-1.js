let protein = ['chicken', 'pork', 'tofu', 'beef', 'fish', 'beans'];
let grains = ['rice', 'pasta', 'corn', 'potato', 'quinoa', 'crackers'];
let veggies = ['peas', 'green beans', 'kale', 'edamame', 'broccoli', 'asparagus'];
let beverages = ['juice', 'milk', 'water', 'soy milk', 'soda', 'tea'];
let desserts = ['apple', 'banana', 'more kale', 'ice cream', 'chocolate', 'kiwi'];


//function mealAssembly(protein, grains, veggies, beverages, desserts, numMeals) {
  let pantry = [protein, grains, veggies, beverages, desserts, 6];
  let meals = [];

  console.log(pantry[0])
  
  /// Part A #2: Write a ``for`` loop inside this function
  /// Code your solution for part A #2 below this comment (and above the return statement) ... ///
for (let i=0; i<6; i++){
    for (let j=0; j<pantry.length; j++){
        meals[i]=((protein[i]), (grains[i]), (veggies[i]), (beverages[i]), (desserts[i]))
        console.log(pantry[j][i])
      }console.log(meals[i])
  }
console.log(meals)
  //return meals;
//}