//FUNctions
function probability(n){
    return Math.random() < n;
  }

  function getRandomInt(max) {
    var a = Math.floor(Math.random() * max);
    return a;
  }

  function getMeta(url, callback) {
    var img = new Image();
    img.src = url;
    img.onload = function() { callback(this.width, this.height); }
}

  var getPokeApi = function() {

    var PokeDataEl = document.querySelector(".PokeEnemy");
        var apiUrl = "https://pokeapi.co/api/v2/pokemon/" + (getRandomInt(808)+1);//PokeDataEl.id;
        fetch(apiUrl).then(function(response) {
          response.json().then(function(data) {
            enemypokemon(data);
          });
        });

        var PokeDataEl = document.querySelector(".PokePlayer");
        var apiUrl = "https://pokeapi.co/api/v2/pokemon/" + PokeDataEl.id;
        fetch(apiUrl).then(function(response) {
          response.json().then(function(data) {
            console.log(data);
            playerpokemon(data);
          });
        });
  };
  
  
  function enemypokemon(data){

    //is shiny??
    if(probability(.000125) == true){
      var img = "https://projectpokemon.org/images/shiny-sprite/" + data.name + ".gif";
      var name = data.name + "☆";
      console.log("HeeHeeShiny");
    }
    else {
      var img = "https://projectpokemon.org/images/normal-sprite/" + data.name + ".gif";
      var name = data.name; 
    }

    //enemy stats
    var PokeStats = data.stats;
    var level = 20;
    var Maxhp = Math.floor(0.01 * (2 * PokeStats[0].base_stat ) * level) + level + 10;
    var atk = Math.floor(0.01 * (2 * PokeStats[1].base_stat) * level) + 5;
    var def = Math.floor(0.01 * (2 * PokeStats[2].base_stat) * level) + 5;
    var spAtk = Math.floor(0.01 * (2 * PokeStats[3].base_stat) * level) + 5;
    var spDef = Math.floor(0.01 * (2 * PokeStats[4].base_stat) * level) + 5;
    var speed = Math.floor(0.01 * (2 * PokeStats[5].base_stat) * level) + 5;
    var hp = Maxhp;
    var enemystats = [level,Maxhp,hp,atk,def,spAtk,spDef,speed];

    var enemypossibleMoves= [];

    //get possible moves
    for (i=0;i<data.moves.length;i++){
      if(data.moves[i].version_group_details[0].level_learned_at <= level && data.moves[i].version_group_details[0].level_learned_at > 0){
        enemypossibleMoves.push(data.moves[i].move.url);
      }
    }
    //get four random moves
    var enemyMoves = [];
    for(i=0;i<4;i++){
      enemyMoves.push(enemypossibleMoves[i]);
    }
      enemyFill(name, img, enemystats);
  }

  function enemyAbilitiesCall(apiUrl){
        fetch(apiUrl).then(function(response) {
          response.json().then(function(data) {
            enemyAbilities(data);
          });
        });
  }

  function enemyAbilities(){
    
  }
  
  function enemyFill(name, img, stats){
      console.log(name);
      console.log(img);
      console.log(stats);

      var enemyhpbarEl = document.querySelector("#enemyhpbar");
      enemyhpbarEl.style.width= ((stats[2]/stats[1])*100) + "px";

      var enemygifEl = document.querySelector("#enemygif");
      enemygifEl.src = img;

      enemygifEl.onerror = function () {
        getPokeApi();
      };

      var enemynameEl = document.querySelector("#enemyname");
      enemynameEl.textContent = name.toUpperCase();

      var enemyLvEl = document.querySelector("#enemylv");
      enemyLvEl.textContent = "Lv"+stats[0];
  }

  function playerpokemon(data){
    var img = "https://projectpokemon.org/images/sprites-models/normal-back/" + data.name + ".gif";
    var name = data.name; 
    var PokeStats = data.stats;
    var level = 20;
    var Maxhp = Math.floor(0.01 * (2 * PokeStats[0].base_stat ) * level) + level + 10;
    var atk = Math.floor(0.01 * (2 * PokeStats[1].base_stat) * level) + 5;
    var def = Math.floor(0.01 * (2 * PokeStats[2].base_stat) * level) + 5;
    var spAtk = Math.floor(0.01 * (2 * PokeStats[3].base_stat) * level) + 5;
    var spDef = Math.floor(0.01 * (2 * PokeStats[4].base_stat) * level) + 5;
    var speed = Math.floor(0.01 * (2 * PokeStats[5].base_stat) * level) + 5;
    var hp = Maxhp;
    var playerstats = [level,Maxhp,hp,atk,def,spAtk,spDef,speed];

      playerFill(name, img, playerstats);
  }

  function playerFill(name, img, stats){
    console.log(name);
    console.log(img);
    console.log(stats);

    var playerhpbarEl = document.querySelector("#playerhpbar");
    playerhpbarEl.style.width= ((stats[2]/stats[1])*100) + "px";

    var playergifEl = document.querySelector("#playergif");
    playergifEl.src = img;

    var playernameEl = document.querySelector("#playername");
    playernameEl.textContent = name.toUpperCase();

    var playerLvEl = document.querySelector("#playerlv");
    playerLvEl.textContent = "Lv"+stats[0];

    var playerHpEl = document.querySelector("#playerhp");
    playerHpEl.textContent = stats[2] + "/" + stats[1];



}

  getPokeApi();