var PokeDataEl = localStorage.getItem("pokemon");
console.log(PokeDataEl);
var getPokeApi = function () {
  //for (i = 0; i < PokeDataEl.length; i++) {

  var apiUrl = "https://pokeapi.co/api/v2/pokemon/" + PokeDataEl;
  console.log(apiUrl);
  fetch(apiUrl).then(function (response) {
    response.json().then(function (data) {
      PokeCommands(data);
    });
  });
  //}

  function PokeCommands(data) {
    var PokePicEl = document.querySelector("#PokePic");
    PokePicEl.src = PokeDataEl.sprites.front_default;
    PokePicEl.id = " ";
  }
};

var displayWeather = function (city, data) {
  var iconCode = data.weather[0].icon;
  var iconURL = "http://openweathermap.org/img/w/" + iconCode + ".png";
  var cityName = document.getElementById("cityName");
  var cityTemp = document.getElementById("cityTemp");
  document.getElementById("weatherIcon").setAttribute("src", iconURL);
  cityName.textContent = data.name;
  cityTemp.textContent = Math.round(data.main.temp) + " °F";
};

// Get City Weather Info
var callCity = function (city) {
  var apiKey = "&appid=0cab3455fdc5081541be5d657005bb3b";
  var callCityURL =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    apiKey +
    "&units=imperial";
  fetch(callCityURL)
    .then(function (response) {
      if (response.ok) {
        response.json().then(function (data) {
          console.log(data);
          displayWeather(city, data);
        });
      } else {
        alert("Error:" + response.statusText);
      }
    })
    .catch(function (error) {
      alert("Unable to connect");
    });
};

var getWeatherApi = function () {
  if (PokeDataEl === "squirtle") {
    callCity("Honolulu");
  } else if (PokeDataEl === "bulbasaur") {
    callCity("Tampa");
  } else if (PokeDataEl === "charmander") {
    callCity("Phoenix");
  }
};

getWeatherApi();

getPokeApi();
