let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";

//1) Use split to convert the strings into four cabinet arrays. 
//Alphabetize the contents of each cabinet.
let arrFood=[];
arrFood=food.split(",").sort();
console.log(arrFood);

let arrEquipment=[];
arrEquipment=equipment.split(",").sort();
console.log(arrEquipment);

let arrPets=[];
arrPets=pets.split(",").sort();
console.log(arrPets);

let arrSleepAids=[];
arrSleepAids=sleepAids.split(",").sort();
console.log(arrSleepAids);


//2) Initialize a cargoHold array and add the cabinet arrays to it. 
//Print cargoHold to verify its structure.
let arrCargoHold=[arrEquipment,arrFood,arrPets,arrSleepAids];
console.log(arrCargoHold);

//3) Query the user to select a cabinet (0 - 3) in the cargoHold.

const input = require('readline-sync');
let cabinetNo=""; //answer will be change cabinetNo
cabinetNo=input.question("Could you please choose a cabinet number (0-3)in the cargo hold?:\nWhich cabinet do you want to look : ")

//4) Use bracket notation and a template literal to display the contents of 
//the selected cabinet. If the user entered an invalid number, print an error message.
if((cabinetNo>=0)&&(cabinetNo<=3)){
    console.log(`The caabinet's contents has: ${cabinetNo} are: ${arrCargoHold[cabinetNo]} `)
}else{
    console.log("There is no cabinet in the cargo hold")
}

//5) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. 
//Use the 'includes' method to check if the cabinet contains the selected item, 
//then print “Cabinet ____ DOES/DOES NOT contain ____.”
    
    let item=input.question("Which item are you looking for?: ")
    let i=0;
    let j=arrCargoHold.length;

    for (i; i<j;i++){
    if(arrCargoHold[i].includes(item)){
       console.log("cabinet number "+i+" DOES contain "+item+" .") 
       console.log(arrCargoHold[i]) 
    } else {
        console.log("cabinet number "+i+" DOES NOT contain "+item+" .")
    }
    }
//bellow part for check
/*
    let i=0;
    let j=arrCargoHold.length;
    let item="pillows";
    console.log(j)
    for (i; i<j;i++){
    if(arrCargoHold[i].includes(item)){
       console.log("cabinet "+i+" DOES contain "+item+" .")
       console.log(arrCargoHold[i]) 
    }else{
        console.log("cabinet "+i+" DOES NOT contain "+item+" .")
    }
   }
*/