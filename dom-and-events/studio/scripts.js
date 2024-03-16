// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function() {

    //elements
    let altitude = 0;
    let positionX = 0;
    let positionY = 0;
    
    //buttons
    const takeoffButton = document.getElementById('takeoff');
    const landButton = document.getElementById('landing');
    const abortButton = document.getElementById('missionAbort');
    
    //rocket picture
    const rocket = document.getElementById('rocket');

    //rocket status and background
    const flightStatus = document.getElementById('flightStatus');
    const shuttleBackground = document.getElementById('shuttleBackground');
    const spaceShuttleHeight = document.getElementById('spaceShuttleHeight');
  
   //button events
   //takeoff button events
    takeoffButton.addEventListener("click", function() {
      let shouldTakeOff = confirm("Confirm that the shuttle is ready for takeoff.");
      
      if (shouldTakeOff) {
        flightStatus.innerHTML = "Shuttle in flight.";
        shuttleBackground.style.backgroundColor = "blue";
        altitude = 10000;
        spaceShuttleHeight.innerHTML = altitude;
        positionY += 10;
        rocket.style.marginBottom = positionY + 'px';
      }
    });
  
    //land button events
    landButton.addEventListener("click", function () {
      alert("The shuttle is landing. Landing gear engaged.");
      flightStatus.innerHTML = "The shuttle has landed.";
      firstPositionRocket();
    });
  
    //abort button events
    abortButton.addEventListener("click", function () {
      let shouldAbort = confirm("Confirm that you want to abort the mission.");
      
      if (shouldAbort) {
        flightStatus.innerHTML = "Mission aborted.";
        firstPositionRocket();
      }
    });
  
    // direction buttons 
    document.addEventListener("click", function(event) {
      let backgroundWidth = parseInt(window.getComputedStyle(shuttleBackground).getPropertyValue('width'));
      
      if (event.target.id === "left" && positionX > -(backgroundWidth / 2) + 100) {
        positionX -= 10;
        rocket.style.marginLeft = positionX + 'px';
      }
      if (event.target.id === "right" && positionX < (backgroundWidth / 2) - 100) {
        positionX += 10;
        rocket.style.marginLeft = positionX + 'px';
      }
      if (event.target.id === "up" && altitude < 250000) {
        positionY += 10;
        rocket.style.marginBottom = positionY + 'px';
        altitude += 10000;
        spaceShuttleHeight.innerHTML = altitude;
      }
      if (event.target.id === "down" && altitude > 0) {
        positionY -= 10;
        rocket.style.marginBottom = positionY + 'px';
        altitude -= 10000;
        spaceShuttleHeight.innerHTML = altitude;
      }
  
    });
  
    //return the rocket
    function firstPositionRocket() {
      shuttleBackground.style.backgroundColor = "green";
      altitude = 0;
      spaceShuttleHeight.innerHTML = altitude;
      positionX = 0;
      positionY = 0;
      rocket.style.marginLeft = positionX + 'px';
      rocket.style.marginBottom = positionY + 'px';
    }
  
  });