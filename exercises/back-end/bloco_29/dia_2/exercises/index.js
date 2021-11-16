const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Funcionando');
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});