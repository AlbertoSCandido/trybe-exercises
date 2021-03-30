// Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
// Array de teste: [2, 3, 6, 7, 10, 1]; .
// Valor esperado no retorno da função: 4 .

let array = [2, 3, 6, 7, 10, 1];

function maiorNumero(numero) {
  let index = 0;

  for (let secondIndex = 0; secondIndex < numero.length; secondIndex +=1) {
    
    if (numero[index] < numero[secondIndex]) {
      index = secondIndex;
    }
  }
  return index;
}

console.log(maiorNumero(array));