/*const notas = { 'mat': 9, 'bio': 5, 'geo': 10 }

//para exibir somente uma chave/valor
//console.log( notas.mat );

//para adicionar uma chave/valor
notas.fisica = 10;


//para exibir da forma desejada
for (let key in notas) {    //para cada nota dentro do objeto notas
    console.log(key, ':', notas[key])
}*/

//objeto dentro de objeto
const notas2 = {
    'ana': { 'mat': 10, 'bio': 4 },
    'livia': { 'mat': 6, 'bio': 2 }
}

//console.log(notas2.juca.bio);
//contador
let i = 1

for (let key in notas2) {

    for(let key2 in notas2[key]){
        
        console.log(i, '.', key, ':', key2, ':', notas2[key][key2]);
        i++

    }
}