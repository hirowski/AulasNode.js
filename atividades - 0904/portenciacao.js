//potenciação com laço for

const readline = require ('readline-sync');

const base = readline.question('Calcular Potencia!! <br> Insira o numero da base: ')

const potencia = readline.question('Insira o número da potência: ')

//estrutura de potencia: 2^5 = 2x2x2x2x2
let resultado = 1
for (let i = 0; i < potencia; i++){
resultado = resultado * base; 
}

console.log (`A potência de ${base} elevado a ${potencia} =  ${resultado}` )

