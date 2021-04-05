// Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
// Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; .
// Valor esperado no retorno da função: Fernanda .

let names = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']

function biggestName (names) {
  let letters = '';
  for (let index = 0; index < names.length; index += 1) {
    if (names[index].length > letters.length) {
      letters = names[index];
    }
  }
  return letters;
}

console.log(biggestName(names));