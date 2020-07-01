//array 16 numeri casuali funzione
// stabiliamo noi il numero di valori da inserire
//partire da 5 numeri inseriti
//decidere numeri per testare se funziona tutto e le condizioni
//utente inserisce numero in un while
//controllo che ha inserito numero e no doppioni


//bonus difficoltà

//collego generazione


//il pc deve generare 16 numeri casuali tra i e 100
//i numeri non possono essere duplicati
var arrayBombe = []; //numeri random da generare
//devo generare 16 numeri ma senza doppioni
var maxBombe = 16;

while (arrayBombe.length < maxBombe) {
  var bomba = getRandom(1, 100);
  //controllo doppioni
  //controllo che NON deve essere nel nostro arrayBombe
  if (inArray(arrayBombe, bomba) != true) {
    arrayBombe.push()
  }
  arrayBombe.push(bomba);
}


var arrayUtente = [];
var maxTentativi = 3;
var punti = 0; //serve per vedere il punteggio finale dell'utente

//l'utente inserisce dei numeri fino al max consentito o fino a quando non inserisce una mina
var i = 0;

var trovato = false;
while (arrayUtente.lenght < maxTentativi && trovato == false){ //vado avanti fino a 5{
  var  numero = parseInt(prompt('inserisci un numero'));//chiedo numero all'utente
  //se il numero è nel range allora controllo se è in maxBombe
  //se non è in bombe allora lo pusho nel mio arrayBombe
  if (inRange(1, 100, numero) == true && !isInArray(arrayBombe, numero) == false && inArray (arrayUtente, numero) == false) {
    arrayUtente.push(numero);
    punti++;
  }
  // if (inArray(arrayUtente, numero) == false && isInRange(1,100,numero) == true) {
  //   arrayUtente.push(numero);
  //   punti++;
  // }

  if (inArray(arrayBombe, numero)) {//controllo che il numero inserito è all'interno dell'array delle bombe {
    //se il numero  presente nella lista generati perde
    alert('hai perso');
    trovato = true; //se non è presente il numero inserito andiamo avanti
  }
  //altrimenti continua a chiedere un altro numero
  // i++;//aggiorno il contatore ad ogni giro
}
// inArray(arrayBombe, 40);
if (punti == maxTentativi) {
  alert('hai vinto');
}
console.log('arrayUtente', arrayUtente);
console.log('punti', punti);


//gli diamo un array e un elemento da controllare
function inArray (array, elemento) {
  var i = 0;
  var trovato = false;

  //questo ciclo si deve interrompere se raggiungo la lunghezza array o trovo la corrispondenza
    while (i < array.length && trovato == false) {
    if (array[i] == elemento) {
      trovato = true;
    }
    i++
  }
  return trovato;
}

function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}
//utente non può inserire elementi che non siano numeri e che non siano nel range giusto

function isInRange (min, max, num) {
  if (num < min || num > max || inNaN(num)) {
    return true;
  }
  return false;
}

//vedere la funzione includes, prende un array
