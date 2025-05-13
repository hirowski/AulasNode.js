//lista x numeros primos, sendo x o numero solicitado (ex: 4 - 1,2,3,5 / 10- 1,2,3,5,7,11,13,17, 19,23)

const readline = require('readline-sync');

const num = readline.question('num = ')
const qtd = readline.question('Números Primos <br> Quantos numeros primos você deseja ver? ')

function listar(qtd) {

    let contador = 0;
    
    while (contador < qtd){
        if(primo(num)){
            console.log (num);
            contador++
        }
        else{
            
        }
        
    }
}



function primo(num) {


    let divisor = 2; //começa por dois e vai aumentando
    while (num % divisor != 0) { //enquanto o resto da divisão der diferente de 0, o divisor vai aumentando
        divisor++
    };
    if (num != divisor) { //se o divisor aumentar até chegar ao próprio número, significa que ele é primo
        return false;
    }
    return true
}

console.log(listar(qtd));