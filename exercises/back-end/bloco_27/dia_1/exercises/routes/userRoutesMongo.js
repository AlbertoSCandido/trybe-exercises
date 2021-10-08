const express = require('express');
const router = express.Router();

const User = require('../models/userModelMongo');

router.get('/', async (_req, res, next) => {
  try {
    const users = await User.getAllUsers();
    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
})

router.get('/:id', async (req, res, next) => {
  const { id } = req.params;

  try {
    const user = await User.getById(id);

    if (!user) {
      return res.status(404).json({
        "error": true,
        "message": "Usuário não encontrado"
      });
    }

    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
})

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