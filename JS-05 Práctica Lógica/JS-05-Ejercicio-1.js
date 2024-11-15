/*
!User profile
?Write a program that prompts a user for their data: username, age, and a list of their favorite movies. Store the information and then showcase it in the console. Take note that the output for the films should add a small message like: 'The film {film} is one of my favorites'.
*/

let username = prompt("Please enter your username:");
let age = prompt("Please enter your age:");
let favoriteMovies = prompt("Please enter a list of your favorite movies, separated by commas:");

console.log(`Username: ${username}`);
console.log(`Age: ${age}`);
console.log(`One of my favorite movies is ${favoriteMovies[0]}`);

//*Ejercicio número 5