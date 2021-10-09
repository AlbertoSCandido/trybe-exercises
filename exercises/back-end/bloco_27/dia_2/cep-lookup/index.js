const express = require('express');
const cepRouter = require('./routes/Cep')

const errorMiddleware = require('./middlewares/errorMiddleware');
const app = express();

app.use(express.json());

app.get('/ping', (_req, res) => {
  res.json({ "message": "pong!" });
});

app.use('/cep', cepRouter);

app.use(errorMiddleware);

app.listen(3000, () => {
  console.log('Server started on port 3000');
});