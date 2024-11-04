//?=====================================Exercise 3.0
//!Find the name of a secret society based on the first letter of each member's name.
// `secretName(["Esperanza", "Franco", "Nia"])`

function secreNameFunction(members) {
    let initials = members.map(member => member[0]);
    return initials.join("");
};
console.log(secreNameFunction(["Esperanza", "Franco", "Nia"]));

//?=====================================Exercise 3.1
//!Find the name of a secret society based on the first letter of each member's name.
// `secretName(['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel'])` should return `'CJMPRR'`

console.log(secreNameFunction(["Phoebe", "Ross", "Chandler", "Joey", "Monica", "Rachel"]));

//?=====================================Exercise 3.2
//!Find the name of a secret society based on the first letter of each member's name.
// `secretName(['Harry', 'Ron', 'Hermione'])` should return `'HHR'`

console.log(secreNameFunction(["Harry", "Ron", "Hermione"]));