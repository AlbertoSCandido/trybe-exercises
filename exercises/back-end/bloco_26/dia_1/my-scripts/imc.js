const readline = require('readline-sync');

function calcIMC() {
  const peso = readline.questionInt('Qual o seu peso?');
  const altura = readline.questionFloat('Qual a sua altura?');
  const IMC = peso / Math.pow(altura, 2);
  let mensagem = '';

  if(IMC < 18.5) {
    mensagem = 'Abaixo do peso (magreza)'
  } else if(IMC < 24,9) {
    mensagem = 'Peso normal';
  } else if(IMC < 29,9) {
    mensagem = 'Acima do peso (sobrepeso)';
  } else if(IMC < 34,9) {
    mensagem = 'Obesidade grau I';
  } else if (IMC < 39,9) {
    mensagem = 'Obesidade grau II';
  } else {
    mensagem = 'Obesidade graus III e IV';
  }

  return `IMC = ${IMC} - ${mensagem}`;
}

console.log(calcIMC());