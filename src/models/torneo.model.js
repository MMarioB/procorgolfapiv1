var conexion = require('../../config/db.config');

var Torneo = function(torneo){
    this.nombre = torneo.nombre;
}

//get all torneos
Torneo.getAllTorneos = (result) =>{
    conexion.query('SELECT * FROM torneos', (err, res)=>{
        if(err){
            console.log('Error torneos', err);
            result(null,err);
        } else {
            console.log('Torneos');
            result(null,res);
        }
    })
}

//post torneo nuevo
Torneo.crearTorneo = (torneoReqData, result) =>{
    conexion.query('INSERT INTO torneos SET ? ', torneoReqData, (err, res) => {
        if(err){
            console.log('Error al añadir torneo', err);
            result(null,{status: false, message: err});
        } else {
            console.log('Torneo añadido');
            result(null, res);
        }
    })
}

//update torneo
Torneo.actualizarTorneo = (id, torneoReqData, result) =>{
    conexion.query("UPDATE torneos SET nombre=? WHERE id_torneo=?", [torneoReqData.nombre, id], (err,res)=>{
        if(err){
            console.log('Error actualizando', err);
            result(null,err);
        } else {
            console.log('Torneo actualizado');
            result(null, res);
        }
    });
}

//delete torneo
Torneo.borrarTorneo = (id, result)=>{
    conexion.query('DELETE FROM torneos WHERE id_torneo=?', [id], (err, res)=>{
        if(err){
            console.log('Error al borrar');
            result(null, err);
        }else{
            result(null, res);
        }
    })
}

module.exports = Torneo;