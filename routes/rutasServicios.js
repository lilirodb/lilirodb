const express = require('express');
const router = express.Router();
const serviciosController = require('../controllers/serviciosController');

//estas son las rutas de nuestro crud
serviciosController
router.post('/', serviciosController.agregarServicios);
router.get('/', serviciosController.buscarServicios);
router.get('/:id', serviciosController.buscarServicio);
router.delete('/:id', serviciosController.eliminarServicios);
router.put('/:id', serviciosController.actualizarServicios);
//router.put('/:id', clienteController.actualizarCliente);
//router.patch('/:id', clienteController.modificarCliente);


module.exports = router;