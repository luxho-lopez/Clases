let i = 1000;

do {
    // console.log(`Número ${i}`);
    if(i % 2 === 0) {
        console.log(`${i} es par`);
    } else {
        console.log(`${i} es impar`);
    }
    i++;
} while (i <= 10); // Do while loop se ejecuta al menos una vez, luego se evalúa la condición