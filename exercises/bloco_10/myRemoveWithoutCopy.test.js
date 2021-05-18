// const { describe } = require('yargs');
// const { expect } = require('@jest/globals');
// const { it, expect } = require('@jest/globals');
const { it, expect } = require('@jest/globals');
const myRemoveWithoutCopy = require('./myRemoveWithoutCopy');

describe('Requisito 3', () => {
  it('Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array esperado', () => {
    expect([1, 2, 4]).toEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3));
  })

  it('Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  })

  it('Faça uma chamada para a função myRemoveWithoutCopy e verifique se o array passado por parâmetro sofreu alterações', () => {
    let arr = [1, 2, 3, 4];
    myRemoveWithoutCopy(arr, 3);
    expect(arr).toEqual([1, 2, 4]);
  })

  it('Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array esperado', () => {
    expect([1, 2, 3, 4]).toEqual(myRemoveWithoutCopy([1, 2, 3, 4], 5));
  })
})