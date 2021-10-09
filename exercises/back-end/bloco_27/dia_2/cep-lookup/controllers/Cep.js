const CepService = require('../services/Cep');

const getAllCeps = async (req, res, next) => {
  try {
    const response = await CepService.getAll();
    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
}

const getByCep = async (req, res, next) => {
  const { cep } = req.params;

  try {
    const cepData = await CepService.getByCep(cep);

    if (cepData.length === 0) return res.status(404).json({ "error": { "code": "notFound", "message": "CEP não encontrado" } });
    if (cepData.error) return next(cepData.error);

    return res.status(200).json(cepData[0]);
  } catch (error) {
    return next(error);
  }
}

const checkIfCepExists = async (cep) => {
  const cepDB = await CepService.getByCep(cep);
  if (cepDB.length > 0) return true;
  return false;
}

const createCEP = async (req, res, next) => {
  const { cep, logradouro, bairro, localidade, uf } = req.body;

  if (await checkIfCepExists(cep)) return next({ "code": "alreadyExists", "message": "CEP já cadastrado" });

  try {
    const cepData = await CepService.createCEP({ cep, logradouro, bairro, localidade, uf });

    return res.status(201).json(cepData);
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  getByCep,
  createCEP,
  getAllCeps
};
