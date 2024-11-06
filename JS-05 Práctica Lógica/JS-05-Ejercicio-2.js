/*
!Highest number
?Write a program that asks for 10 numbers. Using logical operators and any other javascript functions/structures you've seen before, determine and output the highest of those numbers.
*/

let numbers = [];
for (let i = 0; i < 10; i++) {
    let numberPrompt;
    do {
        numberPrompt = prompt("Introduce un número:");
    } while (isNaN(numberPrompt) || numberPrompt === "0" || numberPrompt === null);
    
    numbers.push(Number(numberPrompt));
}

let highestNumber = Math.max(...numbers);
console.log("El número más alto es: " + highestNumber);