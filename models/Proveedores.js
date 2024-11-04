const mongoose = require('mongoose');

//el modelo se debe crear igual la base de datos
const proveedoresSchema = mongoose.Schema({
    nit: {
        type: String,
        required: true
    },
    razonSocial: {
        type: String,
        required: true
    },
    ciudad: {
        type: String,
        required: true
    },
    correo: {
        type: String,
        required: true
    },
    telefono: {
        type: Number,
        required: true
    },
    direccion: {
        type: String,
        required: true
    },
}, { versionkey: false });

module.exports = mongoose.model('Proveedores', proveedoresSchema);