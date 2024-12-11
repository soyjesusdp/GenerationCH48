function calcularFactorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    }
    return num * calcularFactorial(num - 1);
}

function main() {
    let entrada = prompt("Introduce un número para calcular el factorial:");

    if (isNaN(entrada) || entrada === null || entrada.trim() === "") {
        console.error("Ingresa un número válido.");
        alert("Ingresa un número válido.");
        main();
    } else {
        let numero = parseInt(entrada);

        if (numero < 0) {
            console.error("El factorial no está definido para números negativos.");
            alert("El factorial no está definido para números negativos.");
            main();
        } else {
            let resultado = calcularFactorial(numero);
            console.log(`El factorial de ${numero} es ${resultado}`);
            alert(`El factorial de ${numero} es ${resultado}`);
        }
    }
}

main();