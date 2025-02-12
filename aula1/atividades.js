//média

{
    const num1 = 10
    const num2 = 15

    console.log(`Média = ${(num1+num2)/2}. `);
}

/*
Também é possível fazer assim:
{
    let nota1 = 8
    let nota2 = 10

    let media = (nota1 + nota2) /2;

    console.log(`Média das notas: ${media}`)
}
*/

//IMC

/*{
    const peso = 45
    const altura = 1.53

    console.log(`Seu IMC é: ${peso/(altura**2)}. `);
}
*/

//para tirar os números decimais

{
    let peso = 65
    let altura = 1.74

    let imc = peso / altura **2

    console.log(`O imc é:`, imc.toFixed(2))
}


//Temperatura

{
    const celcius = 45

    console.log(`A temperatura em fahrenheit é: ${ (celcius * 9/5) + 32}. `);
}

//Preço final

{
    const preco = 100
    const desconto = 30

    console.log(`O preço final do produto, com 30% de desconto, é: ${preco - (preco*(30/100))}. `)
}