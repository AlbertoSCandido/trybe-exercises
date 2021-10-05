const express = require('express');
const axios = require('axios');
const cors = require('cors');
const userRouter = require('./userRouter');
const postsRouter = require('./postsRouter');
const teamsRouter = require('./teamsRouter');
const btcRouter = require('./btcRouter');
const { validateToken } = require('./validateToken');
const ENDPOINTEXTERNALAPI = 'https://api.coindesk.com/v1/bpi/currentprice/BTC.json';
const errorMiddleware = require('./errorMiddleware');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/user', userRouter);
app.use('/posts', postsRouter);
app.use('/teams', teamsRouter);
app.use('/btc', btcRouter);

app.use(errorMiddleware);

app.use("*", (req, res)=> {
  res.status(404).json({ "message": "Opsss, route not found!" });
});

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});