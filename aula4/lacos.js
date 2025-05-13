const readline = require ('readline-sync');

const num = Number(readline.question('insina um número: '));

for (let i = 0; i <= 100; i++ ){ // i++ = operador de incremento / i-- = operador de decremento
    console.log(`${num} * ${i} = ${num * i}`);
}