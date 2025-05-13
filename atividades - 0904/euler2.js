const readline = require ('readline-sync');

let num = readline.question ('Constante de Euler <br> Insira um numero: ')
const qtde = readline.question ('Constante de Euler <br> Quantidade de repeticoes?: ')

function euler(num){
    let e = (1 + (1/num)) ** num
    return e;
}

for (let i=0 ; i<qtde ; i++) {
    console.log(euler(num)); //repetir i vezes
    num++ //aumenta 1 no numero (num) ex: euler de 200, euler de 201, euler de 202..
}
