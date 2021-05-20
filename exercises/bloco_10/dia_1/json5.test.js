// const { it, expect, test } = require("@jest/globals");
// const { describe } = require("yargs");

const obj1 = {
  title: 'My Title',
  description: 'My Description',
};

const obj2 = {
  description: 'My Description',
  title: 'My Title',
};

const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};

describe('Requisito 5', () => {

  test('Compare dois objetos (JSON) para verificar se são idênticos ou não - 1 e 3', () => {
    expect(obj1).not.toEqual(obj3)
  })

  test('Compare dois objetos (JSON) para verificar se são idênticos ou não - 1 e 2', () => {
    expect(obj1).toEqual(obj2)
  })

  test('Compare dois objetos (JSON) para verificar se são idênticos ou não - 2 e 3', () => {
    expect(obj1).not.toEqual(obj3)
  })
})