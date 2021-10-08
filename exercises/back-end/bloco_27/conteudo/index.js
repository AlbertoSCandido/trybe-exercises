const express = require('express');
const app = express();

const authorRoutes = require('./routes/authorRoutes');3
const booksRoutes = require('./routes/booksRoutes');

const PORT = 3000;

app.use(express.json());

app.use('/authors', authorRoutes);
app.use('/books', booksRoutes);

app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));