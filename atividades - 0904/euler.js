const readline = require ('readline-sync');

const num = readline.question ('Constante de Euler <br> Insira um numero: ')

function euler(num){
    let e = (1 + (1/num)) ** num
    return e;

}

console.log(euler(num));