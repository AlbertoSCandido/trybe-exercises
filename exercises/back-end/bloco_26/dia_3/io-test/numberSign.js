// Exercício 2 : Implemente a função apresentada no exercício 1, garantindo que ela irá passar em todos os testes que você escreveu.

function numberSign(n) {
  if(n === 0) return 'neutro';
  if (n > 0) return 'positivo';
  if(n < 0) return 'negativo';
}

module.exports = numberSign;