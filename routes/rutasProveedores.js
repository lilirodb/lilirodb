const express = require('express');
const router = express.Router();
const proveedoresController = require('../controllers/proveedoresController');

//estas son las rutas de nuestro crud
proveedoresController
router.post('/', proveedoresController.agregarProveedores);
router.get('/', proveedoresController.buscarProveedores);
router.get('/:id', proveedoresController.buscarProveedor);
router.delete('/:id', proveedoresController.eliminarProveedores);
router.put('/:id', proveedoresController.actualizarProveedores);
//router.put('/:id', clienteController.actualizarCliente);
//router.patch('/:id', clienteController.modificarCliente);


module.exports = router;