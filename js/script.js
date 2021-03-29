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

// 1 - chiedi all'utente di inserire una parola 

var accessoParola = prompt('Inserire una parola');
console.log(accessoParola);

var parolaReverted = reverseChars(accessoParola);
console.log(parolaReverted);


// DEFINIZIONE con (FUNTION)
function reverseChars(parola) {
    var reverse = "" ;

    // definizionde , loop all'inverso mettiamo i = a parola perchè così si parte dalla fine
    //                               (  >= ricorda bene questo)
    for (var i = parola.length -1; i >= 0 ; i--) {
       // chartAt , dammi la posizione dell'ultima parola , per avere la parte più piccola usare parola.[i] direttamente
       //console.log( parola.charAt(i) ); 
       
       // stringa che possiamo creare un carattere alla volta, concateniamo ogni volta un carattere
       // += e dopo la key che abbiamo usato per poter leggere i caratteri prima / oppure come prima charAt
       reverse += parola[i];
    }
    // per poterlo portare fuori e farlo vedere
    return reverse;

}
 










