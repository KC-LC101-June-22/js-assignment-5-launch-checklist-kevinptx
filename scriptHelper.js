// Write your helper functions here!
require("isomorphic-fetch");

/*document,
name,
diameter,
star,
distance,
moons,
imageUrl
*/
function addDestinationInfo(randomPlanet) {
  console.log("logging randomPlanet in scriptHelper.js", randomPlanet);
  //  Then using pickPlanet() and addDestinationInfo(), select a planet at random from listedPlanets
  //  and pass that information to addDestinationInfo(). Reload your page and check out your site to see
  //  the mission target information.
  missionTargetDiv = document.getElementById("missionTarget");
  missionTargetDiv.innerHTML = `
  <h2>Mission Destination</h2>
  <ol>
      <li>Name: ${randomPlanet.name}</li>
      <li>Diameter: ${randomPlanet.diameter}</li>
      <li>Star: ${randomPlanet.star}</li>
      <li>Distance from Earth: ${randomPlanet.distance}</li>
      <li>Number of Moons: ${randomPlanet.moons}</li>
  </ol>
  <img src="${randomPlanet.image}">`;
}

function validateInput(testInput) {
  let numInput = Number(testInput);
  if (numInput === "") {
    return "Empty";
  } else if (isNaN(numInput)) {
    return "Not a Number";
  } else if (isNaN(numInput) === false) {
    return "Is a Number";
  }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
  let validatePilot = validateInput(pilot);
  let validateCopilot = validateInput(copilot);
  let validatetFuelLevel = validateInput(fuelLevel);
  let validateCargoLevel = validateInput(cargoLevel);
  let errorMessages = [
    "All fields are required!",
    "Make sure to enter valid information for each field!",
  ];
  if (
    validatePilot === "Empty" ||
    validateCopilot === "Empty" ||
    validatetFuelLevel === "Empty" ||
    validateCargoLevel === "Empty"
  ) {
    alert(errorMessages[0]);
  }
  if (
    validatePilot === "Is a Number" ||
    validateCopilot === "Is a Number" ||
    validatetFuelLevel === "Not a Number" ||
    validateCargoLevel === "Not a Number"
  ) {
    alert(errorMessages[1]);
  }

  let pilotStatus = document.getElementById("pilotStatus");
  let copilotStatus = document.getElementById("copilotStatus");
  let fuelStatus = document.getElementById("fuelStatus");
  let cargoStatus = document.getElementById("cargoStatus");
  let launchStatus = document.getElementById("launchStatus");

  pilotStatus.innerHTML = `${pilot} Ready`;
  copilotStatus.innerHTML = `${copilot} Ready`;

  if (fuelLevel < 10000 && cargoLevel > 10000) {
    list.style.visibility = "visible";
    fuelStatus.innerHTML = `${fuelLevel} Liters of fuel is not enough for the journey.`;
    cargoStatus.innerHTML = `${cargoLevel} Kg cargo means there is too much mass for takeoff.`;
    launchStatus.innerHTML = "Shuttle not ready for launch.";
    launchStatus.style.color = "red";
  } else if (fuelLevel < 10000 && cargoLevel < 10000) {
    list.style.visibility = "visible";
    fuelStatus.innerHTML = `${fuelLevel} Liters of fuel is not enough for the journey.`;
    cargoStatus.innerHTML = `${cargoLevel} Kg cargo means that part is ready for the journey.`;
    launchStatus.innerHTML = "Shuttle not ready for launch.";
    launchStatus.style.color = "red";
  } else if (cargoLevel > 10000 && fuelLevel > 10000) {
    list.style.visibility = "visible";
    fuelStatus.innerHTML = `${fuelLevel} Liters of fuel means that part is ready for the journey.`;
    cargoStatus.innerHTML = `${cargoLevel} Kg cargo means there is too much mass for takeoff.`;
    launchStatus.innerHTML = "Shuttle not ready for launch";
    launchStatus.style.color = "red";
  } else {
    fuelStatus.innerHTML = `${fuelLevel} high enough for launch`;
    cargoStatus.innerHTML = `${cargoLevel} low enough for launch`;
    launchStatus.innerHTML = "Shuttle is ready for launch";
    launchStatus.style.color = "green";
  }
}

async function myFetch() {
  let planetsReturned;

  planetsReturned = await fetch(
    "https://handlers.education.launchcode.org/static/planets.json"
  ).then(function (response) {
    return response.json();
  });

  return planetsReturned;
}

function pickPlanet(planets) {
  let index = Math.floor(Math.random() * planets.length);
  return planets[index];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
