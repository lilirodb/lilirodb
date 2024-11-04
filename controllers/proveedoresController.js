const Proveedores = require('../models/Proveedores');
//funcion para buscar los proveedores que estan en la base de datos
exports.buscarProveedores = async(req, res) => {

    try {

        const proveedores = await Proveedores.find();
        res.json(proveedores);

    } catch (error) {
        console.log(error)
        res.status(500).send('hubo un error al buscar a los proveedor');
    }
}

//funcion agregar proveedor
exports.agregarProveedores = async(req, res) => {

        try {

            let proveedores;
            proveedores = new Proveedores(req.body)
            await proveedores.save();
            res.json(proveedores);

        } catch (error) {
            console.log(error)
            res.status(500).send('hubo un error al agregar al proveedor');
        }

    }
    //esta  funcion es mostrar un solo proveedor
exports.buscarProveedor = async(req, res) => {

    try {
        let proveedores = await Proveedores.findById(req.params.id);
        if (!proveedores) {
            res.status(404).sen({ msg: "proveedor no encontrado con ese ID" });
            return
        }
        res.json(proveedores);

    } catch (error) {
        console.log(error)
        res.status(500).send('hubo un error al buscar el cliente');
    }
}

//esta funcion nos sirve para eliminar un cliente
exports.eliminarProveedores = async(req, res) => {

    try {
        let proveedores = await Proveedores.findById(req.params.id);
        if (!proveedores) {
            res.status(404).json({ msg: "el proveedor no existe" })
            return
        }
        await Proveedores.findOneAndDelete({ _id: req.params.id });
        res.json({ msg: "el proveedor ha sido eliminado" });
        return

    } catch (error) {
        console.log(error)
        res.status(500).send('hubo un error al eliminar el proveedor');
    }
}

//esta funcion para actualizar un cliente
exports.actualizarProveedores = async(req, res) => {

    try {
        const { nit, razonSocial, ciudad, correo, telefono, direccion } = req.body
        let proveedores = await Proveedores.findById(req.params.id);

        if (!proveedores) {
            res.status(404).json({ msg: "proveedor no existe" });
            return
        }
        proveedores.nit = nit;
        proveedores.razonSocial = razonSocial;
        proveedores.ciudad = ciudad;
        proveedores.telefono = telefono;
        proveedores.direccion = direccion;

        proveedores = await Proveedores.findOneAndUpdate({ _id: req.params.id }, proveedores, { new: true });
        res.json(proveedores);
    } catch (error) {
        console.log(error)
        res.status(500).send('hubo un error actualizar el proveedores');
    }
}