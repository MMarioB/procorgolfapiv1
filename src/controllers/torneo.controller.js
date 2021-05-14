const TorneoModel = require('../models/torneo.model');

// Obtenemos la lista de todos los torneos
exports.getTorneosList = (req, res) => {
    TorneoModel.getAllTorneos((err, torneo) =>{
        console.log('Aqui estamos!');
        if(err)
        res.send(err);
        console.log('Torneo', torneo);
        res.send(torneo);
    })
}

// Crear un nuevo torneo
exports.crearTorneo = (req,res) =>{
    const torneoReqData = new TorneoModel(req.body);
    console.log('TorneoData', torneoReqData);
    
    // Compruebo si introducen un torneo null
    if(req.body.contructor === Object && Object.keys(req.body).length ===0){
        res.send(400).send({success: false, message: 'Por favor rellena todos los campos'});
    } else {
        console.log('Datos correctos');
        TorneoModel.crearTorneo(torneoReqData, (err, torneo)=>{
            if(err)
            res.send(err);
            res.json({status: true, message: 'Torneo agregado', data: torneo});
        })
    }
}

// Actualizar torneo
exports.actualizarTorneo = (req, res) =>{
    const torneoReqData = new TorneoModel(req.body);
    console.log('Update', torneoReqData);
    
    // Compruebo si introducen un torneo null
    if(req.body.contructor === Object && Object.keys(req.body).length ===0){
        res.send(400).send({success: false, message: 'Por favor rellena todos los campos'});
    } else {
        console.log('Datos correctos');
        TorneoModel.actualizarTorneo(req.params.id, torneoReqData, (err, torneo)=>{
            if(err)
            res.send(err);
            res.json({status: true, message: 'Torneo actualizado', data: torneo});
        })
    }
}

// Borrar torneo
exports.borrarTorneo = (req, res)=>{
    TorneoModel.borrarTorneo(req.params.id, (err, torneo)=>{
        if(err)
        res.send(err);
        res.json({success:true, message: 'Torneo deleted successully!'});
    })
}