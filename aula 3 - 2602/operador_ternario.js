const readline = require('readline-sync');
const idade = Number(readline.question('Sua Idade: '));

(idade >=18) ? console.log('Maior de idade') : console.log('Menor de idade');