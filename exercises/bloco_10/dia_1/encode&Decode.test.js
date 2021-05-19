// const { describe } = require('yargs');
// const { test, expect } = require('@jest/globals');
const { test, expect } = require('@jest/globals');
const { encode, decode} = require('./playgroundFunctions');

describe('Parte II - requisito 1', () => {
  test('Teste se encode e decode é uma função', () => {
    expect('function').toBe(typeof encode)
    expect('function').toBe(typeof decode)
  })

  test('Para a função encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente', () => {
    expect('1, 2, 3, 4, 5').toBe(encode('a, e, i, o, u'))
  })

  test('Para a função decode teste se os números 1, 2, 3, 4 e 5 são convertido nas vogais a, e, i, o, u , respectivamente', () => {
    expect(decode('1, 2, 3, 4, 5')).toBe('a, e, i, o, u')
  })

  test('Teste se as demais letras/números não são convertidos para cada caso', () => {
    expect('b1l231').toBe(encode('baleia'))
    expect('baleia').toBe(decode('b1l231'))
  })

  test('Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro', () => {
    expect(encode('baleia')).toHaveLength(6);
  })
})

