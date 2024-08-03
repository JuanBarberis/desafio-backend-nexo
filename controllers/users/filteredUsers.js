import { User } from "../../models/User.js";

const filteredUser = async (req, res) => {
    try {
        const { dni, nombre, apellido } = req.query;
        let filter = {}
        if (dni) filter.dni = dni;
        if (nombre) filter.nombre = nombre.toLowerCase();
        if (apellido) filter.apellido = apellido.toLowerCase();

        console.log(filter)
        const users = await User.find(filter);
        if (users.length === 0) {
            return res.status(404).json({
                message: 'No se encontraron usuarios con los criterios especificados.',
                status: 404
            });
        }
        else {
           return res.status(200).json({
                success: true,
                data: users
            });
        }

    } catch (error) {
        res.status(500)
            .json({
                message: error
            })
    }
}

export default filteredUser;