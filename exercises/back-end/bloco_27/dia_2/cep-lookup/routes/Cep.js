const express = require('express');
const CepController = require('../controllers/Cep');
const validateCep = require('../middlewares/validateCep');

const router = express.Router();

router.get('/:cep', validateCep, CepController.getByCep);

module.exports = router;