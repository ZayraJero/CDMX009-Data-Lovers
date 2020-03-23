import data from './data/pokemon/pokemon.js';

console.log(data);

function nextContainer(idHideContainer, idNextContainer) { //Funcion para oculpar la primera pagina
  document.getElementById(idNextContainer).style.display = 'block'; 
  document.getElementById(idHideContainer).style.display = 'none';
}

window.nextContainer = nextContainer;

//function ShowContainerPokemon(){

//}

function createPokemonItemHTML(pokemonObj) {
  const name = pokemonObj.name, imgUrl = pokemonObj.img, id = pokemonObj.id; 
  let HTML = `<div class="pokemon-item-container pokemon" id="pokemon-item-${id}"> 
    <div class="pokemon-item-img">
    <img src="${imgUrl}" alt=${name}"></div>
    <div class="pokemon-item-name">     
    <p class="pokemon-name" id="pokemon-${id}"> #${id} ${name}</p>
    </div> 
    <button class="pokemon-button" data-pokemon-id="${id}">Ficha</button>
    </div>`; //plantilla de cadena de texto// 

  return HTML;
}

function addPokemonHTMLToMainContainer(HTML) {
  document.getElementById('pokemon-listing').innerHTML = HTML;
}

function showAllPokemon() {
  let pokemonHTML = '';
  data.pokemon.forEach((pokemonObj) => {

    pokemonHTML += createPokemonItemHTML(pokemonObj);
  });

  addPokemonHTMLToMainContainer(pokemonHTML); 
}

function initial() {

  showAllPokemon();
}

window.initial = initial;
initial();


function obtenerPokemon(elemento) {
  let id = Number(elemento.getAttribute('data-pokemon-id'));
  return id - 1;
}


function showModal(evento) {
  let pokemonID = obtenerPokemon (evento.currentTarget);
  let dataPokemon;
  let modalContent = document.getElementById('modal-content');
  let modal = document.getElementById('modal')

  fetch(
    'data/pokemon/pokemon.json').then(function(response) {
   if (response.ok) {
        return response.json();
    }
    }).then( function (response) {
      dataPokemon = response.pokemon[pokemonID];
      modalContent.innerHTML = `
      <div class="left">
      <p class="name">${dataPokemon.num} ${dataPokemon.name}</p>
      <p>Altura promedio: ${dataPokemon.height}</p>
      <p>Peso promedio: ${dataPokemon.weight}</p>
      <p>Conteo de dulces: ${dataPokemon.candy_count}</p>
      <p>Huevo: ${dataPokemon.egg}</p><br>
      <p class="type"> Tipo: ${ dataPokemon.type.join(', ') }</p>
      <p class="weaknesses">Debilidades: ${dataPokemon.weaknesses.join(', ')}</p>
      </div>

      <div class="right">
      <img class="image-pokemon" src="${dataPokemon.img}">
      </div>
      `;
    });

modal.style.display = 'block';
}

let pokemonButton = document.querySelectorAll('.pokemon-button');
pokemonButton.forEach( elemento => {
  elemento.addEventListener('click', showModal);
});


let span = document.getElementsByClassName("close")[0];

  span.onclick = function() {
  modal.style.display = "none";
}