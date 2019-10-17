function randomRedOrBlack() {
  var randomResult = ((Math.floor(Math.random() * 10)) + 1) % 2 === 0;

  if (randomResult === true) {
    return "red";
  } else {
    return "black";
  }
}

function roulette_wheel_results(number_of_roulette_wheel_spins) {
  var rouletteResults = [];
  for (let i = 0; i < number_of_roulette_wheel_spins; i += 1) {
    var randomResult = randomRedOrBlack();
    rouletteResults.push(randomRedOrBlack());
  }

  return rouletteResults
}

function mostCommonRepititiveResult(rouletteWheelSpins) {
  var consecutiveCount = 0;
  var maximumConsecutiveCount = 0;
  var mostCommonColor = "";

  for (let i = 0; i < rouletteWheelSpins.length; i += 1) {
    var resultOfRouletteSpin = rouletteWheelSpins[i];
    var pastResultOfRouletteSpin;

    if (i > 0) {
      pastResultOfRouletteSpin = rouletteWheelSpins[i - 1];
    } else {
      pastResultOfRouletteSpin = resultOfRouletteSpin;
    }

    if (pastResultOfRouletteSpin == "black" && resultOfRouletteSpin == "black") {
      consecutiveCount += 1;
    } else if (pastResultOfRouletteSpin == "red" && resultOfRouletteSpin == "red") {
      consecutiveCount += 1;
    } else if (pastResultOfRouletteSpin == "black" && resultOfRouletteSpin == "red") {
      consecutiveCount = 1;
    } else if (pastResultOfRouletteSpin == "red" && resultOfRouletteSpin == "black") {
      consecutiveCount = 1;
    }

    if (consecutiveCount > maximumConsecutiveCount) {
      mostCommonColor = resultOfRouletteSpin;
      maximumConsecutiveCount = consecutiveCount;
    }
  }

  return [maximumConsecutiveCount, mostCommonColor];
}


function handleAResultsRequest(numberOfSpinsDesired) {
  var resultsArea = document.getElementById("roulette_wheel_results_area");
  var numberOfSpins = numberOfSpinsDesired
  var results = mostCommonRepititiveResult(roulette_wheel_results(numberOfSpins))
  resultsArea.innerHTML = "<p>We spun the wheel " + numberOfSpins + " times.</p><p>The most consecutive result was " + results[1] + " which occured " + results[0] + " times.</p>";
}

function othername() {
  var input = document.getElementById("userInput").value;
  handleAResultsRequest(input)
}

var number_of_roulette_spins_desired = 5;
var rouletteWheelSpins = roulette_wheel_results(number_of_roulette_spins_desired);
