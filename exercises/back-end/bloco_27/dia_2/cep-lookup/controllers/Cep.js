const CepService = require('../services/Cep');

const getByCep = async (req, res, next) => {
  const { cep } = req.params;

  try {
    const cepData = await CepService.getByCep(cep);

      if (cepData.length === 0) return res.status(404).json({ "error": { "code": "notFound", "message": "CEP não encontrado" } });

    return res.status(200).json(cepData);
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  getByCep
};
