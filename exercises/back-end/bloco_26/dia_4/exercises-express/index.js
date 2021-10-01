const express = require('express');

const app = express();

app.get('/ping', (req, res) => {
  res.status(200).json({ message: 'pong' })
})

app.post('/hello/:name', (req, res) => {
  const { name } = req.params;
  
  res.status(200).json({ message: `Hello, ${name}!`});
})

app.post('/greetings/:name/:age', (req, res) => {
  const { name, age } = req.params;

  if(Number(age) > 17) return res.status(200).json({ message: `Hello, ${name}!`});

  res.status(401).json({ message: 'Unauthorized'});
});

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});
