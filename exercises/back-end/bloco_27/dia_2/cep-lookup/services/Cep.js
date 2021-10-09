const CepConnection = require('../models/Cep');

const getByCep = async (cep) => {
  return await CepConnection.getByCep(cep);
}

module.exports = {
  getByCep
}
