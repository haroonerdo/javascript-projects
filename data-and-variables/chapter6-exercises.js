console.log("-----------------1");
let launchReady = false;
let fuelLevel = 17000;

if (fuelLevel >= 20000) {
   console.log('Fuel level cleared.');
   launchReady = true;
} else {
   console.log('WARNING: Insufficient fuel!');
   launchReady = false;
}

console.log("-----------------2");
 launchReady = false;
let crewStatus = true;
let computerStatus = 'green';

if (crewStatus && computerStatus === 'green') {
    console.log('Crew & computer cleared.');
    launchReady = true;
 } else {
    console.log('WARNING: Crew or computer not ready!');
    launchReady = false;
 }
 
 if (launchReady) {
    console.log("10, 9, 8, 7, 6, 5, 4, 3, 2, 1...");
    console.log("Fed parrot...");
    console.log("Ignition...");
    console.log("Liftoff!");
 } else {
    console.log("Launch scrubbed.");
 }

console.log("-----------------3");
 launchReady = false;
 fuelLevel = 17000;

 if (fuelLevel >= 20000) {
    console.log('Fuel level cleared.');
    launchReady = true;
 } else {
    console.log('WARNING: Insufficient fuel!');
    launchReady = false;
 }

console.log("-----------------4");
 launchReady = false;
 fuelLevel = 27000;

if (fuelLevel >= 20000) {
   console.log('Fuel level cleared.');
   launchReady = true;
} else {
   console.log('WARNING: Insufficient fuel!');
   launchReady = false;
}

if (launchReady) {
   console.log("10, 9, 8...");
   console.log("Fed parrot...");
   console.log("6, 5, 4...");
   console.log("Ignition...");
   console.log("3, 2, 1...");
   console.log("Liftoff!");
} else {
   console.log("Launch scrubbed.");
}

console.log("-----------------5/1");
 launchReady = false;
 fuelLevel = 17000;
 crewStatus = true;
 computerStatus = 'green';

 if (fuelLevel >= 20000) {
    console.log('Fuel level cleared.');
    launchReady = true;
 } else {
    console.log('WARNING: Insufficient fuel!');
    launchReady = false;
 }
 
 if (crewStatus && computerStatus === 'green'){
    console.log('Crew & computer cleared.');
    //launchReady = true;
 } else {
    console.log('WARNING: Crew or computer not ready!');
    launchReady = false;
 }
 
 if (launchReady) {
    console.log('10, 9, 8, 7, 6, 5, 4, 3, 2, 1...');
    console.log('Liftoff!');
 } else {
    console.log('Launch scrubbed.');
 }

console.log("-----------------5/2");
 launchReady = false;
 fuelLevel = 17000;
// let crewStatus = true;
// let computerStatus = 'green';

if (fuelLevel >= 20000) {
   console.log('Fuel level cleared.');
   launchReady = true;
} else {
   console.log('WARNING: Insufficient fuel!');
   launchReady = false;
}
console.log(launchReady);

console.log("-----------------5/3");
 launchReady = false;
// let fuelLevel = 17000;
 crewStatus = true;
 computerStatus = 'green';

if (crewStatus && computerStatus === 'green'){
   console.log('Crew & computer cleared.');
   launchReady = true;
} else {
   console.log('WARNING: Crew or computer not ready!');
   launchReady = false;
}
console.log(launchReady);

console.log("-----------------5/4");
 launchReady = false;
 fuelLevel = 17000;
 crewStatus = true;
 computerStatus = 'green';

if (fuelLevel >= 20000) {
   console.log('Fuel level cleared.');
   launchReady = true;
} else {
   console.log('WARNING: Insufficient fuel!');
   launchReady = false;
}

console.log("launchReady = ", launchReady);

if (crewStatus && computerStatus === 'green'){
   console.log('Crew & computer cleared.');
   launchReady = true;
} else {
   console.log('WARNING: Crew or computer not ready!');
   launchReady = false;
}

console.log("launchReady = ", launchReady);

console.log("-----------------5/5");
 launchReady = false;
 fuelLevel = 17000;
 crewStatus = true;
 computerStatus = 'green';

if (fuelLevel >= 20000) {
   console.log('Fuel level cleared.');
   launchReady = true;
} else {
   console.log('WARNING: Insufficient fuel!');
   launchReady = false;
}

console.log("launchReady = ", launchReady);


if (launchReady===false){
    console.log("launchReady = ", launchReady);
}
else if (crewStatus && computerStatus === 'green'){
   console.log('Crew & computer cleared.');
   launchReady = true;
} else {
   console.log('WARNING: Crew or computer not ready!');
   launchReady = false;
}

console.log("launchReady = ", launchReady);

console.log("-----------------5/5 again");
 //launchReady = false;
 fuelLevel = 17000;
 crewStatus = true;
 computerStatus = 'green';
 let launchReady1=false;
 let launchReady2=false;
if (fuelLevel >= 20000) {
   console.log('Fuel level cleared.');
   launchReady1 = true;
} else {
   console.log('WARNING: Insufficient fuel!');
   launchReady1 = false;
}

console.log("launchReady = ", launchReady1);


if (crewStatus && computerStatus === 'green'){
   console.log('Crew & computer cleared.');
   launchReady2 = true;
} else {
   console.log('WARNING: Crew or computer not ready!');
   launchReady2 = false;
}

console.log("launchReady = ", launchReady2);

if(launchReady1===true && launchReady2==true){
    console.log("Launch Ready")
}else{
    console.log("Launch Not Ready")
}