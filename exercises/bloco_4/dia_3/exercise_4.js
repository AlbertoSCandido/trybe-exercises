// 4- Depois, faça uma pirâmide com n asteriscos de base:
// Copiar
// n = 5

//   *
//  ***
// *****

n = 5
let rigth = 0;
let left = 0;
let x = '*'
let y = ' '

for (let line = 1; line <= n; line += 2) {
    rigth = (n - line) / 2;
    left = (n - line) / 2;
    console.log(y.repeat(left) + x.repeat(line) + y.repeat(rigth));
}