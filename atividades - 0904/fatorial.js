const readline = require ('readline-sync');

const numero = readline.question('Insira um número: ')

function factiorialize (numero){
    var resultado = numero;

    if (numero === 0 || numero === 1){
        return 1;
    }

    while (numero > 1){
        numero --; //diminuir 1
        resultado = resultado * numero;
    }

    return resultado;
}

console.log(`Fatorial de ${numero} = `, factiorialize(numero))
