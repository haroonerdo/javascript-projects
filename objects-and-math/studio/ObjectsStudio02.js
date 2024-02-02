// Code your orbitCircumference function here:
function calcOrbitCircumference(radius){
let orbitCircumference = Math.round(2*Math.PI*radius)
return orbitCircumference
}
console.log(calcOrbitCircumference(2000))

// Code your missionDuration function here:
function missionDuration(numOrbits, orbitRadius=2000, orbitalSpeed=28000){
  let duration=Math.round((((calcOrbitCircumference(orbitRadius)*numOrbits)/orbitalSpeed)*100)/100);
  return duration;
}
console.log(`The mission will travel ${calcOrbitCircumference(2000)} km around the planet, and it will take ${missionDuration(5)} hours to complete.`)

console.log(missionDuration(5));
//(`The mission will travel ____ km around the planet, and it will take ____ hours to complete.`)

// Copy/paste your selectRandomEntry function here:

function selectRandomEntry(arr){
  let index = Math.floor(Math.random()*arr.length);
  return arr[index];
}

let idNumbers = [291, 414, 503, 599, 796, 890];

let selectedCandidates=[];
for (i=0; i < 3; i++){

  let selection=selectRandomEntry(idNumbers);
  while(selectedCandidates.includes(selection)){
    selection=selectRandomEntry(idNumbers);
  }
  selectedCandidates.push(selection);
}
console.log(selectedCandidates.sort());


// Code your oxygenExpended function here:
function oxygenExpended(candidate, radius = 2000, orbitalSpeed = 28000){
  let duration = missionDuration(3);
  let oxygenUsed = Math.round(candidate.o2Used(duration) * 1000) / 1000;
  return `${candidate.name} will perform the spacewalk, which will last ${duration} hours and require ${oxygenUsed} kg of oxygen.`;
}

// Candidate data & crew array.
let candidateA = {
   'name':'Gordon Shumway',
   'species':'alf',
   'mass':90,
   'o2Used':function(hrs){return 0.035*hrs},
   'astronautID':414
 };
 let candidateB = {
   'name':'Lassie',
   'species':'dog',
   'mass':19.1,
   'o2Used':function(hrs){return 0.030*hrs},
   'astronautID':503
 };
 let candidateC = {
   'name':'Jonsey',
   'species':'cat',
   'mass':3.6,
   'o2Used':function(hrs){return 0.022*hrs},
   'astronautID':796
 };
 let candidateD = {
   'name':'Paddington',
   'species':'bear',
   'mass':31.8,
   'o2Used':function(hrs){return 0.047*hrs},
   'astronautID':291
 };
 let candidateE = {
   'name':'Pete',
   'species':'tortoise',
   'mass':417,
   'o2Used':function(hrs){return 0.010*hrs},
   'astronautID':599
 };
 let candidateF = {
   'name':'Hugs',
   'species':'ball python',
   'mass':2.3,
   'o2Used':function(hrs){return 0.018*hrs},
   'astronautID':890
 };
 
 let crew = [candidateA,candidateC,candidateE];

 console.log(oxygenExpended(candidateA, 2500, 30000));

//console.log (`${candidate.name} will perform the spacewalk, which will last ${duration} hours and require ${oxygenUsed} kg of oxygen.`);
 