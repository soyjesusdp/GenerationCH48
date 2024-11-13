//?=====================================Exercise 5.0
//!Create a function that takes two parameters (number, length) and returns an array of length containing multiples of the number.

const arrayMultiple = [];
const number = 2;
const length = 5
for (let i = 1; i <= length; i++) {
    arrayMultiple.push(number * i);
}

console.log(`Los números en múltiplos son: ${arrayMultiple}`);

//?=====================================Exercise 5.1
//!Create a function that takes two parameters (number, length) and returns an array of length containing multiples of the number.

const array2 = [];
const number2 = 17;
const lenghts = 6;

for (let a = 1; a <= lenghts; a++) {
    array2.push(number2 * a);
}

console.log(`Los números en múltiplos son: ${array2}`);