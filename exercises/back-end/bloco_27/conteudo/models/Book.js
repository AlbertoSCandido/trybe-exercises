const connection = require('./connection');
const Author = require('./Author');

const serialize = (book) => {
  return {
    id: book.id,
    title: book.title,
    authorId: book.author_id
  }
}

const getAll = async () => {
  const [books] = await connection.execute('SELECT * FROM books')

  return books.map(serialize);
}

const getByAuthorId = async (authorId) => {
  const [book] = await connection.execute('SELECT * FROM books WHERE author_id = ?', [authorId]);

  if (book.length === 0) return null;

  return book.map(serialize)[0];
}

const getById = async (bookId) => {
  const [book] = await connection.execute('SELECT * FROM books WHERE id = ?', [bookId]);

  if (book.length === 0) return null;

  return book.map(serialize)[0];
}

const isValid = async (title, authorId) => {
  if (!title || !authorId) return false;
  if (typeof title !== 'string' || title.length < 3) return false;

  const author = await Author.findById(authorId);
  
  if(!author) return false;
  
  return true;
};

const create = async (title, authorId) => {
  await connection.execute('INSERT INTO model_example.books (title, author_id) VALUES (?, ?)', [title, authorId]);
}

module.exports = {
  getAll,
  getByAuthorId,
  getById,
  isValid,
  create
}