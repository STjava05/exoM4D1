// 1. Crea una funzione che controlli due numeri interi. Ritorna `true` se uno dei due è 50 o se la somma dei due è 50.

function checkNumbers(num1, num2) {
  if (num1 === 50 || num2 === 50 || num1 + num2 === 50) {
    return true;
  } else {
    return false;
  }
}
console.log(checkNumbers(20, 50));

// 2. Crea una funzione che rimuova il carattere ad una specifica posizione da una stringa. 
// Passa la stringa e la posizione come parametri e ritorna la stringa modificata.

function removeCharAt(string, position) {
  if (position < 0 || position >= string.length) {
    // La posizione specificata è fuori dai limiti della stringa
    return string;
  }
  // Utilizziamo il metodo slice() per ottenere la sottostringa escludendo il carattere nella posizione specificata
  return string.slice(0, position) + string.slice(position + 1);
}
console.log(removeCharAt("java", 2));


// 3. Crea una funzione che controlli se due numeri siano compresi tra 40 e 60 o tra 70 e 100. 
// Ritorna `true` se rispecchiano queste condizioni, altrimenti ritorna `false`.

function controllaNumeri(num1, num2) {
  if ((num1 >= 40 && num1 <= 60) || (num1 >= 70 && num1 <= 100)) {
    if ((num2 >= 40 && num2 <= 60) || (num2 >= 70 && num2 <= 100)) {
      return true;
    }
  }
  return false;
}
console.log(controllaNumeri(50, 80));


// 4. Crea una funzione che accetti un nome di città come parametro e ritorni il nome stesso se inizia con “Los” o “New”, altrimenti ritorni `false`.

function controllaCitta(nomeCitta) {
  if (nomeCitta.startsWith("Los") || nomeCitta.startsWith("New")) {
    return nomeCitta;
  }
  return false;
}
console.log(controllaCitta("Los Angeles"));

// 5. Crea una funzione che calcoli e ritorni la somma di tutti gli elementi di un array.
// L’array deve essere passato come parametro.

function calcolaSommaArray(array) {
  let somma = 0;
  for (let i = 0; i < array.length; i++) {
    somma += array[i];
  }
  return somma;
}

let arrayNumeri = [1, 2, 3, 4, 5];
console.log(calcolaSommaArray(arrayNumeri)); // 15


// 6. Crea una funzione che controlli che un array NON contenga i numeri 1 o 3. Se NON li contiene, ritorna `true`, altrimenti ritorna `false`.

function controllaArray(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 1 || array[i] === 3) {
      return false;
    }
  }
  return true;
}
console.log(controllaArray([2, 4, 5]));

// 7. Crea una funzione per trovare il tipo di un angolo i cui gradi sono passati come parametro.

function trovaTipoAngolo(gradi) {
  if (gradi > 0 && gradi < 90) {
    return "Acuto";
  } else if (gradi === 90) {
    return "Retto";
  } else if (gradi > 90 && gradi < 180) {
    return "Ottuso";
  } else if (gradi === 180) {
    return "Piatto";
  } else if (gradi > 180 && gradi < 360) {
    return "Concavo";
  } else {
    return "Angolo non valido";
  }
}

console.log(trovaTipoAngolo(45)); // "Acuto"
console.log(trovaTipoAngolo(90)); // "Retto"
console.log(trovaTipoAngolo(120)); // "Ottuso"
console.log(trovaTipoAngolo(180)); // "Piatto"


// 8. Crea una funzione che crei un acronimo a partire da una frase. Es. “Fabbrica Italiana Automobili Torino” deve ritornare “FIAT”.

function creaAcronimo(frase) {
  let parole = frase.split(" ");
  let acronimo = "";

  for (let i = 0; i < parole.length; i++) {
    acronimo += parole[i][0].toUpperCase();
  }

  return acronimo;
}

console.log(creaAcronimo("Fabbrica Italiana Automobili Torino")); // "FIAT"




// extra

// 1. Partendo da una stringa (passata come parametro), ritorna il carattere più usato nella stringa stessa.

function caratterePiuFrequente(stringa) {
  let letteri = {};
  let maxFrequenza = 0;
  let caratterePiuFrequente = "";

  for (let i = 0; i < stringa.length; i++) {
    let carattere = stringa[i];
    if (letteri[carattere]) {
      letteri[carattere]++;
    } else {
      letteri[carattere] = 1;
    }

    if (letteri[carattere] > maxFrequenza) {
      maxFrequenza = letteri[carattere];
      caratterePiuFrequente = carattere;
    }
  }

  return caratterePiuFrequente;
}
console.log(caratterePiuFrequente("abbccc"));

// 2.  Controlla che due stringhe passate come parametri siano gli anagrammi l’una dell’altra. 
// Ignora punteggiatura e spazi e ricordate di rendere la stringa tutta in minuscolo. Se le due parole sono anagrammi, 
// ritorna true , altrimenti ritorna `false`

function sonoAnagrammi(stringa1, stringa2) {
  // Rimuove punteggiatura e spazi, rende tutto minuscolo
  let stringa1Modificata = stringa1.replace(/[^\w]/g, "").toLowerCase();
  let stringa2Modificata = stringa2.replace(/[^\w]/g, "").toLowerCase();

  // Verifica se le due stringhe hanno la stessa lunghezza
  if (stringa1Modificata.length !== stringa2Modificata.length) {
    return false;
  }

  // Converte le stringhe in array di caratteri
  let array1 = Array.from(stringa1Modificata);
  let array2 = Array.from(stringa2Modificata);

  // Ordina gli array di caratteri
  array1.sort();
  array2.sort();

  // Verifica se gli array di caratteri sono uguali
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }

  return true;
}
console.log(sonoAnagrammi("Hello", "World")); // false


/* 3. Partendo da una lista di possibili anagrammi e da una parola (entrambi passati come parametri), 
 ritorna un nuovo array contenente tutti gli anagrammi corretti della parola data.
 Per esempio, partendo da “cartine” e [”carenti”, “incerta”, “espatrio”], 
 il valore ritornato deve essere [”carenti”, “incerta”]. **/

function trovaAnagrammi(parola, listaAnagrammi) {
  // Converte la parola in un array di caratteri e li ordina
  let parolaOrdinata = parola.toLowerCase().split('').sort().join('');

  // Filtra gli anagrammi corretti dalla lista
  let anagrammiCorretti = listaAnagrammi.filter(function (anagramma) {
    // Converte l'anagramma in un array di caratteri e li ordina
    let anagrammaOrdinato = anagramma.toLowerCase().split('').sort().join('');

    // Confronta l'anagramma ordinato con la parola ordinata
    return anagrammaOrdinato === parolaOrdinata;
  });

  return anagrammiCorretti;
}

let parola = "cartine";
let listaAnagrammi = ["carenti", "incerta", "espatrio"];

let risultato = trovaAnagrammi(parola, listaAnagrammi);
console.log(risultato); // Output: ["carenti", "incerta"]

// 4. Partendo da una stringa passata come parametro, ritorna `true` se la stringa è palindroma o `false` 
// se non lo è.
function Palindroma(stringa) {
  // Rimuove gli spazi e converte la stringa in minuscolo
  stringa = stringa.toLowerCase().replace(/\s/g, '');

  // Confronta la stringa originale con la sua versione invertita
  return stringa === stringa.split('').reverse().join('');
}

let stringa1 = "Anna";
console.log(Palindroma(stringa1)); // Output: true

let stringa2 = "Ciao";
console.log(Palindroma(stringa2)); // Output: false

// 5. Partendo da un numero intero (dai parametri) ritorna un numero che contenga le stesse cifre, ma in ordine contrario. 
// Es. 189 ⇒ 981

function invertiNumero(numero) {
  // Converte il numero in una stringa
  let numeroStringa = numero.toString();

  // Converte la stringa in un array di caratteri, inverte l'ordine degli elementi e li riunisce in una stringa
  let numeroInvertitoStringa = numeroStringa.split('').reverse().join('');

  // Converte la stringa invertita in un numero intero
  let numeroInvertito = parseInt(numeroInvertitoStringa);

  return numeroInvertito;
}

let numero = 189;
let numeroInvertito = invertiNumero(numero);
console.log(numeroInvertito); // Output: 981

/*6. Scrivi una funzione che accetti un numero positivo X come parametro. 
La funzione dovrebbe stampare a console una “scala” creata con il carattere “#” e avente X scalini.**/

function stampaScala(numeroScalini) {
  // Verifica se il numero di scalini è valido (maggiore di 0)
  if (numeroScalini <= 0) {
    console.log("Il numero di scalini deve essere positivo e maggiore di zero.");
    return;
  }

  // Stampa la scala con il carattere "#"
  for (let i = 1; i <= numeroScalini; i++) {
    let scala = "#".repeat(i);
    console.log(scala);
  }
}

let numeroScalini = 5;
stampaScala(numeroScalini);