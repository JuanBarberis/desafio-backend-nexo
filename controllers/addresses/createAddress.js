import { User } from "../../models/User.js";
import { Address } from "../../models/Address.js";

const createAddress = async (req, res) => {

    const dni = req.params.userId
    console.log(req.params)
    const { street, number, city } = req.body
    try {

        const user = await User.findOne({ dni: dni })
        if (!user) {
            return res.status(404)
                .json({
                    success: false,
                    message: 'No se encontro el usuario'
                })
        } else {
            const newAddress = new Address({
                street,
                number,
                city,
                user_id: user._id
            })

            const savedAddress = await newAddress.save()
            return res.status(200)
                .json({
                    success: true,
                    message: 'Dirección creada exitosamente',
                    data: savedAddress
                })
        }
    } catch (error) {
        res.status(500)
            .json({
                message: error.message
            })
    }

}

export default createAddress;