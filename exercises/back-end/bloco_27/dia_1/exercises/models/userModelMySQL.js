const connection = require('./connectionMySQL');

const createUser = async (user) => {
  const { firstName, lastName, email, password } = user;

  await connection.execute(
    'INSERT INTO model_example.users (first_name, last_name, email, password) VALUES (?, ?, ?, ?)',
    [firstName, lastName, email, password]
  );

  return user;
}

const getAllUsers = async () => {
  const [users] = await connection.execute('SELECT * FROM model_example.users');

  return users;
}

const getById = async (id) => {
  if(!ObjectId.isValid(id)) return null;

  const user = await connection()
    .then(conn => conn.collection('users').findOne({ _id: new ObjectId(id) }))

  if (!user) {
    return null;
  }

  return user;
}

const updateUser = async (id, user) => {
  if(!ObjectId.isValid(id)) return null;

  const userData = getById(id);

  if (!userData) return null;

  const { firstName, lastName, email, password } = user;
  
  return await connection()
    .then(conn => conn.collection('users').updateOne({ _id: new ObjectId(id) }, { $set: { firstName, lastName, email, password } }))
    .then(result => ({firstName, lastName, email, password, id: result.insertedId }));
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
  isValid,
  getById,
  getAllUsers,
  updateUser
}