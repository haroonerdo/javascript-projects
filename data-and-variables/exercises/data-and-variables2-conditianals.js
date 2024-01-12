// Initialize Variables below
let date=("Monday 2019-03-18")
let time= "10:05:34 AM";
let astronautCount=7;
let astronautStatus="ready";
let averageAstronautMassKg=80.7;
let crewMassKg=astronautCount * averageAstronautMassKg;
let fuelMassKg=760000;
let shuttleMassKg=74842.31
let totalMassKg=crewMassKg+fuelMassKg+shuttleMassKg;
let maximumMassLimit=850000
let fuelTempCelsius=-225
let minimumFuelTemp=-300
let maximumFuelTemp=-150
let fuelLevel=100
let weatherStatus = "clear"
let preparedForLiftOff=true

if((astronautCount<=7) && 
    (astronautStatus=="ready" )&& 
    (totalMassKg<=maximumMassLimit) &&
    (minimumFuelTemp<=fuelTempCelsius) && (fuelTempCelsius<=maximumFuelTemp) && 
    (fuelLevel == 100 )&& 
    (weatherStatus == "clear")){
preparedForLiftOff
console.log("All system are a go! Initiating space shuttle launch sequence.")
console.log("Date ", date)
console.log("Time ",time)
console.log("Astronaut Count ", astronautCount)
console.log("crew Mass ",crewMassKg," kg")
console.log("Fuel Mass ",fuelMassKg," kg")
console.log("Shuttle Mass ",shuttleMassKg," kg")
console.log("Total Mass ",totalMassKg, " kg")
console.log("Fuel temprature ",fuelTempCelsius, "Celcius")
console.log("Weather Status ",weatherStatus)
console.log("Have safe trip astronaut!")

    }else{
        console.log("something is wrong")
    }
    