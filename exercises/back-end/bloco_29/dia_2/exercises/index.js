const express = require('express');
const process = require('process');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send(`Variavel de ambiente NAME = ${process.env.ENVIRONMENT}`);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});