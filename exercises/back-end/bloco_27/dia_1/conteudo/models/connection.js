const mysql = require('mysql2/promise');
const { password } = require('./password')

const connection = mysql.createPool({
  user: 'alberto',
  password: password,
  host: 'localhost',
  database: 'model_example'
});

module.exports = connection;
