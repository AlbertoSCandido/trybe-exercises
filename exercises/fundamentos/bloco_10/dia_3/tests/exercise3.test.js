// Ainda com a mesma função do primeiro exercício, utilizando o mock, crie uma nova implementação que receba três parâmetros e retorne sua multiplicação. Após fazer os devidos testes para ela, resete sua implementação e crie uma nova, que receba um parâmetro e retorne seu dobro. Faça os testes necessários.

const data = require('../exercise1')

test('utilizando o mock, crie uma nova implementação, receba três parâmetros e retorne sua multiplicação. Após fazer os devidos testes para ela, resete sua implementação e crie uma nova, que receba um parâmetro e retorne seu dobro.', () => {
  randomNumber = jest.spyOn(data, 'randomNumber')
    .mockImplementation((a, b, c) => a * b * c);

  expect(randomNumber(4, 2, 2)).toBe(16);

  randomNumber.mockRestore();
  randomNumber = jest.fn()
    .mockImplementation(a => a * 2);
  
  expect(randomNumber(9)).toBe(18)
})