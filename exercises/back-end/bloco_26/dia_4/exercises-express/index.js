const express = require('express');

const app = express();

app.get('/ping', (req, res) => {
  res.status(200).json({ message: 'pong' })
})

app.post('/hello/:name', (req, res) => {
  const { name } = req.params;

  res.status(200).json({ message: `Hello, ${name}`});
})

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});
