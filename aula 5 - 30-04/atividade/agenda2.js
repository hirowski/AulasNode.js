import readline from "readline-sync";

const cls = '\x1Bc';

const nome = [];
const telefone = [];
const cidade = [];

function AdicionarAgenda() {
    const n = readline.question('nome: ');
    const t = readline.question('telefone: ');
    const c = readline.question('cidade: ');

    nome.push(n);
    telefone.push(t);
    cidade.push(c);
}

while (true) { //laço infinito
    console.log(cls);
    AdicionarAgenda();

    const continuar = readline.question('Continuar? (s/n)');

    if (continuar != 's'){
        break;
    }
    
}

for(let i = 0; i<nome.length; i++){
    console.log(`Nome: ${nome[i]}\t Telefone: ${telefone[i]} \t Cidade: ${cidade[i]}`)
}