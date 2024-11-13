//?=====================================Exercise 6.0
//!Write a function to determine if an array is positively dominant.
//!An array is positively dominant when the majority of its elements are positive.

function positiveDom(esteEsUnArreglo) {
    let positiveCount = 0;
    let negativeCount = 0;
for (let num of esteEsUnArreglo) {
    if (num > 0) {
        positiveCount++;
    } else if (num < 0) {
        negativeCount++;
    }
}

return positiveCount > negativeCount;
}

console.log(positiveDom([-1, -3, -5, 4, 6767,]));