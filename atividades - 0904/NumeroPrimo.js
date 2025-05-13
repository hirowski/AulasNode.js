const readline = require ('readline-sync');

const num = readline.question ('Numeros Primos <br> Insira um número: ');

function primo(num){
    let divisor = 2; //começa por dois e vai aumentando
    while (num % divisor != 0){ //enquanto o resto da divisão der diferente de 0, o divisor vai aumentando
        divisor ++
    };

    if (num == divisor){ //se o divisor aumentar até chegar ao próprio número, significa que ele é primo
        console.log (`O número ${num} é primo!`);
    }
    else{
        console.log(`O numero ${num} não é primo!`); //s o divisor parar antes de chegar no num, não é primo
        console.log(`Mínimo divisor: ${divisor}`);
        console.log(`Todos os divisores de ${num}: `);
       
        for (let i = 1; i <= num; i++){
            if (num % i == 0){
                console.log (i)
            };
        };
    };
    
};

console.log(primo(num));