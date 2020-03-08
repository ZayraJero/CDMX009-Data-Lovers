import {data} from './data/pokemon/pokemon.js';

console.log(data);

function nextContainer(idNextContainer, idHideContainer) {
    
    document.getElementById(idNextContainer).style.display = "block";
    document.getElementById(idHideContainer).style.display ="none";

}

