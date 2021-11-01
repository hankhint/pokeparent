//FUNctions
function probability(n){
    return Math.random() < n;
  }
  //To get a Pokemons data ---> <div class="PokeData" id="bulbasaur"> <CODE BLOCK> </div>
  var getPokeApi = function() {
    var PokeDataEl = document.querySelector(".PokeEnemy");
        var apiUrl = "https://pokeapi.co/api/v2/pokemon/" + PokeDataEl.id;
        fetch(apiUrl).then(function(response) {
          response.json().then(function(data) {
            enemypokemon(data);
          });
        });
  };
  
  
  function enemypokemon(data){
    /*
    if(PokePicGifEl.className == 'playerpokemon'){
        PokePicGifEl.src = "https://projectpokemon.org/images/sprites-models/normal-back/" + data.name + ".gif";
        PokePicGifEl.alt = data.name;
        PokePicGifEl.id = '';
      }
      */
    var img = "https://projectpokemon.org/images/normal-sprite/" + data.name + ".gif";
    var name = data.name; 
    var PokeStats = data.stats;
    var level = 20;
    var hp = Math.floor(0.01 * (2 * PokeStats[0].base_stat ) * level) + level + 10;
    var atk = Math.floor(0.01 * (2 * PokeStats[1].base_stat) * level) + 5;
    var def = Math.floor(0.01 * (2 * PokeStats[2].base_stat) * level) + 5;
    var spAtk = Math.floor(0.01 * (2 * PokeStats[3].base_stat) * level) + 5;
    var spDef = Math.floor(0.01 * (2 * PokeStats[4].base_stat) * level) + 5;
    var speed = Math.floor(0.01 * (2 * PokeStats[5].base_stat) * level) + 5;
    var enemystats = [level,hp,atk,def,spAtk,spDef,speed];

      enemyFill(name, img, enemystats);
  }
  
  function enemyFill(name, img, stats){
      console.log(name);
      console.log(img);
      console.log(stats);

      var enemygifEl = document.querySelector("#enemygif");
      enemygifEl.src = img;

      var enemynameEl = document.querySelector("#enemyname");
      enemynameEl.textContent = name.toUpperCase();

      var enemyLvEl = document.querySelector("#enemylv");
      enemyLvEl.textContent = "Lv"+stats[0];
  }
  getPokeApi();