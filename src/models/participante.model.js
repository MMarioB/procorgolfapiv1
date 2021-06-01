var conexion = require('../../config/db.config');

var Participante = function(participante){
    this.federacion = participante.federacion;
    this.torneo = participante.torneo;
    this.campo = participante.campo;
    this.nombre = participante.nombre;
    this.apellidos = participante.apellidos;
    this.dni = participante.dni;
    this.correo = participante.correo;
    this.telefono = participante.telefono;
    this.contacto_positivo = participante.contacto_positivo;
    this.dias_contacto = participante.dias_contacto;
    this.sintomas = participante.sintomas;
    this.codigo_postal = participante.codigo_postal;
    this.codigo_cliente = participante.codigo_cliente;
    this.test = participante.test;
    this.resultado = participante.resultado;
    this.numero_prueba = participante.numero_prueba;
    this.analizada = participante.analizada;
    this.cargo = participante.cargo;
}

//get all participantes
Participante.getAllParticipantes = (result) =>{
    conexion.query('SELECT * FROM golf INNER JOIN numero_prueba ON golf.numero_prueba = numero_prueba.id_nprueba INNER JOIN resultado ON golf.resultado = resultado.id_resultado INNER JOIN test ON golf.test = test.id_test', (err, res)=>{
        if(err){
            console.log('Error participantes', err);
            result(null,err);
        } else {
            console.log('Participante añadido');
            result(null,res);
        }
    })
}

//get participante by Torneos
Participante.getParticipanteByTorneo = (torneo, result) =>{
    conexion.query('SELECT * FROM golf INNER JOIN numero_prueba ON golf.numero_prueba = numero_prueba.id_nprueba INNER JOIN resultado ON golf.resultado = resultado.id_resultado INNER JOIN test ON golf.test = test.id_test WHERE torneo=?', torneo, (err, res)=>{
        if(err){
            console.log('Error participantes', err);
            result(null,err);
        } else {
            result(null,res);
        }
    })
}

//get participante by Email
Participante.getParticipanteByCorreo = (correo, result) =>{
    conexion.query('SELECT * FROM golf WHERE correo=?', correo, (err, res)=>{
        if(err){
            console.log('Error participantes', err);
            result(null,err);
        } else {
            result(null,res);
        }
    })
}

//get participante by Torneos y no analizada
Participante.getParticipanteByTorneoAnalizada = (analizada, torneo, result) =>{
    conexion.query('SELECT * FROM golf WHERE analizada=? and torneo=?', analizada, torneo, (err, res)=>{
        if(err){
            console.log('Error participantes', err);
            result(null,err);
        } else {
            result(null,res);
        }
    })
}

//post participante nuevo
Participante.crearParticipante = (participanteReqData, result) =>{
    conexion.query('INSERT INTO golf SET ? ', participanteReqData, (err, res) => {
        if(err){
            console.log('Error al añadir participante', err);
            result(null,{status: false, message: err});
        } else {
            console.log('Participante añadido');
            result(null, res);
        }
    })
}

//update participante
Participante.actualizarParticipante = (id, participanteReqData, result) =>{
    conexion.query("UPDATE golf SET numero_prueba=?, resultado=?, analizada=? WHERE id__lista=?", [participanteReqData.numero_prueba,participanteReqData.resultado, participanteReqData.analizada, id], (err,res)=>{
        if(err){
            console.log('Error actualizando', err);
            result(null,err);
        } else {
            console.log('Participante actualizado');
            result(null, res);
        }
    });
}

//delete participante
Participante.borrarParticipante = (id, result)=>{
    conexion.query('DELETE FROM golf WHERE id__lista=?', [id], (err, res)=>{
        if(err){
            console.log('Error al borrar');
            result(null, err);
        }else{
            result(null, res);
        }
    })
}

module.exports = Participante;