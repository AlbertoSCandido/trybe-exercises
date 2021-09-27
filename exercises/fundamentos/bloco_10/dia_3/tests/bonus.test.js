const API_URL = 'https://icanhazdadjoke.com/';

const fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve({
      'id': '7h3oGtrOfxc',
      'joke': 'Whiteboards ... are remarkable.',
      'status': 200
    })
  })
})

const fetchJoke = () => {
  return fetch(API_URL, { headers: { Accept: 'application/json' }})
    .then(response => response.json())
    .then(data => data.joke);
};


const resultApi = {
  'id': '7h3oGtrOfxc',
  'joke': 'Whiteboards ... are remarkable.',
  'status': 200
}


test('verifique a chamada dessa API para um resultado específico. Para isso, faça um mock do fetch , que faz a chamada à API , utilizando os dados ACIMA', () => {
  return expect(fetchJoke()).resolves.toEqual(resultApi.joke)
})

// Exercicio realizado usando como base gabarito do course.