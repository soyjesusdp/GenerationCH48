/*
!Alarm
?Write a program that asks a user for the amount of seconds needed until an alarm (message) is executed alongside a text to show once those seconds have passed in real time.
*/

let alarmNumber;
    do {
        alarmNumber = prompt("Number in minutes")
    } while (isNaN(alarmNumber) || alarmNumber === "0" || alarmNumber === null);
let timeout = Number(alarmNumber) * 1000;

setTimeout(() => {
    let finalNumber = timeout / 1000;
    console.log("Tu alarma está sonando luego de " + finalNumber +  " segundos");
}, [timeout]);