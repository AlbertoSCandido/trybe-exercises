const Joi = require('joi');

module.exports = (req, _res, next) => {
  const exp = /\d{5}-\d{3}/
  const { error } = Joi.object({
    cep: Joi.string().min(8).max(9).regex(exp).required(),
    logradouro: Joi.string().required(),
    bairro: Joi.string().required(),
    localidade: Joi.string().required(),
    uf: Joi.string().required(),
  })
    .validate(req.body);

  if (error) {
    return next(error);
  }

  next();
}