// import data from './data/injuries/injuries.js';
// import data from './data/lol/lol.js';
// import data from './data/patient/patient.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';
// import data from './data/steam/steam.js';
// import data from './data/steam/worldbank.js';

// esta es una función de ejemplo




const filterData = (data, condition) => {
  let arrType = [];
  for (let i = 0; i < data.length; i++) {
    for (let x = 0; x < data[i].type.length; x++) {
      if (data[i].type[x] === condition) {
        arrType.push(data[i]);
      }
    }
  }
  return arrType;
 };
 
 export {sortData, filterData}