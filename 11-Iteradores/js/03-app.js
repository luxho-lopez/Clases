// FizzBuzz
// Si el número es divisible entre 3, imprimir Fizz
// Si el número es divisible entre 5, imprimir Buzz
// Si el número es divisible entre 3 y 5, imprimir FizzBuzz

for(let i = 1; i <= 100; i++) {
    if(i % 3 === 0 && i % 5 === 0) {
        console.log(`${i} FizzBuzz`);
        continue;
    } else if (i % 3 === 0) {
        console.log(`${i} Fizz`);
        continue;
    } else if (i % 5 === 0) {
        console.log(`${i} Buzz`);
        continue;
    } else {
        console.log(i)
    }
}