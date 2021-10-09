const connection = require('./connection');
const { ObjectId } = require('mongodb');

// Busca todos os autores do banco.
const getAll = async () => {
  return connection()
    .then((db) => db.collection('books').find().toArray());
}

/*
Busca um autor específico, a partir do seu ID
@param {String} id ID do autor a ser recuperado
*/
const findById = async (id) => {
  if (!ObjectId.isValid(id)) {
    return null;
  }

  const bookData = await connection()
    .then((db) => db.collection('books').findOne(new ObjectId(id)));

  if (!bookData) return null;

  const { _id, title, author_id } = bookData;

  return { id: _id, title, author_id };
};

const create = async (title, authorId) =>
  connection()
    .then((db) => db.collection('books').insertOne({ title, author_id: authorId }))
    .then(result => ({ id: result.insertedId, title, author_id: authorId }));


module.exports = {
  getAll,
  findById,
  create,
};