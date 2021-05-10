const ParticipanteModel = require('../models/participante.model');

// Obtenemos la lista de todos los participantes
exports.getParticipanteList = (req, res) => {
    ParticipanteModel.getAllParticipantes((err, participante) =>{
        console.log('Aqui estamos!');
        if(err)
        res.send(err);
        console.log('Participante', participante);
        res.send(participante);
    })
}

// Obtener un participante mediante torneo
exports.participantePorTorneo = (req, res)=> {
    ParticipanteModel.getParticipanteByTorneo(req.params.id, (err, participante)=>{
        if(err)
        res.send(err);
        console.log(participante);
        res.send(participante);
    })
}

// Obtener un participante mediante correo
exports.participantePorCorreo = (req, res)=> {
    ParticipanteModel.getParticipanteByCorreo(req.params.id, (err, participante)=>{
        if(err)
        res.send(err);
        console.log(participante);
        res.send(participante);
    })
}

// Obtener un participante mediante torneo y analizada
exports.participantePorTorneoAnalizada = (req, res)=> {
    ParticipanteModel.getParticipanteByTorneoAnalizada(req.params.id, (err, participante)=>{
        if(err)
        res.send(err);
        console.log(participante);
        res.send(participante);
    })
}

// Crear un nuevo participante
exports.crearParticipante = (req,res) =>{
    const participanteReqData = new ParticipanteModel(req.body);
    console.log('ParticipanteData', participanteReqData);
    
    // Compruebo si introducen un participante null
    if(req.body.contructor === Object && Object.keys(req.body).length ===0){
        res.send(400).send({success: false, message: 'Por favor rellena todos los campos'});
    } else {
        console.log('Datos correctos');
        ParticipanteModel.crearParticipante(participanteReqData, (err, participante)=>{
            if(err)
            res.send(err);
            res.json({status: true, message: 'Participante agregado', data: participante});
        })
    }
}

// Actualizar participante
exports.actualizarParticipante = (req, res) =>{
    const participanteReqData = new ParticipanteModel(req.body);
    console.log('ParticipanteReqData update', participanteReqData);
    
    // Compruebo si introducen un participante null
    if(req.body.contructor === Object && Object.keys(req.body).length ===0){
        res.send(400).send({success: false, message: 'Por favor rellena todos los campos'});
    } else {
        console.log('Datos correctos');
        ParticipanteModel.actualizarParticipante(req.params.id, participanteReqData, (err, participante)=>{
            if(err)
            res.send(err);
            res.json({status: true, message: 'Particiapnte actualizado', data: participante});
        })
    }
}

// Borrar participante
exports.borrarParticipante = (req, res)=>{
    ParticipanteModel.borrarParticipante(req.params.id, (err, participante)=>{
        if(err)
        res.send(err);
        res.json({success:true, message: 'Participante deleted successully!'});
    })
}