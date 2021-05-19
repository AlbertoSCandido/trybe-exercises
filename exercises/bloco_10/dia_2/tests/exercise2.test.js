// Utilizando a sintaxe de Promise , faça um teste que verifique o resultado da função getUserName para o caso em que o usuário é encontrado, e também um teste para o caso em que o usuário não é encontrado.

// const { it, expect } = require('@jest/globals');
// const { describe } = require('yargs');
const { findUserById, getUserName } = require('../exercise2&3');

describe('Exercicio 2 - testes com sintaxe de promise', () => {
  test('Testando retorno da Promise', () => {
    expect.assertions(1);
    return getUserName('4').then(response => {
      expect(response).toBe('Mark');
    })
  })
})