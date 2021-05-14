const express = require('express');
const router = express.Router();

const torneoController = require('../controllers/torneo.controller');

// get all torneos
router.get('/', torneoController.getParticipanteList);

// post torneo nuevo
router.post('/', torneoController.crearParticipante);

// update participante 
router.put('/:id', torneoController.actualizarParticipante);

// delete participante
router.delete('/:id',torneoController.borrarParticipante);

// exporto la constante router para que pueda ser usada en los otros archivos
module.exports = router;