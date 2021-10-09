const connection = require('./connection');

const getAll = async () => {
  const [response] = await connection.execute('SELECT * FROM ceps');

  return response;
};

const getByCep = async (cep) => {
  const [response] = await connection.execute('SELECT * FROM ceps WHERE cep=?', [cep]);
  
  return response;
};

const create = async ({ cep, logradouro, bairro, localidade, uf }) => {
  try {
    await connection.execute(
      'INSERT INTO ceps (cep, logradouro, bairro, localidade, uf) VALUES (?, ?, ?, ?, ?)',
      [cep, logradouro, bairro, localidade, uf]
    );
    return {cep, logradouro, bairro, localidade, uf};
  } catch (error) {
    return error;
  }
};

module.exports = {
  getByCep,
  create,
  getAll
};