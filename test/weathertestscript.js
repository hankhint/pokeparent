var apiKey = "&appid=0cab3455fdc5081541be5d657005bb3b";

$("#phoenix").on("click", function () {
  console.log("Phoenix");
  callCity("Phoenix");
});

$("#honolulu").on("click", function () {
  console.log("Honolulu");
  callCity("Honolulu");
});

$("#tampa").on("click", function () {
  console.log("Tampa");
  callCity("Tampa");
});

// Get City Weather Info
var callCity = function (city) {
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

var displayWeather = function (city, data) {
  var iconcode = data.weather[0].icon;
  var iconURL = "http://openweathermap.org/img/w/" + iconcode + ".png";
  $("#pokeCity").text(city);
  $("#weatherIcon").attr("src", iconURL);
};
