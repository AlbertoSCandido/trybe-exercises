const express = require('express');
const router = express.Router();

const posts = [];

router.post('/:id', (req, res) => {
  const { id } = req.params;

  posts.push(id);

  res.status(200).json({ message: `add ${id} successfully`})

});

router.get('/', (req, res) => {
  res.status(200).json({ posts: posts});
})

router.all('/', (req, res) => {
  res.status(404).json({ "message": "post not found" });
})

module.exports = router;