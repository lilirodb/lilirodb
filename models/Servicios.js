const mongoose = require('mongoose');

//el modelo se debe crear igual la base de datos
const serviciosSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    valor: {
        type: Number,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
   
}, { versionkey: false });

module.exports = mongoose.model('Servicios', serviciosSchema);