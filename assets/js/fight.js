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
  
    var PokePicGifEl = document.querySelector("#PokePicGif");
    if(PokePicGifEl.className == 'enemypokemon'){
      PokePicGifEl.src = "https://projectpokemon.org/images/normal-sprite/" + data.name + ".gif";
      PokePicGifEl.alt = data.name;
      PokePicGifEl.id = '';
    }
    if(PokePicGifEl.className == 'playerpokemon'){
      PokePicGifEl.src = "https://projectpokemon.org/images/sprites-models/normal-back/" + data.name + ".gif";
      PokePicGifEl.alt = data.name;
      PokePicGifEl.id = '';
    }
  }
  
  getPokeApi();