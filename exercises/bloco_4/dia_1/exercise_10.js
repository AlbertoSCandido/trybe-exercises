let valorCusto = 10;
let valorVenda = 20;
let valorCustoTotal = valorCusto + 20/100 * valorCusto;

if (valorCusto < 0 || valorVenda < 0) {
    console.log('Erro');
} else {
    lucro = valorVenda * 1000 - valorCustoTotal * 1000;
}

console.log(lucro);