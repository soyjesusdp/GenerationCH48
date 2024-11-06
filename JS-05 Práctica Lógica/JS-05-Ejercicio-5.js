/*
!Flat array
?Write a program that takes the following nested matrix and flattens it (makes it a 1D array). Use any type of algorithm you want like callbacks, recursion, etc...
*/

let multiDimension = [1, [2, 3, [4, 5, [6]]]];

function flattenArray(arr) {
    let result = [];
    arr.forEach(element => {
        if (Array.isArray(element)) {
            result = result.concat(flattenArray(element));
        } else {
            result.push(element);
        }
    });
    return result;
}

console.log(flattenArray(multiDimension));