// const { test, jest, expect } = require('@jest/globals');
const data = require('../exercise1');

// Utilizando o mock, defina o retorno padrão como 10. Teste se a função foi chamada, qual seu retorno e quantas vezes foi chamada.


test('Utilizando o mock, defina o retorno padrão como 10. Teste se a função foi chamada, qual seu retorno e quantas vezes foi chamada', () => {
  data.randomNumber = jest.fn()
    .mockReturnValue(10);
  
  data.randomNumber();
  expect(data.randomNumber).toHaveBeenCalled();
  expect(data.randomNumber()).toBe(10);
  expect(data.randomNumber).toHaveBeenCalled();
})