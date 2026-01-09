/**
 * Scrivi una funzione che accetti un array di nomi
 * e restituisca un nuovo array con le iniziali
 * di ogni parola dell'array fornito
 */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];

const namesInitial = [];

/*
// Dichiara la funzione qui
function initialsFinder() {
  for (let i = 0; i < names.length; i++) {
    let currentName = names[i];
    namesInitial.push(currentName[0]);
  }
}

// Invoca la funzione qui e stampa il risultato in console
initialsFinder(names);
console.log(namesInitial);

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]
*/

// # Bonus #

// Dichiara la funzione qui
const initialsFinder = () => {
  for (let i = 0; i < names.length; i++) {
    let currentName = names[i];
    namesInitial.push(currentName[0]);
  }
};

// Invoca la funzione qui e stampa il risultato in console
initialsFinder(names);
console.log(namesInitial);
