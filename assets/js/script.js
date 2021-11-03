// // Get the modal
// var modal = document.getElementById("myModal");

// // Get the button that opens the modal
// var btn = document.getElementById("myBtn");

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks on the button, open the modal
// btn.onclick = function () {
//   modal.style.display = "block";
// };

// // When the user clicks on <span> (x), close the modal
// span.onclick = function () {
//   modal.style.display = "none";
// };

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function (event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// };

//materialize modal
// document.addEventListener('DOMContentLoaded', function() {
//   var elems = document.querySelectorAll('.modal');
//   var instances = M.Modal.init(elems, options);
// });


//To get a Pokemons data ---> <div class="PokeData" id="bulbasaur"> <CODE BLOCK> </div>
var getPokeApi = function () {
  var PokeDataEl = document.querySelectorAll(".PokeData");
  console.log(PokeDataEl);

  for (i = 0; i < PokeDataEl.length; i++) {
    console.log(PokeDataEl[i].id);
    var apiUrl = "https://pokeapi.co/api/v2/pokemon/" + PokeDataEl[i].id;
    console.log(apiUrl);
    fetch(apiUrl).then(function (response) {
      response.json().then(function (data) {
        PokeCommands(data);
      });
    });
  }
};

function PokeCommands(data) {
  //<p id ="PokeName">POKEMON NAME</p>
  var PokeNameEl = document.querySelector("#PokeName");
  PokeNameEl.textContent = data.name;
  PokeNameEl.id = "";

  //<img id ="PokePic" src='leave empty' ></p>
  var PokePicEl = document.querySelector("#PokePic");
  PokePicEl.src = data.sprites.front_default;
  PokePicEl.alt = data.name;
  PokePicEl.id = "";
}

getPokeApi();

// WEATER API ---------------------------------------

//api.openweathermap.org/data/2.5/forecast?id=524901&appid={API key}

// var getCityWeather = function (city) {
//     var apiUrl = 'https://api.openweathermap.org/data/2.5/weather?id=2172797&appid=67134688628a630443996290ce30ced4'
//     fetch(apiUrl)
//     .then(function (response) {
//         if (response.ok) {
//             console.log(response);
//             response.json().then(function (data) {
//                 console.log(data);
//             });
//         }
//     });
//  };

//  getCityWeather();
