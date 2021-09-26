const readline = require('readline-sync');

let randomNumber = 0;

function getRandomNumber() {
  randomNumber = Math.ceil(Math.random() * 10);
}

function aposta() {
  const numeroApostado = readline.questionInt("Aposte um número entre 1 e 10");

  getRandomNumber();

  if (randomNumber === numeroApostado) {
    console.log("Parabéns, você ganhou");
  } else {
    console.log("Não foi dessa vez");
  }
}

function jogo () {
  aposta();

  const playAgain = readline.question("Quer jogar de novo? tecle 's'")

  if(playAgain === 's') {
    jogo();
  } else {
    console.log('Ok, boa sorte!!');
  }
}

jogo();