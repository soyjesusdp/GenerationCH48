//?=====================================Exercise 1.0
//!Calculate the sum of all resistors connected in series.
//!sumResitance([-1,5,6,3])

const sumResistance1 = [
    -1,
    5,
    6,
    3
];

//!Comentario

const totalResistance1 = sumResistance1.reduce((acumulador, valoractual) => acumulador + Math.abs(valoractual), 0);
console.log(totalResistance1);

//?=====================================Exercise 1.1
//!Calculate the sum of all resistors connected in series.
//!sumResitance([14,3.5,6])

const sumResistance2 = [14, 3.5, 6]
const totalResistance2 = sumResistance2.reduce((acumulator, valoractual) => acumulator + valoractual, 0);
console.log(totalResistance2);

//?=====================================Exercise 1.2
//!Calculate the sum of all resistors connected in series.
//!sumResitance([8,15,100])

//*En este ejercicio decidí no utilizar arrow functions.

const sumResistance3 = [8, 15, 100];
const totalResistance3 = sumResistance3.reduce(function(acumulador, valoractual) {
    return acumulador + valoractual;
}, 0);
console.log(`El valor total es de: ${totalResistance3}`);