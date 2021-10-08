const express = require('express');
const router = express.Router();

const Book = require('../models/booksMongo');

router.get('/', async (req, res) => {
  const books = await Book.getAll();
  res.json(books);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;

  const book = await Book.getById(id);
  res.status(200).json(book);
});

router.post('/', async (req, res) => {
  const { title, author_id } = req.body;

  if(!Book.isValid(title, author_id)) return res.status(400).json({ error: 'Invalid data' });

  await Book.create(title, Number(author_id));

  res.status(201).json({ message: 'Book created' });
})

module.exports = router;