const readline = require('readline-sync');

function fibonacci(n) {
  if (n <= 1) {
    console.log(1);
  }

  let before = 1;
  let actual = 1;
  let next = 1;

  for(let index = before; index <= n; index+=1) {
    console.log(next);
    before = next + actual;
    actual = next;
    next = before;
  }
}

fibonacci(readline.questionInt("Até qual posição na sequência de fibonacci você gostaria de ver?\n"));