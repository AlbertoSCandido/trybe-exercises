const Joi = require('joi');

const validateCep = (req, res, next) => {
  const { cep } = req.params;
  
  const {error} = Joi.object({
    cep: Joi.string().min(8).max(9).required()
  })
    .validate(req.params);

  if (error) {
    next(error);
  }

  const exp = /\d{5}-\d{3}/
  if (!exp.test(cep)) {
    next({"code": "notFound", "message": "CEP não encontrado" });
  }


  next();
};

module.exports = validateCep;
