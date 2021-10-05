const express = require('express');
const router = express.Router();
const crypto = require('crypto');

const { validateEmailAndPassword } = require('./validateEmailAndPassword');

router.post('/register', validateEmailAndPassword, (req, res) => {
  const { username } = req.body;

  if(!username || username.length <= 3) {
    return res.status(400).json({ message: 'ivalid data'});
  }

  res.status(200).json({ message: 'user created' });
});

router.post('/login', validateEmailAndPassword, (_req, res) => {

  const randomTokem = crypto.randomBytes(16).toString('base64');

  res.status(200).json({ "token": randomTokem });

});

module.exports = router;