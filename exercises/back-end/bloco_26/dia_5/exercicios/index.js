const express = require('express');
const axios = require('axios');
const cors = require('cors');
const userRouter = require('./userRouter');
const { validateToken } = require('./validateToken');
const ENDPOINTEXTERNALAPI = 'https://api.coindesk.com/v1/bpi/currentprice/BTC.json';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/user', userRouter);

app.get('/btc', validateToken, async (_req, res) => {
  const result = await axios.get(ENDPOINTEXTERNALAPI);

  res.status(200).json(result.data);
});


app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});