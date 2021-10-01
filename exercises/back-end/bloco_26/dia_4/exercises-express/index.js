const express = require('express');
const bodyParser = require('body-parser');

const fs = require('fs');

const app = express();
app.use(bodyParser.json());


//Exercício 1
app.get('/ping', (req, res) => {
  const token = req.headers.authorization;

  if(!token || token.length !== 16) return res.status(401).json({ message: 'Invalid Token'});

  res.status(200).json({ message: 'pong' })
})


// Exercício 2
app.post('/hello/:name', (req, res) => {
  const token = req.headers.authorization;

  if(!token || token.length !== 16) return res.status(401).json({ message: 'Invalid Token'});

  const { name } = req.params;
  
  res.status(200).json({ message: `Hello, ${name}!`});
})


// Exercício 3
app.post('/greetings/:name/:age', (req, res) => {
  const token = req.headers.authorization;

  if(!token || token.length !== 16) return res.status(401).json({ message: 'Invalid Token'});

  const { name, age } = req.params;

  if(Number(age) > 17) return res.status(200).json({ message: `Hello, ${name}!`});

  res.status(401).json({ message: 'Unauthorized'});
});

// Exercício 4
app.put('/users/:name/:age', (req, res) => {
  const token = req.headers.authorization;

  if(!token || token.length !== 16) return res.status(401).json({ message: 'Invalid Token'});

  const { name, age } = req.params;

  res.status(200).json({ message: `Seu nome é ${name} e você tem ${age} anos de idade`})
});

// Exercicio 6
app.get('/simpsons', (_req, res) => {
  const token = req.headers.authorization;

  if(!token || token.length !== 16) return res.status(401).json({ message: 'Invalid Token'});

  const response = JSON.parse(fs.readFileSync('./simpsons.json', 'utf8'));

  if (response) return res.status(200).json(response);

  res.status(500)
});

// Exercício 7
app.get('/simpsons/:id', (req, res) => {
  const token = req.headers.authorization;

  if(!token || token.length !== 16) return res.status(401).json({ message: 'Invalid Token'});

  const { id } = req.params;

  const response = JSON.parse(fs.readFileSync('./simpsons.json', 'utf8'));
  const simpson = response.find(caracter => Number(caracter.id) === Number(id));

  if (simpson) return res.status(200).json(simpson);

  res.status(404).json({ message: 'Simpson not found' });
});

//Exercício 8
app.post('/simpsons', (req, res) => {
  const token = req.headers.authorization;

  if(!token || token.length !== 16) return res.status(401).json({ message: 'Invalid Token'});
  
  const { id, name } = req.body;

  const response = JSON.parse(fs.readFileSync('./simpsons.json', 'utf8'));
  const simpson = response.find(caracter => Number(caracter.id) === Number(id));
  if(simpson) return res.status(409).json({ message: 'ID already exists' });

  response.push({ id, name });

  fs.writeFileSync('./simpsons.json', JSON.stringify(response));
  res.status(204).end();
});

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});
