// Utilizando as mesmas funções do exercício anterior, repita a implementação para a primeira função. Após repetir a implementação, restaure a implementação original e crie os testes necessários para validar.

  const data = require('../exercise4')

test('Faça o mock do arquivo. Faça uma nova implementação para a primeira função, mas agora ela deve retornar a string em caixa baixa. Para a segunda função, uma nova implementação deve retornar a última letra de uma string. A terceira deve receber três strings e concatená-las.', () => {
  data.upperCase = jest.spyOn(data, 'upperCase')
    .mockImplementation((str) => str.toLowerCase());

  expect(data.upperCase('Baleia')).toEqual('baleia');

  data.getFirstLetter = jest.spyOn(data, 'getFirstLetter')
    .mockImplementation(str => str[str.length - 1])

  expect(data.getFirstLetter('Baleia')).toEqual('a')

  data.concatStr = jest.spyOn(data, 'concatStr')
    .mockImplementation((fStr, sStr, tStr) => fStr + sStr + tStr)

  expect(data.concatStr('ba', 'le', 'ia')).toEqual('baleia')

  data.upperCase.mockRestore()
  data.getFirstLetter.mockRestore()
  data.concatStr.mockRestore()
})

test('Verifica se implementação original foi restaurada', () => {
  expect(data.upperCase('baleia')).toEqual('BALEIA')
  expect(data.getFirstLetter('Baleia')).toEqual('B');
  expect(data.concatStr('Bal', 'eia')).toEqual('Baleia')
})