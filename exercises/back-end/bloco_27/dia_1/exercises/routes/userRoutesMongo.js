const express = require('express');
const router = express.Router();

const User = require('../models/userModelMongo');

router.post('/', async (req, res) => {

  if (!User.isValid(req.body)) {
    return res.status(400).json({
      message: 'Invalid user data',
      error: true
    });
  }

  await User.createUser(req.body)
    .then(user => res.status(201).json({ user }));
});

module.exports = router;