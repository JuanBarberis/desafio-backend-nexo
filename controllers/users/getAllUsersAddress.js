import { User } from '../../models/User.js'
import { Address } from '../../models/Address.js'



const getAllUserAddress = async (req, res) => {
    try {
        const users = await User.find()
        if (!users) {
            return res.status(404)
                .json({
                    message: 'Usuarios no encontrados',
                    success: false,

                })

        }
        const usersWithAddresses = await Promise.all(users.map(async user => {
            const addresses = await Address.find({ user_id: user._id });
            return {
                ...user.toObject(), // Convertir el usuario a un objeto plano
                addresses // Agregar las direcciones al objeto del usuario
            };
        }));
       return res.status(200).json({
            success: true,
            message: 'Personas encontradas con exito',
            data: usersWithAddresses,
        });
    } catch (error) {
        res.status(500).json({
            message: err.message
        });
    }

}


export default getAllUserAddress;