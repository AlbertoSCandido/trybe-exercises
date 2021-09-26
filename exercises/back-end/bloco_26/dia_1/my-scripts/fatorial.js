const readline = require('readline-sync');

function fatorial(n) {
  if (n <= 0) {
    return 1
  }

  return n * fatorial(n -1);
}

console.log(fatorial(readline.questionInt("De qual número você quer saber o fatorial? (O número deve ser maior do que 0) \n")));
