const mysql = require('mysql2');

// Creo la conexion con la base de datos
const conexion = mysql.createPool({
    connectionLimit: 10,
    host: "127.0.0.2",
    port: 3306,
    user: "adminprocor",
    password: "3o_PV9Pja2",
    database: "procorgolf"
});

conexion.getConnection((error) => {
    if(error) throw error;
    console.log('Conexion con la base de datos correcta!')
})

// Exporto para que pueda ser llamada la constante conexion desde otros archivos
module.exports = conexion;