const readline = require ('readline-sync') //chamar o módulo
const peso = Number(readline.question('Calculadora de IMC\n Insira o seu Peso: ')); //a constante será adquirida após a pergunta
const altura = Number (readline.question('Insira a sua altura: '));
const imc = peso/altura**2;
let arredondado = parseFloat(imc.toFixed(2)); //arredonda os números e diminui o número de decimais

//condicionais com operadores condicionais ternários
(imc <=17) ? console.log('IMC: ', arredondado, ' - Muito abaixo do peso') 
: (imc>17 && imc <=18.49) ? console.log('IMC: ', arredondado, ' - Abaixo do peso') 
: (imc>18.49 && imc<=24.99) ? console.log ('IMC: ', arredondado, ' - Peso Normal')
: (imc > 24.99 && imc <=29.99) ? console.log ('IMC: ', arredondado, ' - Acima do Peso')
: (imc >29.99 && imc <= 34.99) ? console.log ('IMC: ', arredondado, ' - Obesidade 1')
: (imc > 34.99 && imc <= 39.99) ? console.log ('IMC: ', arredondado, ' - Obesidade severa')
: console.log ('IMC: ', arredondado, ' - Obesidade mórbida')