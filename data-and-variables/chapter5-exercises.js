/*
Januvary 11 
Exercises: Boolean And Conditionals
*/
console.log("--------------1");
let engineIndicatorLight='red blinking';
let spaceSuitsOn=true;
let shuttleCabinReady=true;
//let crewStatus='spaceSuitsOn && shuttleCabinReady'; //my mistake
let crewStatus= spaceSuitsOn && shuttleCabinReady;
let computerStatusCode=200;
let shuttleSpeed=15000;
console.log("--------------2");
if (engineIndicatorLight==='green'){
    console.log('engines have started');
}else if (engineIndicatorLight==='red bliking'){
    console.log('engines are preparing to start');
}else{
    console.log('engines are off');
}
console.log("--------------3");
//if (spaceSuitsOn===true && shuttleCabinReady===true){//my code
if (crewStatus){
    console.log('Crew Ready');
} else{
    console.log('Crew Not Ready');
}

if (computerStatusCode===200){
    console.log('Please, stand by. Computer is rebooting');
}else if (computerStatusCode===400){
    console.log('Success! Computer online.');
}else{
    console.log('ALERT! Computer offline.');
}

if (shuttleSpeed>17500){
    console.log('ALERT: Escappe velocity reached!');
}else if (shuttleSpeed<8000){
    console.log('ALERT! Cannot maintain orbit.');
}else{
    console.log('Stable speed');
}

console.log("--------------4");
if (crewStatus && computerStatusCode === 200 && spaceSuitsOn) {
    console.log("all systems go");
 } else {
    console.log("WARNING. Not ready");
 }

 if (!crewStatus || computerStatusCode !== 200 || !spaceSuitsOn) {
    console.log("WARNING. Not ready");
 } else {
    console.log("all systems go");
 }
//these code blocks returned same result
 console.log("--------------5");
let fuelLevel=20000;
let engineTemperature=2500;
 if(fuelLevel>=20000 && engineTemperature<=2500){
    console.log("Full tank. Engines is good.")
 }else if(10000<fuelLevel<20000 && engineTemperature<=2500){
    console.log("Fuel level above 50%. Engines is good.")
 }else if(5000<fuelLevel<=10000 && engineTemperature<=2500){
    console.log("Fuel level above 25%. Engines is good.")
 }else if(fuelLevel<=5000 || engineTemperature<=2500){
    console.log("Check fuel level. Engines is good.")
 }else if(fuelLevel<=1000 || engineTemperature<=2500){
    console.log("Check fuel level. Engines running hot.")
 }else if(fuelLevel<=1000 || 2500<engineTemperature<3500 || engineIndicatorLight){
    console.log("ENGINE FAILURE IMMENENT")
 }else{
    console.log("Fuel and engine status pending...")
 }

 if(fuelLevel!==0 && engineTemperature!==0 && engineIndicatorLight){
    console.log("ENGINE FAILURE IMMENENT!")
 }else if(fuelLevel>=20000 && 1200<engineTemperature<=2500 && !engineIndicatorLight){
    console.log("Full tank. Engines is good.")
 }else if(fuelLevel<1000 && engineTemperature!==0 && engineIndicatorLight || !engineIndicatorLight){
    console.log("ENGINE FAILURE IMMENENT!")
 }else if(1000<=fuelLevel<=5000 && 1200<engineTemperature<=2500 && !engineIndicatorLight){
    console.log("Check fuel level. Engines running hot.")
 }else if(5000<fuelLevel<=12000 && engineTemperature>2500 && !engineIndicatorLight){
    console.log("Check fuel level. Engines running hot.")
 }else if(12000<fuelLevel<=18000 && engineTemperature<=2500 && !engineIndicatorLight){
    console.log("Check fuel level. Engines running hot.")
 }else{
    console.log("Fuel and engine status pending...")
 }

console.log("--------------6");
let commandOverride=false;
if(commandOverride||fuelLevel>=20000 && engineTemperature<=2500){
        console.log("Full tank. Engines is good.Shuttle is ready for launch")
}else if(!commandOverride){
    console.log("Shuttle is ready for launch")
}else if (fuelLevel>=20000 && !engineIndicatorLight || !commandOverride){
    console.log("Cleared to launch")
}else{
    console.log("launch Scrubbed")
}
