const qtd = Number(readline.question('Quantidade de numeros para a serie de fibonacci: '))
let n1 =1, n2=1, n3 = 0; 

if(qtd ===1){
  console.log(n1)
}else if(qtd ===2){
  console.log(n1,n2);
}else if(qtd >2){
  console.log(`${n1}\n${n2}`);
  for(let i = 2; i <= qtd; i++){
n3 = n1 +n2;
console.log(n3);
console.log(`** ${(n2/n1).toFixed(3)}`);
n1 = n2;
n2 = n3; 
}}