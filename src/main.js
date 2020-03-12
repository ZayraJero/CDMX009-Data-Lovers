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
    </div>`; //plantilla de cadena de texto// 

    return HTML;
}

function addPokemonHTMLToMainContainer(HTML) {
    document.getElementById('pokemon-listing').innerHTML = HTML;
}

function showAllPokemon() {
    let pokemonHTML = '';
    data.pokemon.forEach((pokemonObj) => {
        //console.log(pokemonObj);
        //console.log(createPokemonItemHTML(pokemonObj));
        pokemonHTML += createPokemonItemHTML(pokemonObj);
    });

    addPokemonHTMLToMainContainer(pokemonHTML); 
}

function initial() {
//console.log(data.pokemon);
showAllPokemon();
}

window.initial = initial;
initial();



