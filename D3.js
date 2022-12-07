/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const num = 2;
const num1 = 5;

if (num > num1) {
  console.log("num non è il numero maggiore");
} else if (num < num1) {
  console.log("ex.1", " num1 è il numero maggiore");
} else {
  console.log("i numeri sono uguali");
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const num2 = 10;

if (num2 !== 5) {
  console.log("esercizio 2", "not equal");
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const num5 = 30;

if (num5 % 5 === 0) {
  console.log("divisibile per 5");
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const num6 = 15;
const num7 = 7;

if (num6 === 8 || num7 === 8) {
  console.log("un valore è uguale a 8");
} else if (num6 + num7 === 8) {
  console.log(" La loro somma è uguale a 8");
} else if (num6 - num7 === 8) {
  console.log(" la somma della sottrazione è uguale a 8");
} else {
  console.log(" Ne la somma ne la sottrazione danno valore 8");
}

/*if (num6 === 8) {
  console.log("il numero è uguale a 8");
} else if (num6 !== 8) {
  console.log("non uguale a 8");
} else if (num7 === 8) {
  console.log("è uguale a 8");
} else if (num7 !== 8) {
  console.log("non è uguale a 8");
} else {
  console.log("nessun numero è uguale a 8");
}*/

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let totalShoppingCart = 52;

if (totalShoppingCart > 50) {
  console.log("hai diritto alla spedizione gratuita");
} else if (totalShoppingCart <= 50) {
  console.log("non hai diritto alla spedizione gratuita");
}

let totalShoppingCart1 = 35;
let speditionCost = 10;

if (totalShoppingCart1 >= 50) {
  console.log("hai diritto alla spedizione gratuita");
} else if (totalShoppingCart1 <= 50) {
  console.log(
    "non hai diritto alla spedizione gratuita",
    " la spedizione costerà: ",
    totalShoppingCart1 + speditionCost
  );
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let totalShoppingCart3 = 52;

if (totalShoppingCart3 >= 50) {
  console.log("hai diritto alla spedizione gratuita");
  console.log(
    "hai diritto allo sconto blackFriday",
    (totalShoppingCart3 / 100) * 20
  );
} else if (totalShoppingCart3 <= 50) {
  console.log("non hai diritto alla spedizione gratuita");
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let variable = 10;
let variable2 = 6;
let variable3 = 5;

if (variable > variable2 && variable > variable3 && variable2 > variable3) {
  console.log(
    " variable è il valore più grande, variable2 è il valore che intermedio e variable3 è il numero minore"
  );
}

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*const object = "Ciao";
const object1 = 2;

if (typeof object === "number") {
  console.log;
  ("object è un numero");
} else if (typeof object1 === "number") {
  console.log("object1 è un numero");
} else {
  control.log("nessuno dei dati inseriti è un numero");
}*/

let object = "ciao";
let object1 = 5;

if (typeof object === "number") {
  console.log(" object è un numero");
} else if (typeof object1 === "number") {
  console.log(" object1 è un numero");
} else if (typeof object !== "number") {
  console.log("object non è un numero");
} else if (typeof object1 !== "number") {
  console.log(" object1 non è un numero");
} else {
  console.log(" non ci sono numeri");
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let val = 7;
if (val < 10) {
  console.log("Meno di 10");
} else if (val > 5) {
  console.log("Maggiore di 5");
} else {
  console.log("compreso tra 5 e 10");
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};

me.city = "Toronto";

console.log(me);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
delete me.lastName;

console.log(me);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

delete me.skills;

console.log(me);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let numbers = [];
console.log(numbers);

numbers.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(numbers);

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
numbers[9] = 100;
console.log(numbers);
