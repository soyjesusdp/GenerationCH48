/*
!Factorial
?Write a program that prompts for an intenger number n. Where  1 <= n. Solve this using recursion.
*/

function factorial(n) {
    if (n <= 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

let n = parseInt(prompt("Introduce un número entero para calcular su factorial:"));
if (n >= 1) {
    console.log("El factorial de " + n + " es: " + factorial(n));
} else {
    console.log("Introduce un número entero mayor o igual a 1.");
}