import readline from "readline-sync";
import chalk from "chalk";

/*let nomes = [];
let telefones = [];
let cidades = [];*/

const agenda = [];

console.log(chalk.bgCyanBright('Agenda de Contatos'))

function registrarContato() {
    const nome = readline.question(chalk.blueBright('Insira o nome: '));
    const telefone = readline.question(chalk.blueBright('Insira o telefone: '));
    const cidade = readline.question(chalk.blueBright('Insira a cidade: '));

    agenda.push(`NOME: ${nome} - TELEFONE: ${telefone} - CIDADE: ${cidade}`);

    const resposta = readline.question('Deseja Continuar? (s/n): ')
    if (resposta == 's') {
        registrarContato();
    }
    else {
        for (i in agenda){ //cada linha é "i" - isso separa as linhas
            console.log(agenda[i]);
        }
    }

}

registrarContato();


