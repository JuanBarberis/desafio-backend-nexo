import { User } from "../../models/User.js";
import { Address } from "../../models/Address.js";

const deleteAddress = async (req, res) => {

    const { userId, id } = req.params
    console.log(req.params)
    try {

        const user = await User.findOne({ dni: userId })
        if (!user) {
            return res.status(404)
                .json({
                    success: false,
                    message: 'No se encontro el usuario'
                })
        }
        else {
            const address = await Address.findOneAndDelete({ _id: id, user_id: user._id })
            if (!address) {
                return res.status(404)
                    .json({
                        success: false,
                        message: 'No se encontro la dirección'
                    })
            } else {
                return res.status(200)
                    .json({
                        success: true,
                        message: 'Dirección eliminada con exito'
                    })
            }

        }

    } catch (error) {
        res.status(500)
            .json({
                message: error.message
            })
    }

}

export default deleteAddress;