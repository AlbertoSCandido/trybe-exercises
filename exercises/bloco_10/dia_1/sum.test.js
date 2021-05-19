// const { it, expect } = require('@jest/globals');
// const { describe } = require('yargs');
const { test, expect } = require('@jest/globals');
const sum = require('./sum');

describe('Requisito 1', () => {
  test('Verifica se 4 + 5 é igual a 9', () => {
    expect(9).toEqual(sum(4,5))
  })

  test('Verifica se 0 + 0 é igual a 0', () => {
    expect(0).toEqual(sum(0, 0))
  })

  test('Verifica se função retorna erro caso um parametro não seja number', () => {
    expect(() => { sum(9, '8') }).toThrow();
  })

  test('Verifica se erro jogado ao receber parametro que não seja number é igual a : parameters must be numbers', () => {
    expect(()=> { sum('1', 2) }).toThrowError(new Error('parameters must be numbers'))
  })
})