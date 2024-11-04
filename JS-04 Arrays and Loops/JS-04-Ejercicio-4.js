//?=====================================Exercise 4.0
//!Display online status for a list of users.
// `onlineStatus(['mockIng99', 'J0eyPunch', 'glassedFer'])`

const onlineStatus = ['Jesús', 'María', 'Otro', 'Otro', 'Otro', 'Otro', 'Otro'];
//Constante "onlineStatus" con 3 valores dentro.

const singleUser = onlineStatus.length === 1 ? onlineStatus[0] : null;
// === es Estrictamente igual a 1 el "?" me indica si es verdadero y el : me indica si es falso. onlineStatus[0] me indica que si es verdadero tiene que empezar en el índice 0.

const twoUsers = onlineStatus.length === 2 ? `${onlineStatus[0]}, ${onlineStatus[1]}` : null;
// Al estar en backtips se almacena la variable en twoUsers y debería imprimir los 2 primeros nombres.

const threeUsers = onlineStatus.length > 3 ? `${onlineStatus[0]} y ${onlineStatus[1]} pero también hay otros ${onlineStatus.length - 2} usuarios más en línea.`: null;
//Como está dentro de backtips, puedo escribir texto, eso explica por qué puedo usar and y el ${onlineStatus - 2} me indica que tengo que restarle 2 a la cuenta total que hace .lenght. (OJO, se debe restar del "onlineStatus.lenght" y no del "onlineStatus").

const output = onlineStatus.length === 1 ? singleUser 
              : onlineStatus.length === 2 ? twoUsers 
              : threeUsers;

console.log(`Los dos primeros usuarios en línea son: ${output}`);