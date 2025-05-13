const readline = require ('readline-sync');

const num = Number(readline.question('Digite um numero: '));

let i=0

while (i<=10){
    console.log(`${num} * ${i} = ${num*i}`)
}