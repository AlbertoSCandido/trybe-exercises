// Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
// Array de teste: [2, 3, 2, 5, 8, 2, 3]; .
// Valor esperado no retorno da função: 2 .

let numbers = [2, 3, 2, 5, 8, 2, 3];

function moreRepeated (array) {
let count = 0;
secondCount = 0;
let number = 0;
for (let index = 0; index < array.length; index +=1) {
  for (let secondIndex = 0; secondIndex < array.length; secondIndex += 1) {
    if (array[secondIndex] = array[index]) {
      count += 1;
    }
    if (secondCount < count) {
      secondCount = count;
      number = array[index];
    }
  }
  return number;
}
}

console.log(moreRepeated(numbers));