const express = require('express');

const Author = require('./controllers/Author');
const Books = require('./controllers/Books');
const errorMiddleware = require('./middlewares/error');

const app = express();

app.use(express.json());

app.get('/authors', Author.getAll);
app.get('/authors/:id', Author.findById);
app.post('/authors', Author.create);
app.get('/books', Books.getAll);
app.get('/books/:id', Books.findById);
app.post('/authors', Books.create);

app.use(errorMiddleware);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});