const Servicios = require('../models/Servicios');
//funcion para buscar los Servicios que estan en la base de datos
exports.buscarServicios = async(req, res) => {

    try {

        const servicios = await Servicios.find();
        res.json(servicios);

    } catch (error) {
        console.log(error)
        res.status(500).send('hubo un error al buscar a los servicios');
    }
}

//funcion agregar servicios
exports.agregarServicios = async(req, res) => {

        try {

            let servicios;
            servicios = new Servicios(req.body)
            await servicios.save();
            res.json(servicios);

        } catch (error) {
            console.log(error)
            res.status(500).send('hubo un error al agregar al Servicios');
        }

    }
    //esta  funcion es mostrar un solo Servicio
exports.buscarServicio = async(req, res) => {

    try {
        let servicios = await Servicios.findById(req.params.id);
        if (!servicios) {
            res.status(404).sen({ msg: "Servicios no encontrado con ese ID" });
            return
        }
        res.json(servicios);

    } catch (error) {
        console.log(error)
        res.status(500).send('hubo un error al buscar el Servicios');
    }
}

//esta funcion nos sirve para eliminar un Servicio
exports.eliminarServicios = async(req, res) => {

    try {
        let servicios = await Servicios.findById(req.params.id);
        if (!servicios) {
            res.status(404).json({ msg: "el servicio no existe" })
            return
        }
        await Servicios.findOneAndDelete({ _id: req.params.id });
        res.json({ msg: "el Servicio ha sido eliminado" });
        return

    } catch (error) {
        console.log(error)
        res.status(500).send('hubo un error al eliminar el Servicio');
    }
}

//esta funcion para actualizar un Servicio
exports.actualizarServicios = async(req, res) => {

    try {
        const { nombre, valor, descripcion} = req.body
        let servicios = await Servicios.findById(req.params.id);

        if (!servicios) {
            res.status(404).json({ msg: "Servicio no existe" });
            return
        }
        servicios.nombre = nombre;
        servicios.valor = valor;
        servicios.descripcion = descripcion;
        

        servicios = await Servicios.findOneAndUpdate({ _id: req.params.id }, servicios, { new: true });
        res.json(servicios);
    } catch (error) {
        console.log(error)
        res.status(500).send('hubo un error actualizar el Servicio');
    }
}