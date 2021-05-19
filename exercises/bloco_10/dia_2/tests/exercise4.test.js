// const { describe } = require('yargs');
const getRepos = require('../exercise4');

describe('Testando retorno getRepos com url https://api.github.com/orgs/tryber/repos', () => {
  it('Verifica se repositório sd-01-week4-5-project-todo-list e sd-01-week4-5-project-meme-generator se encontram na lista', () => {
    expect.assertions(2);
    return getRepos('https://api.github.com/orgs/tryber/repos').then(response => {
      expect(response).toContain('sd-01-week4-5-project-todo-list');
      expect(response).toContain('sd-01-week4-5-project-meme-generator')
    })
  })
})

describe('Testando retorno getRepos com url https://api.github.com/orgs/tryber/repos com async e await', () => {
  it('Verifica se repositório sd-01-week4-5-project-todo-list e sd-01-week4-5-project-meme-generator se encontram na lista', async () => {
    const response = await getRepos('https://api.github.com/orgs/tryber/repos');
    expect(response).toContain('sd-01-week4-5-project-todo-list');
    expect(response).toContain('sd-01-week4-5-project-meme-generator')
  })
})

