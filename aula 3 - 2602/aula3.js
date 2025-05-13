const readline = require ('readline-sync');

const idade = Number(readline.question('Qual a sua idade? '));

if (isNaN(idade)){
    console.log ('Por favor, insira apenas números');
}

else if (idade <= 18){
    console.log ('Menor de Idade');
}

else {
    console.log('Maior de idade');
}