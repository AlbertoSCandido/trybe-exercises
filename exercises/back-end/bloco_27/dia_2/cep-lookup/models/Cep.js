const connection = require('./connection');

const getByCep = async (cep) => {
  const [response] = await connection.execute('SELECT * FROM ceps WHERE cep=?', [cep]);
  
  return response;
};

module.exports = {
  getByCep,
};