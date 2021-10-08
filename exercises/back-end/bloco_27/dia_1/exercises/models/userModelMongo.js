const { ObjectId } = require('mongodb');
const connection = require('./connectionMongo');

const createUser = async (user) => {
  const { firstName, lastName, email, password } = user;
  return await connection()
    .then(conn => conn.collection('users').insertOne(user))
    .then(result => ({
      firstName, lastName, email, password, id: result.insertedId
    }))
}

const isValid = (user) => {
  const { firstName, lastName, email, password } = user;
  if (!firstName || !lastName || !email || !password) {
    return false;
  }

  if (password.length < 6) {
    return false;
  }

  return true;
}


module.exports = {
  createUser,
  isValid
}