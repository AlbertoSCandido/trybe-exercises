const express = require('express');
const crypto = require('crypto');

const app = express();

app.use(express.json());

function validateEmailAndPassword(req, res, next) {
  const { email, password } = req.body;

  const expEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if(!email || !password || !expEmail.test(email) || password.length < 4 || password.length > 8) {
    return res.status(400).json({ message: 'email or password is incorrect'});
  }

  next()
}

app.post('/user/register', validateEmailAndPassword, (req, res) => {
  const { username} = req.body;

  if(!username || username.length <= 3) {
    return res.status(400).json({ message: 'ivalid data'});
  }

  res.status(200).json({ message: 'user created' });
});

app.post('/user/login', validateEmailAndPassword, (_req, res) => {
  const randomTokem = crypto.randomBytes(16).toString('base64');

  res.status(200).json({ "token": randomTokem });
});


app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});