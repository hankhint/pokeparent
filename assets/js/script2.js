var PokeDataEl = localStorage.getItem("pokemon");
console.log(PokeDataEl)
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
  getPokeApi();