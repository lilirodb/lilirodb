const express = require('express')
const conectarDB = require('../config/db.js');
const cors = require('cors');


// creamos la variable  app
const app = express();
const port = 5000;

// Conexion con db
conectarDB();
app.use(cors());
app.use(express.json());

//ruta ppal del proyecto
app.use('/api/clientes', require('../routes/rutasCliente'));
app.use('/api/proveedores', require('../routes/rutasProveedores.js'));
app.use('/api/servicios', require('../routes/rutasServicios.js'));

// ruta para verificar servidor en la web
app.get('/', (req, res) => {
    res.send('Hola mundo web');
});

app.listen(port, () => {
    console.log('El servidor esta conectado http://localhost:5000/');
});