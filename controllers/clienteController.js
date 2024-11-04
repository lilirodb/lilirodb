const Cliente = require('../models/Cliente');
//funcion para buscar los clientes que estan en la base de datos
exports.buscarClientes = async(req, res) => {

    try {

        const cliente = await Cliente.find();
        res.json(cliente);

    } catch (error) {
        console.log(error)
        res.status(500).send('hubo un error al buscar a los clientes');
    }
}

//funcion agregar clientes
exports.agregarClientes = async(req, res) => {

        try {

            let cliente;
            cliente = new Cliente(req.body)
            await cliente.save();
            res.json(cliente);

        } catch (error) {
            console.log(error)
            res.status(500).send('hubo un error al agregar al cliente');
        }

    }
    //esta  funcion es mostrar un solo cliente
exports.buscarCliente = async(req, res) => {

    try {
        let cliente = await Cliente.findById(req.params.id);
        if (!cliente) {
            res.status(404).sen({ msg: "cliente no encontrado con ese ID" });
            return
        }
        res.json(cliente);

    } catch (error) {
        console.log(error)
        res.status(500).send('hubo un error al buscar el cliente');
    }
}

//esta funcion nos sirve para eliminar un cliente
exports.eliminarCliente = async(req, res) => {

    try {
        let cliente = await Cliente.findById(req.params.id);
        if (!cliente) {
            res.status(404).json({ msg: "el cliente no existe" })
            return
        }
        await Cliente.findOneAndDelete({ _id: req.params.id });
        res.json({ msg: "el cliente ha sido eliminado" });
        return

    } catch (error) {
        console.log(error)
        res.status(500).send('hubo un error al eliminar el cliente');
    }
}

//esta funcion para actualizar un cliente
exports.actualizarCliente = async(req, res) => {

    try {
        const { nombre, apellidos, documento, correo, telefono, direccion } = req.body
        let cliente = await Cliente.findById(req.params.id);

        if (!cliente) {
            res.status(404).json({ msg: "cliente no existe" });
            return
        }
        cliente.nombre = nombre;
        cliente.apellidos = apellidos;
        cliente.documento = documento;
        cliente.telefono = telefono;
        cliente.direccion = direccion;

        cliente = await Cliente.findOneAndUpdate({ _id: req.params.id }, cliente, { new: true });
        res.json(cliente);
    } catch (error) {
        console.log(error)
        res.status(500).send('hubo un error actualizar el cliente');
    }
}