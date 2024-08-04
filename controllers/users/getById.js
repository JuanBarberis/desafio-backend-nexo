import { Address } from "../../models/Address.js";
import { User } from "../../models/User.js";

const getUserById = async (req, res) => {

    const dni  = req.params.id

    try {
        const user = await User.findOne({ dni: dni });

        if (!user) {
            return res.status(404)
                .json({
                    success: false,
                    message: 'Usuario no encontrado'
                });
        } else {
            const addresses = await Address.find({ user_id: user._id });
           return res.status(200).json({
                success: true,
                message: 'Usuario encontrado con exito!',
                data: {
                    ...user.toObject(), // Convertir el usuario a un objeto plano
                    addresses // Agregar las direcciones al objeto del usuario
                },
            });
        }
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}



export default getUserById;