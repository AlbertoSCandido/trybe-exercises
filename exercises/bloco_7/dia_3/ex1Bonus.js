const assert = require('assert');

function getChange(payable, paid) {
  const coins = [200, 100, 50, 20, 10, 5, 2, 1];
  const change = [];
  const { length } = coins;
  let remaining = paid - payable;

  for (let i = 0; i < length; i +=1) {
    if (coins[i] <= remaining) {
      change.push(coins[i]);
      remaining -= coins[i];
      i -= 1;
    }
  }

  return change;
}

console.log(getChange(12, 300));

assert.strictEqual(typeof getChange, 'function');
assert.deepStrictEqual(getChange(215,300), [50, 20, 10, 5]);

// Uma chamada bem-sucedida de uma função getChange deve retornar uma lista com o valor das moedas que serão devolvidas à pessoa
// Essa lista deve estar no formato decrescente de valor
// É permitida a repetição do valor de moedas, por exemplo, [200, 100, 50, 20, 10, 2, 2]
// Um erro com a mensagem paid value is not enough deve ser lançado se o valor pago for menor que o valor da compra

// Moedas disponíveis
// As moedas serão representadas pelos valores 200 , 100 , 50 , 20 , 10 , 5 , 2 e 1 . Abaixo, existe uma lista de correspondência com os valores em reais (R$)
// 200 (R$2)
// 100 (R$1)
// 50 (R$0,50)
// 20 (R$0,20)
// 10 (R$0,10)
// 5 (R$0,05)
// 2 (R$0,02)
// 1 (R$0,01)
