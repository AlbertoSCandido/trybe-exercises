// Exercício 2 : Implemente a função apresentada no exercício 1, garantindo que ela irá passar em todos os testes que você escreveu.

function numberSign(n) {
  if(typeof n !== 'number') return 'o valor deve ser um número'
  if (n > 0) return 'positivo';
  if(n < 0) return 'negativo';
  if(n === 0) return 'neutro';
}

console.log(numberSign('0'));

module.exports = numberSign;