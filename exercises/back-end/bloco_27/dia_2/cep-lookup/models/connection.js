const mysql = require('mysql2/promise');
require('dotenv').config();

const connection = mysql.createPool({
  host: 'localhost',
  user: 'alberto',
  password: process.env.SENHAMYSQL,
  database: 'cep_lookup',
  port: 3306
});

module.exports = connection;