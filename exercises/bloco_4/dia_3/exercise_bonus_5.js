// 5- Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será sempre ímpar:
// Copiar
// Por último, façamos com que a variável seja incrementada com o valor correspondente a cada loop;
// n = 7

//    *
//   * *
//  *   *
// *******

n = 9;
let rigth = 0;
let left = 0;
let x = '*'
let y = ' '

for (let line = 1; line <= n; line += 2) {
    rigth = (n - line) / 2;
    left = (n - line) / 2;
    let center = line - 2;

    if (line < 2) {
        console.log(y.repeat(left) + x.repeat(line) + y.repeat(rigth));
    } else if (line > 1 && line < n) {
        console.log(y.repeat(left) + x + y.repeat(center) + x + y.repeat(rigth));
    } else if (line = n) {
        console.log(x.repeat(line));
    }
}