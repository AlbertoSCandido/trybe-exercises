// 2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:
// Copiar
// n = 5

// *
// **
// ***
// ****
// *****

n = 5;
let x = '';
let y = '*';

for (let index = 0; index < n; index += 1) {
    x += y;
    console.log(x);
}