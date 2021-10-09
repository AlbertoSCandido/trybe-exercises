const express = require('express');
const CepController = require('../controllers/Cep');
const validateCep = require('../middlewares/validateCep');
const validateFieldsCep = require('../middlewares/validateFieldsCep');

const router = express.Router();

router.get('/', CepController.getAllCeps);
router.get('/:cep', validateCep, CepController.getByCep);
router.post('/', validateFieldsCep, CepController.createCEP);

module.exports = router;