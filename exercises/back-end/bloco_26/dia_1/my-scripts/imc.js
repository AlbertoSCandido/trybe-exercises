const readline = require('readline-sync');

function calcIMC() {
  const peso = readline.questionInt('Qual o seu peso?');
  const altura = readline.questionFloat('Qual a sua altura?');
  const IMC = peso / Math.pow(altura, 2);
  return IMC;
}

console.log(calcIMC());