// Write your JavaScript code here!

window.addEventListener("load", function () {
  let listedPlanets;
  // Set listedPlanetsResponse equal to the value returned by calling myFetch()
  let listedPlanetsResponse = myFetch();
  listedPlanetsResponse
    .then(function (result) {
      listedPlanets = result;
      console.log(listedPlanets);
    })
    .then(function () {
      console.log(listedPlanets);
      // Below this comment call the appropriate helper functions to pick a planet
      //from the list of planets and add that information to your destination.
      let randomPlanet = pickPlanet(listedPlanets);
      console.log("logging random planet in script.js", randomPlanet);
      addDestinationInfo(randomPlanet);
      // First, do as the comments in the code tell you and set listedPlanetsResponse
      // equal to the value returned when calling myFetch(). This value is going to be a promise.
      //  If we head to our browser and open up our developer tools, we can now see a list of the planets.
      //  Then using pickPlanet() and addDestinationInfo(), select a planet at random from listedPlanets
      //  and pass that information to addDestinationInfo(). Reload your page and check out your site to see
      //  the mission target information.
    });
  const form = document.querySelector("form");
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    let pilotNameInput = document.querySelector("input[name=pilotName]");
    let pilot = pilotNameInput.value;
    let copilotNameInput = document.querySelector("input[name=copilotName]");
    let copilot = copilotNameInput.value;
    let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
    let fuelLevel = Number(fuelLevelInput.value);
    let cargoMassInput = document.querySelector("input[name=cargoMass]");
    let cargoLevel = Number(cargoMassInput.value);
    const list = document.getElementById("faultyItems");
    formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
  });
});
