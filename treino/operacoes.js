import inquirer from "inquirer";
import chalk from "chalk";

//menu de perguntas
async function menu(){
    const perguntas = [
        {
            type: 'list',
            name: 'opcao',
            message: chalk.bgMagenta.italic('Operações básicas'),
            choices:[
                {name: chalk.cyan('Somar números'), value: 'somar'},
                {name: chalk.cyan('Subtrair números'), value: 'subtrair'},
                {name: chalk.cyan('Dividir números'), value: 'dividir'},
                {name: chalk.cyan('Multiplicar números'), value: 'subtrair'},
                {name: chalk.cyan('Encontrar o mmc'), value: 'mmc'},
                {name: chalk.cyan('Encontrar mdc'), value: 'mdc'}
            ]
        }
    ];

    try{
        const resposta = await inquirer.prompt(perguntas);

        //funcionalidade
        switch(resposta.opcao){
            case 'somar':
                const qtd = await inquirer.prompt([
                    {
                        type: 'input',
                        name: 'respostaQtd',
                        message:('Insira a quantidade de números que deseja somar: ')
                    }
                ])

                if (isNaN(qtd.resposta) && qtd.resposta<=1 ){
                    console.log('Resposta inválida!');
                }
                else {
                    for (let i = 0; i < qtd.respostaQtd; i++  ){
                        const numerosSoma = await inquirer.prompt([
                            {
                                
                            }
                        ])
                    }
                }


        }
    }
    catch (error) {
        console.error(chalk.red('Ocorreu um erro inesperado'), error);

    }
}

menu();