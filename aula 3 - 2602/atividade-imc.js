const readline = require ('readline-sync');

const peso = Number(readline.question('Calculadora de IMC\n Insira o seu Peso: '));
const altura = Number (readline.question('Insira a sua altura: '));
const imc = peso/altura**2;
let arredondado = parseFloat(imc.toFixed(2));

if (isNaN(peso) || isNaN(altura)){
    console.log ('Por favor, insira apenas números,');
}

else if (imc< 18.5){
    console.log('Seu IMC é: ', arredondado, '- Magreza')
}

else if (imc >= 18.5 && imc <=24.9){
    console.log('Seu IMC é: ', arredondado, '- Normal')
}

else if (imc >= 25 && imc <=29.9){
    console.log ('Seu IMC é: ', arredondado, '- Sobrepeso')
}

else if (imc>= 30 && imc<= 34.9){
    console.log('Seu IMC é: ', arredondado, '- Obesidade grau 1')
}

else if (imc>= 35 && imc <= 39.9){
    console.log('Seu IMC é: ', arredondado, '- Obesidade grau 2')
}

else if (imc>= 40){
    console.log('Seu IMC é: ', arredondado, '- Obesidade Grau 3')
};


