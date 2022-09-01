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
    return str.split("").reverse().join('');
}

//main

const name = prompt('Enter a name');

if(isNaN(name)){    
    if(name === reverse(name)){
        console.log('Your name is palindrome')
    }
    else{
        console.log('Your name is not palindrome')
    }
}





//OddOrEven





//functions


function getRandomNumber(min,max){
    const range = max - min; 
    const random = Math.floor(Math.random()*range)  
    const result = min + random;
    return result;
}


function SumOddOrEven(sum){
    let type;
    if(sum % 2 ===0){
        type = 'even'

        
        
    }
    else{
        type = 'odd'
    
    }
    return type;
}





let oddOrEven = prompt('Odd or even?');
oddOrEven = oddOrEven.toLowerCase();


const number = parseInt(prompt('Enter a number between 1 to 5'))


if(!isNaN(number) & oddOrEven == 'even'  || oddOrEven== 'odd'){
    result = getRandomNumber(1,5);
    const sum = number + result ;
    console.log(result)
    console.log(sum)
    
    if(SumOddOrEven(sum) === oddOrEven){
        console.log('Player wins! Congratulations')
    }
    
    else{
        console.log('Computer wins :( ...please retry!')

    }



}
 