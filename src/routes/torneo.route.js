const express = require('express');
const router = express.Router();

const torneoController = require('../controllers/torneo.controller');

// get all torneos
router.get('/', torneoController.getTorneosList);

// post torneo nuevo
router.post('/', torneoController.crearTorneo);

// update participante 
router.put('/:id', torneoController.actualizarTorneo);

// delete participante
router.delete('/:id',torneoController.borrarTorneo);

// exporto la constante router para que pueda ser usada en los otros archivos
module.exports = router;