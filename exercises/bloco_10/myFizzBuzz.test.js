// const { test, expect } = require('@jest/globals');
// const { describe } = require('yargs');
const { test, expect } = require('@jest/globals');
const myFizzBuzz = require('./myFizzBuzz');

describe('Requisito 4', () => {
  test('Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado', () => {
    expect('fizzbuzz').toBe(myFizzBuzz(15));
  })

  test('Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado', () => {
    expect('fizz').toBe(myFizzBuzz(6))
  })

  test('Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado', () => {
    expect('buzz').toBe(myFizzBuzz(40))
  })
  
  test('Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado', () => {
    expect(7).toBe(myFizzBuzz(7))
  })

  test('Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado', () => {
    expect(myFizzBuzz('2')).toBeFalsy()
  })
})