const readline = require('readline-sync');

function Programa() {
    const numero = Number(readline.question('Insira um número: '));
    (isNaN(numero)) ? console.log('Por favor, insira apenas números') : (numero % 2 === 0) ? console.log('Número Par') : console.log('Número Ímpar');


    
    const resposta = readline.question('Deseja Continuar? (S/N): ');

    if (resposta === 'S' || resposta === 's') {
        Programa();

    } else if (resposta === 'N' || resposta === 'n') {
        console.log('Fim do programa');
    }
}

Programa();
//estritamente igual