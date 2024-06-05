const express = require('express');
const router = express.Router();
const FuncionarioController = require('../controllers/FuncionarioController');

router.post('/', FuncionarioController.create);
router.delete('/:cpf', FuncionarioController.delete);
router.get('/', FuncionarioController.getAll);
router.get('/:cpf', FuncionarioController.getByCpf);
router.put('/:cpf', FuncionarioController.update);

module.exports = router;
