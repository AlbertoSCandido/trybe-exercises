const express = require('express');

const app = express();

app.use(express.json());


app.post('/user/register', (req, res) => {
  const { username, email, password } = req.body;

  const expEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if(!email || !password || !username || username.length <= 3 || !expEmail.test(email) || password.length < 4 || password.length > 8) {
    return res.status(400).json({ message: 'ivalid data'});
  }

  res.status(200).json({ message: 'user created' });
});




app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});