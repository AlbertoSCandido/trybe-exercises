const readline = require('readline-sync');

function calcVelocidade() {
  const distancia = readline.questionInt('Qual a distancia percorrida em metros?');
  const tempo = readline.questionInt('Em qual tempo?');

  return distancia / tempo;
}

console.log(calcVelocidade());