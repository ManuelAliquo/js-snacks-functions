/**
 * Scrivi una funzione che accetti una stringa
 * e restituisca il numero di vocali contenute al suo interno
 */

const word = "javascript";

const vocals = ["a", "e", "i", "o", "u"];

let vocalsCount = 0;
let matchingChar = [];

/*
// Dichiara la funzione qui
function vocalsCounter() {
  const splittedWord = word.split("");
  console.log(splittedWord);

  for (let i = 0; i < splittedWord.length; i++) {
    const currentChar = splittedWord[i];
    console.log(currentChar);
    for (let i = 0; i < vocals.length; i++) {
      const currentVocal = vocals[i];
      if (currentChar === currentVocal) {
        console.log("vocal:", currentChar);
        vocalsCount += 1;
        matchingChar.push(currentChar);
      }
    }
  }
}

// Invoca la funzione qui e stampa il risultato in console
vocalsCounter();
console.log(`${vocalsCount} (${matchingChar})`);

//Risultato atteso se si passa 'javascript': 3 (a, a, i)
*/

// # Bonus #

// Dichiara la funzione qui

const vocalsCounter = () => {
  const splittedWord = word.split("");
  console.log(splittedWord);

  for (let i = 0; i < splittedWord.length; i++) {
    const currentChar = splittedWord[i];
    console.log(currentChar);
    for (let i = 0; i < vocals.length; i++) {
      const currentVocal = vocals[i];
      if (currentChar === currentVocal) {
        console.log("vocal:", currentChar);
        vocalsCount += 1;
        matchingChar.push(currentChar);
      }
    }
  }
};

// Invoca la funzione qui e stampa il risultato in console
vocalsCounter();
console.log(`${vocalsCount} (${matchingChar})`);
