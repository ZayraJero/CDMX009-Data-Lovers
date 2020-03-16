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


//funcion lista tipo pokemon

document.getElementById('typePokemon').addEventListener('change', (e) => {
    const selectedIndex = e.currentTarget.selectedIndex;
    if (selectedIndex === Ver) {
      template(filterData(pokemon, 'All'));
    } else if (selectedIndex === Agua) {
        template(filterData(pokemon, 'Water'));
    } else if (selectedIndex === Bicho) {
      template(filterData(pokemon, 'Bug'));
    } else if (selectedIndex === Dragón) {
      template(filterData(pokemon, 'Dragon'));
    } else if (selectedIndex === Eléctrico) {
      template(filterData(pokemon, 'Electric'));
    } else if (selectedIndex === Fantasma) {
      template(filterData(pokemon, 'Ghost'));
    } else if (selectedIndex === Fuego) {
      template(filterData(pokemon, 'Fire'));
    } else if (selectedIndex === Hielo) {
      template(filterData(pokemon, 'Ice'));
    } else if (selectedIndex === Lucha) {
      template(filterData(pokemon, 'Fighting'));
    } else if (selectedIndex === Normal) {
      template(filterData(pokemon, 'Normal'));
    } else if (selectedIndex === Hierva) {
      template(filterData(pokemon, 'Grass'));
    } else if (selectedIndex === Psíquico) {
      template(filterData(pokemon, 'Psychic'));
    } else if (selectedIndex === Roca) {
      template(filterData(pokemon, 'Rock'));
    } else if (selectedIndex === Tierra) {
      template(filterData(pokemon, 'Ground'));
    } else if (selectedIndex === Veneno) {
      template(filterData(pokemon, 'Poison'));
    } else if (selectedIndex === Volador) {
      template(filterData(pokemon , 'Flying'));
    }
  });