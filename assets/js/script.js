//FUNctions
function probability(n){
  return Math.random() < n;
}
//To get a Pokemons data ---> <div class="PokeData" id="bulbasaur"> <CODE BLOCK> </div>
var getPokeApi = function() {
  var PokeDataEl = document.querySelectorAll(".PokeData");
  console.log(PokeDataEl);

  for(i=0;i<PokeDataEl.length;i++){
    console.log(PokeDataEl[i].id);
      var apiUrl = "https://pokeapi.co/api/v2/pokemon/" + PokeDataEl[i].id;
      console.log(apiUrl);
      fetch(apiUrl).then(function(response) {
        response.json().then(function(data) {

          PokeCommands(data);
        });
      });
  }
};


function PokeCommands(data){

//<p id ="PokeName">POKEMON NAME</p>
  var PokeNameEl = document.querySelector("#PokeName");
    PokeNameEl.textContent = data.name;
    PokeNameEl.id = '';

  

//<img id ="PokePic" src='leave empty' ></p>
  var PokePicEl = document.querySelector("#PokePic");
    if(probability(0.0001220703125)){
      PokePicEl.src = data.sprites.front_shiny;
      var shiny = true;
    }
    else{
      PokePicEl.src = data.sprites.front_default;
    }
    PokePicEl.alt = data.name;
    PokePicEl.id = '';
}

getPokeApi();


