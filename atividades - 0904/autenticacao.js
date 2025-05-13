const readline = require('readline-sync');


/*function autenticar() {

    const login = readline.question('Insira seu login: ')

    const senha = Number(readline.question('Insira a Senha: '));

    if (login === 'aluno@gmail.com' && senha == '0000') {
        console.log('Bem Vindo(a)!');
        return;

    }
};*/




let tentativas;

for (tentativas = 2; tentativas <= 2 && tentativas >= 0; tentativas -= 1) {

    const login = readline.question('Insira seu login: ')

    const senha = Number(readline.question('Insira a Senha: '));

    if (login === 'aluno@gmail.com' && senha == '0000') {
        console.log('Bem Vindo(a)!');
        break;

    }
    else {
        console.log('Usuário ou Senha incorretos');
    }

}






/*for (passo = 0; passo < 5; passo++) {
    // Executa 5 vezes, com os valores de passos de 0 a 4.
    console.log("Ande um passo para o leste");
  }
*/
