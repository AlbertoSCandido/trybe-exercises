const { it, expect } = require("@jest/globals");

const professionalBoard = [
  {
    id: '8579-6',
    firstName: 'Ana',
    lastName: 'Gates',
    specialities: ['UX', 'Design'],
  },
  {
    id: '5569-4',
    firstName: 'George',
    lastName: 'Jobs',
    specialities: ['Frontend', 'Redux', 'React', 'CSS'],
  },
  {
    id: '4456-4',
    firstName: 'Leila',
    lastName: 'Zuckerberg',
    specialities: ['Context API', 'RTL', 'Bootstrap'],
  },
  {
    id: '1256-4',
    firstName: 'Linda',
    lastName: 'Bezos',
    specialities: ['Hooks', 'Context API', 'Tailwind CSS'],
  },
  {
    id: '9852-2-2',
    firstName: 'Jeff',
    lastName: 'Cook',
    specialities: ['Ruby', 'SQL'],
  },
  {
    id: '4678-2',
    firstName: 'Paul',
    lastName: 'Dodds',
    specialities: ['Backend'],
  },
];

// Pesquisa
const searchEmployee = (id, detail) => {
  const search = professionalBoard.find(({id : id2}) => id2 === id)
  if(!search) {
    throw new Error('ID não identificada')
  };
  if (!search[detail]) {
    throw new Error('Informação indisponível')
  };
  return search[detail]
};

describe('Requisito bonus', () => {
  it('Testa se a função searchEmployee é definida', () => {
    expect(searchEmployee).toBeDefined();
  });

  it('Testa se searchEmployee é uma função', () => {
    expect(typeof searchEmployee).toBe('function');
  });

  it('Testa se ao receber id inválido retorna erro: ID não identificada', () => {
    expect(() => {searchEmployee('xablau', 'firstName')}).toThrow();
    expect(() => {searchEmployee('xablau', 'firstName')}).toThrowError(new Error('ID não identificada'))
  })

  it('Testa se uma informação que se quer acessar não existir retorna erro: Informação indisponível', () => {
    expect(() => {searchEmployee('9852-2-2', 'xablau')}).toThrow();
    expect(() => {searchEmployee('9852-2-2', 'xablau')}).toThrowError(new Error('Informação indisponível'));
  })

  it('Ao receber parametros válidos retorne o objeto esperado', () => {
    expect(['Backend']).toEqual(searchEmployee('4678-2', 'specialities'))
    expect('Cook').toBe(searchEmployee('9852-2-2', 'lastName'))
  })
})