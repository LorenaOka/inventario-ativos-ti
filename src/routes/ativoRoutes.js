const express = require('express');
const router = express.Router();
const AtivoController = require('../controllers/AtivoController');

router.post('/', AtivoController.create);
router.put('/:id', AtivoController.update);
router.delete('/:id', AtivoController.delete);
router.get('/funcionario/:cpf', AtivoController.getByFuncionario);

module.exports = router;
