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
  if(!id) return null;

  const user = await connection.execute('SELECT * FROM model_example.users WHERE id = ?', [id])
    .then(([results]) => (results.length > 0 ? results[0] : null));

  if (!user) {
    return null;
  }

  return user;
}

const updateUser = async (id, user) => {
  if(!id) return null;
  
  const userData = await getById(id);
  
  if (!userData) return null;

  const { first_name, last_name, email, password } = user;
  
  await connection.execute(
    'UPDATE model_example.users SET first_name=?, last_name=?, password=?, email=? WHERE id=?',
    [first_name, last_name, password, email, id]
  );
  
  const editedUser = await getById(id);
  
  return [editedUser];
}


const isValid = (user) => {
  const { first_name, last_name, email, password } = user;
  if (!first_name || !last_name || !email || !password) {
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