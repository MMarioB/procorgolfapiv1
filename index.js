const express = require('express');

// Llamo a express
const app = express();

// Configuro el puerto del servidor
const port = 5000;

// parse request data content type application/x-www-form-rulencoded
app.use(express.urlencoded({extended: false}));

// parse request data content type application/json
app.use(express.json());

// Defino la ruta principal
app.get('/', (req,res) => {
    res.send('Hola Mundo!');
});

// Importo la ruta de los participantes
const participanteRoutes = require('./src/routes/participante.route');

// Importo la ruta de los torneos
const torneosRoutes = require('./src/routes/torneo.route');

// Creo la ruta de los participantes
app.use('/api/v1/participante', participanteRoutes);

// Creo la ruta de obtener los torneos
app.use('/api/v1/torneos', torneosRoutes);

// Listener del puerto
app.listen(port, () => {
    console.log(`Express Server is running at port ${port}`);
});