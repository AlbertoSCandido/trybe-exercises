// Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

// Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

function containsA() {

  let nomes = names.reduce((acum, nome) => acum + nome, '')
  nomes = nomes.split('');
  return nomes.reduce((acum, letter) => letter === 'A'|| letter === 'a' ? acum + 1 : acum, 0)
}

// console.log(containsA());

assert.deepStrictEqual(containsA(), 20);