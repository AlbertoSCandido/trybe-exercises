const mysql = require('mysql2/promise');
const { password } = require('./password')

const connection = mysql.createPool({
    host: 'localhost',
    user: 'alberto',
    password: password,
    database: 'model_example'
});

module.exports = connection;
