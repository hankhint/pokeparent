// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
//btn.onclick = function () {
 // modal.style.display = "block";
//};

// When the user clicks on <span> (x), close the modal
//span.onclick = function () {
 // modal.style.display = "none";
//};

// When the user clicks anywhere outside of the modal, close it
//window.onclick = function (event) {
  //if (event.target == modal) {
   // modal.style.display = "none";
  //}
//};
var save_button1 = document.getElementById('Save')
save_button1.onclick = saveData1;

function saveData1(){
  var input = document.getElementById("savechoice1");
  localStorage.setItem("Bulbasaur", input.value);
  var storedValue = localStorage.getItem("Bulbasaur");
}




var save_button2 = document.getElementById('Save')
save_button2.onclick = saveData2;

function saveData2(){
  var input = document.getElementById("savechoice2");
  localStorage.setItem("Charmander", input.value);
  var storedValue = localStorage.getItem("Charmander");
}




var save_button3 = document.getElementById('Save')
save_button3.onclick = saveData;

function saveData(){
  var input = document.getElementById("savechoice3");
  localStorage.setItem("Squirtle", input.value);
  var storedValue = localStorage.getItem("Squirtle");
}


//const storageinput =  document.querySelector('.storage');
//const text = document.querySelector('.text');
//const button = document.querySelector('.button');

//storageinput.addEventListener('click', button => {

//}

//)
//const saveTolocalStorage = () => {
 // localStorage.setItem('textinput', text.textcontent)
//}
//button.addEventListener('click', saveTolocalStorage)







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
