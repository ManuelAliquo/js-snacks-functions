/**
 * Scrivi una funzione che accetti
 * un'array di stringhe e una lettera
 * e restituisca un array contenente solo
 * le parole che iniziano con quella lettera
 *  */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];

const chosenLetter = "A";

const filteredNames = [];

// Dichiara la funzione qui.
function initialsFilter() {
  for (let i = 0; i < names.length; i++) {
    let currentName = names[i];
    let splittedName = currentName.split("");

    for (let i = 0; i < splittedName.length; i++) {
      let currentChar = splittedName[i];

      if (chosenLetter === currentChar) {
        filteredNames.push(splittedName.join(""));
      }
    }
  }
}

// Invoca la funzione qui e stampa il risultato in console
initialsFilter(names);
console.log(filteredNames);

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]
