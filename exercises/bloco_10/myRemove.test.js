// const { it, expect } = require('@jest/globals');
// const { describe } = require('yargs');
// const { test } = require('@jest/globals');

const { it, expect } = require('@jest/globals');
const myRemove = require('./myRemove');

describe('Requisito 2', () => {
  it('Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  })

  it('Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
    expect([1, 2, 3, 4]).not.toEqual(myRemove([1, 2, 3, 4], 3));
  })

  it('Verifique se o array passado por parâmetro não sofreu alterações', () => {
    const arr = [1, 2, 3, 4];
    myRemove(arr,3);
    expect([1, 2, 3, 4]).toEqual(arr);
  })

  it('Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  })
})