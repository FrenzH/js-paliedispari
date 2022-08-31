/*Palindroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.*/

console.log('JS OK!')

/*Palindroma*/




//functions


function reverse(str){
    return str.split("").reverse().join("");

}



const name = prompt('Enter a name');




if(isNaN(name)){
    reverse(name);
    
    if(name === reverse(name)){
        console.log('Your name is palindrome')
    }
    
    else{
        console.log('Your name is not palindrome')
    }
}
