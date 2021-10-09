const CepConnection = require('../models/Cep');

const getAll = async () => {
  return await CepConnection.getAll();
}

const getByCep = async (cep) => {
  return await CepConnection.getByCep(cep);
}
const createCEP = async (data) => {
  return await CepConnection.create(data);
}

module.exports = {
  getByCep,
  createCEP,
  getAll
}
