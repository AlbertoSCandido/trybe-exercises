// 1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por exemplo:
// Copiar
// n = 5

// *****
// *****
// *****
// *****
// *****

let n = 5;
let x = '';
let y = '*';

for (let index = 0; index < n; index += 1) {
    x += y;
}

for (let secondIndex = 0; secondIndex < n; secondIndex += 1) {
    console.log(x);
}