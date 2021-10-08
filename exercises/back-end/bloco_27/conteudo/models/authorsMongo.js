const connection = require('./connectionMongo');
const { ObjectId } = require('mongodb')

const getNewAuthor = ({ firstName, lastName, middleName, id }) => {
  const fullName = [firstName, middleName, lastName].filter(name => name).join(' ');
  return {
    id,
    firstName,
    lastName,
    middleName,
    fullName
  }
}

const serialize = authorData => {
  return {
    id: authorData.id,
    firstName: authorData.first_name,
    lastName: authorData.last_name,
    middleName: authorData.middle_name,
  }
}

const getAll = async () => {
  return connection()
    .then((db) => db.collection('authors').find().toArray())
    .then((authors) =>
      authors.map(({ _id, firstName, middleName, lastName }) =>
      getNewAuthor({
          id: _id,
          firstName,
          middleName,
          lastName,
      }))
    );
}

const findById = async (id) => {
  if (!ObjectId.isValid(id)) {
      return null;
  }

  const authorData = await connection()
    .then((db) => db.collection('authors').findOne(new ObjectId(id)));

  if (!authorData) return null;

  const { firstName, middleName, lastName } = authorData;

  return getNewAuthor({ id, firstName, middleName, lastName });
};

const isValid = (firstName, _middleName, lastName) => {
  if(!firstName || typeof firstName !== 'string') return false;
  if(!lastName || typeof lastName !== 'string') return false;

  return true;
};

const create = async (firstName, middleName, lastName) =>
  connection()
    .then((db) => db.collection('authors').insertOne({ firstName, middleName, lastName }))
    .then(result => getNewAuthor({ id: result.insertedId, firstName, middleName, lastName }));


module.exports = {
  getAll,
  findById,
  isValid,
  create
}