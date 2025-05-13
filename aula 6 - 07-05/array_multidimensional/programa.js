const readline = require ('readline-sync');

const dados = readline.question('Informe seu nome, telefone e email: ').split('');

console.log('Nome: ', dados[0]);
console.log('Telefone: ', dados[1]);
console.log('Email: ', dados[2]);