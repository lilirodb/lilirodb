const mongoose = require('mongoose');


//el modelo se debe crear igual la base de datos
const clienteSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    apellidos: {
        type: String,
        required: true
    },
    documento: {
        type: Number,
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

module.exports = mongoose.model('Cliente', clienteSchema);