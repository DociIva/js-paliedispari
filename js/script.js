/*Palidroma
1- Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma

2- Pari e Dispari

L’utente sceglie pari o dispari
e inserisce un numero da 1 a 5.

Generiamo un numero random (sempre da 1 a 5)
per il computer (usando una funzione).
Sommiamo i due numeri

Stabiliamo se la somma dei due numeri
 è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/
/*

// 1 - chiedi all'utente di inserire una parola 
var accessoParola = prompt ("Inserisca una parola");
console.log(accessoParola);

// 2 - invertite la parola dell 'utente
// da mettere (la prima richiesta)
var parolaCapovolta = utenteCapovolto(accessoParola);
console.log(parolaCapovolta);

// inverti la parola

function utenteCapovolto (word){
    var prova="";
    console.log(prova);
    for (var i = word.length - 1; i >=0; i--){
        prova += word[i];
    }
    return prova;
}
// si fà la decisione delle varie oopportunità
if (accessoParola === parolaCapovolta){
 console.log("La parola è palindroma " + accessoParola);
} else if (accessoParola !== parolaCapovolta){
    console.log("La parola non è palindroma ");
}
*/

/*
2- Pari e Dispari

L’utente sceglie pari o dispari
e inserisce un numero da 1 a 5.

Generiamo un numero random (sempre da 1 a 5)
per il computer (usando una funzione).
Sommiamo i due numeri

Stabiliamo se la somma dei due numeri
 è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/

// crea una variabile per la scelta del giocatore
var sceltaGiocatore = prompt('Gentilmente scegli tra : Pari o Dispari').toLocaleLowerCase.trim();
console.log("La scelta del giocatore è : ", sceltaGiocatore);

// variabile per il numero del giocatore
var numeroGiocatore = parseInt(prompt("Gentilmente ora iniserisci\n un numero da 1 a 5 ")).trim();