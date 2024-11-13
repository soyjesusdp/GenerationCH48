//?Given an array, return a shorter array following these steps:
//!Split the array into two equal parts*. If unequal, remove the middle element to obtain two equal arrays.
//!Sum each number of the first part with the inverse numbers of the second part.
//!Divide each number of the resulting array by 2.

function longitudEsParOImpar(grupo) {
    if (grupo.length % 2 !== 0) {
      let elDelMedio = Math.floor(grupo.length / 2);
      grupo.splice(elDelMedio, 1);
    }
  
    let primero = grupo.slice(0, grupo.length / 2);
    let segundo = grupo.slice(grupo.length / 2).reverse();
  
    let promedios = [];
  
    for (let i = 0; i < primero.length; i++) {
      let promedio = (primero[i] + segundo[i]) / 2;
      promedios.push(promedio);
    }
  
    return promedios;
  }
    console.log(longitudEsParOImpar([1, 2, 3, 5, 22, 6]));