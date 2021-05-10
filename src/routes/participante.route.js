const express = require('express');
const router = express.Router();

const participanteController = require('../controllers/participante.controller');

// get all participantes
router.get('/', participanteController.getParticipanteList);

// get participante by torneo
router.get('/:id',participanteController.participantePorTorneo);

// get participante by correo
router.get('/:correo',participanteController.participantePorCorreo);

// get participante by torneo y nueva
router.get('/:torneo&:analizada',participanteController.participantePorTorneoAnalizada);

// post participante nuevo
router.post('/', participanteController.crearParticipante);

// update participante 
router.put('/:id', participanteController.actualizarParticipante);

// delete participante
router.delete('/:id',participanteController.borrarParticipante);

// exporto la constante router para que pueda ser usada en los otros archivos
module.exports = router;