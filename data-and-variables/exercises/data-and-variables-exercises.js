// Declare and assign the variables below

// Use console.log to print the 'typeof' each variable. Print one item per line.

// Calculate a space mission below

// Print the results of the space mission calculations below

// Calculate a trip to the moon below

// Print the results of the trip to the moon below

let nameOfTheSpaceShuttle= 'Galileo';
let shuttleSpeed=17500;
// speed unit --> mph
let distanceOfMars=22500000;
let distanceOfMoon=384400;
// distance unit --> km
let fromKmToMile=0.621;
// convert from km to mile or from mile to km dosen't have unit
let fromMileToKm=1.609;

console.log(typeof nameOfTheSpaceShuttle, 'nameOfTheSpaceShuttle');
console.log(typeof shuttleSpeed, 'shuttleSpeed');
console.log(typeof distanceOfMars, 'distanceOfMars');
console.log(typeof distanceOfMoon, 'distanceOfMoon');
console.log(typeof fromKmToMile, 'fromKmToMile'); 
console.log(typeof fromMileToKm, 'fromMileToKm'); 

console.log('Name Of The Space Shuttle:', nameOfTheSpaceShuttle);
console.log('Shuttle Speed:', shuttleSpeed, 'mph');
console.log('Distance Of Mars:', distanceOfMars, 'mile');
console.log('Distance Of Moon:', distanceOfMoon, 'mile');
console.log('Convert From Km To Mile:', fromKmToMile); 
console.log('Convert From Mile To Km:', fromMileToKm); 
console.log('Distance Of Mars:', distanceOfMars*fromMileToKm, 'km');
console.log('Distance Of Moon:', distanceOfMoon*fromMileToKm, 'km');

let hoursToReachMars=distanceOfMars/shuttleSpeed;
let hoursToReachMoon=distanceOfMoon/shuttleSpeed;
console.log(hoursToReachMars, 'hours to get to Mars');
console.log(hoursToReachMoon, 'hours to get to Moon');

let daysToReachMars=distanceOfMars/shuttleSpeed/24;
let daysToReachMoon=distanceOfMoon/shuttleSpeed/24;
console.log(distanceOfMars/shuttleSpeed/24, 'days to get to Mars');
console.log(distanceOfMoon/shuttleSpeed/24, 'days to get to Moon');

console.log(nameOfTheSpaceShuttle,' will take ',daysToReachMars,' days to reach Mars.');
console.log(nameOfTheSpaceShuttle,' will take ',daysToReachMoon,' days to reach Moon.');