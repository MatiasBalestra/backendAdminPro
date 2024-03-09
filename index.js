require('dotenv').config();
const express = require('express');

const cors = require('cors');


const { dbConnection } = require('./database/config');

const app = express();

// configurar cors
app.use(cors());

// Crear el servidor de express
const port = process.env.PORT;

dbConnection();


app.listen( port, () => {
    console.log(`Servidor corriendo en el puerto ${ port }`);
});

// Rutas    
app.get('/', (req, res) => {
    res.json({
        ok: true,
        msg: 'Hola Mundo'
    });
});