// const { it, expect } = require('@jest/globals');
// const { describe } = require('yargs');
// const { expect } = require('@jest/globals');

const uppercase = require('../exercise1');

describe('Exercicio 1 - Uppercase', () => {
  it('Verifica a chamada do callback', () => {
    uppercase('Baleia', (param) => {
      expect(param).toBe('BALEIA');
      expect(param).toHaveLength(6);
    })
  })
})