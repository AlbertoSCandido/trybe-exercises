const data = require('../exercise1')

// Com a mesma função do exercício anterior, utilizando o mock, crie uma nova implementação, que deve receber dois parâmetros e retornar a divisão do primeiro pelo segundo. Essa implementação deve ocorrer uma única vez. Faça os testes necessários.

test('utilizando o mock, crie uma nova implementação, que deve receber dois parâmetros e retornar a divisão do primeiro pelo segundo.', () => {
  data.randomNumber = jest.fn()
    .mockImplementation((a, b) => a / b);

  expect(data.randomNumber(4,2)).toBe(2)
})