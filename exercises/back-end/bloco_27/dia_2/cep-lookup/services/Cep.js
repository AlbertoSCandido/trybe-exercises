const CepConnection = require('../models/Cep');
const CepAPI = require('../models/CepAPI');

const getAll = async () => {
  return await CepConnection.getAll();
}

const getByCep = async (cep) => {
  const cepDB = await CepConnection.getByCep(cep);
  if (cepDB.length > 0) {
    return cepDB;
  } else {
    const cepAPI = await CepAPI.getCep(cep);
    if (cepAPI.length > 0) {
      await CepConnection.create(cepAPI[0]);
      return cepAPI;
    } else {
      return new Error({ "error": { "code": "notFound", "message": "CEP não encontrado" } });
    }
  }
}

const createCEP = async (data) => {
  return await CepConnection.create(data);
}

module.exports = {
  getByCep,
  createCEP,
  getAll
}
