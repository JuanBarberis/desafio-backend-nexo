import { User } from "../../models/User.js";

const updateUser = async (req, res) => {
    const dni = req.params.id
    const { nombre, apellido, edad, foto } = req.body
    try {
        const user = await User.findOne({ dni: dni })
        if (!user) {
            return res.status(404)
                .json({
                    message: 'Usuario no encontrado',
                    success: false,
                })
        } else {
            const updatedUser = await User.findOneAndUpdate(
                { dni: dni },
                {
                    $set: {
                        nombre: nombre || user.nombre,
                        apellido: apellido || user.apellido,
                        edad: edad || user.edad,
                        foto: foto || user.foto
                    }
                },
                { new: true }
            );
           return res.status(200).json({
                success: true,
                message: 'Usuario actualizado con éxito',
                data: updatedUser
            });
        }
    } catch (error) {
        res.status(500)
            .json({
                message: error.message
            })
    }

}

export default updateUser;