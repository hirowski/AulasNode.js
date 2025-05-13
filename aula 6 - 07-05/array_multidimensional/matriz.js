//array multidimensional - mais do que uma linha e mais do que uma coluna

const matriz = [[-5,2], [7,10]]

for (let linha = 0; linha< 2; linha ++) {
  for (let coluna = 0; coluna < 2 ; coluna ++ ){
    console.log (matriz [ linha ] [ coluna ] **2 );
  }
}
