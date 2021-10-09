const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'alberto',
  password: 'semsenha',
  database: 'cep_lookup',
  port: 3306
});

module.exports = connection;