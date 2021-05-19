// Reescreva o teste do exercício anterior, desta vez utilizando a sintaxe de async/await .
// Dica: Utilize o try/catch para o caso de erro.

// const { it, expect } = require('@jest/globals');
const { getUserName } = require('../exercise2&3');

describe('Exercicio 2 - testes com sintaxe async/await', () => {
  it('Testando retorno da Promise', async () => {
    const result = await getUserName('4');
    expect(result).toBe('Mark');
  })

  it('Testando retorno da Promise', async () => {
    const result = await getUserName('5');
    expect(result).toBe('Paul');
  })

  it('Testando reject da Promise', async () => {
    try {
      await getUserName('3');
    } catch (error) {
      expect(error).toEqual({ error : 'User with 3 not found.'})
    }
  })
})