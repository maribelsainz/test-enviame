// programa para imprimir números primos entre dos números

// Input que recibe un rango entre A y B
const lowerNumber = parseInt(prompt('Introduzca el número menor: '));
const higherNumber = parseInt(prompt('Introduzca el número mayor: '));

console.log(`Los números primos entre ${lowerNumber} y ${higherNumber} son:`);
document.write(`<h2>Los números primos entre ${lowerNumber} y ${higherNumber} son: </h2>`);

// looping from lowerNumber to higherNumber
for (let i = lowerNumber; i <= higherNumber; i++) {
    let flag = 0;

    // looping through 2 to user input number
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = 1;
            break;
        }
    }

    // si el número es mayor que 1 y no es divisible por otros números
    if (i > 1 && flag == 0) {
        console.log(i);
        document.write(`<ul><li>${i}</li></ul>`);
    }
}