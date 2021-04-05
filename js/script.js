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
var persona = parseInt( prompt ("Scegli pari o dispari"));

var persona2 = parseInt( prompt ("Scegli un numero da 1 a 5"));

var sommaComputerPersona = persona2 + genRandom() + pariDispari();
console.log("Somma " , + sommaComputerPersona);


// controllare se è pari o Dispari

var controlloPariDispari = sommaComputerPersona + pariDispari();

// funzione per generazione del numero
function genRandom (num1){
    var num1 = Math.floor(Math.random() * 5) + 1;

    var controllo1 = "";

    // ciò che deve ritornare 
    return controllo1;
}

// funzione per controllare se è pari o dispari

function pariDispari (num){ 
    if(num % 2 === 0){
        console.log("Pari" , num);
    }else{
        console.log("Dispari", num);
    }
}