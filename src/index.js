const pokemons = [
  "Bulbasaur",
  "Ivysaur",
  "Venusaur",
  "Charmander",
  "Charmeleon",
  "Charizard",
  "Squirtle",
  "Wartortle",
  "Blastoise",
  "Metapod",
  "Weedle",
  "Pikachu",
  "Pidgey"
];

// 1)
// create a loop that prints all
// the pokemons from the pokemons array
// invoke the function to see that it works
const pokemonList = () => {
  for (i = 0; i < pokemons.length; i++) {
    console.log(pokemonList[i]);
  }
};
pokemonList();



// 2)
// Create an object for the pokemon Pikachu.
// it could have properties such as name, element,
// strength, color, amountOfLegs or something like that.
let pokemon = {
  name: 'Pikachu',
  gender: 'male',
  element: 'electric',
  color: 'yellow',
  combatPower: 1527
};

// 3)
// console.log something like
// 'Pikachu is a electricity pokemon with the strength of 32'
// Selecting some of the information about your pikachu object.
console.log(`This ${pokemon.gender} ${pokemon.name} is an ${pokemon.element} type pokemon with the CP of ${pokemon.combatPower}.`);

// 4)
// Add the property stillToCatch: true to the Pikachu object.
pokemon.stillToCatch = true;


// 5)
// change the value of the key strength in the Pikachu object.
pokemon.combatPower = 2035;


// 6)
// Delete a property from the Pikachu object.
delete pokemon.gender;
console.log(pokemon);

// 7)
// Fill up this array with a few more pokemons.
// It is an array with objects!
// I made some suggestions
// but feel free to change as you want.
const moreAboutPokemons = [
  {
    name: "Bulbasaur",
    element: "water",
    combatPower: 1527
  },
  {
    name: "Charmander",
    element: "fire",
    combatPower: 923
  },
  {
    name: "Hitmonchan",
    element: "fighting",
    combatPower: 2314
  },
  {
    name: "Woobat",
    element: ["psychic", "flying"],
    combatPower: 124
  },
  {
    name: "Eevee",
    element: "normal",
    combatPower: 1079
  },
  {
    name: "Abra",
    element: "psychic",
    combatPower: 2358
  }
];

// 8)
// Print out all the NAMES of the pokemons in this new array.
const newPokemonList = moreAboutPokemons.map(pokemon => pokemon.name);
console.log(`${newPokemonList}`);


// 9)
// Print out something like
// 'Bulbasaur is a water pokemon with the strength of 32'
// Do this for all the pokemons.

const printInformation = () => {
  moreAboutPokemons.forEach((pokemon) => {
    console.log(`${pokemon.name} is a ${pokemon.element} pokemon with the CP of ${pokemon.combatPower}`)
  })
};
printInformation();