const connection = require('./connectionMongo');
const Author = require('./authorsMongo');
const { ObjectId } = require('mongodb')

const serialize = (book) => {
  return {
    id: book.id,
    title: book.title,
    authorId: book.author_id
  }
}

const getAll = async () => {
  return connection()
    .then((db) => db.collection('books').find().toArray())
}

const getByAuthorId = async (authorId) => {
  const [book] = await connection.execute('SELECT * FROM books WHERE author_id = ?', [authorId]);

  if (book.length === 0) return null;

  return book.map(serialize)[0];
}

const getById = async (bookId) => {
  if (!ObjectId.isValid(bookId)) return null;

  const book = connection()
    .then((db) => db.collection('books').findOne({ _id: ObjectId(bookId) }));

  if (!book) return null;

  return book;
}

const isValid = async (title, authorId) => {
  if (!title || !authorId) return false;
  if (typeof title !== 'string' || title.length < 3) return false;

  const author = await Author.findById(authorId);
  
  if(!author) return false;
  
  return true;
};

const create = async (title, authorId) => {
  await connection()
    .then((db) => db.collection('books').insertOne({ title, author_id: authorId }));
}

module.exports = {
  getAll,
  getByAuthorId,
  getById,
  isValid,
  create
}