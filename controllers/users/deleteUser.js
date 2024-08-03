import { User } from "../../models/User.js";

const deleteUser = async (req, res) => {

    const dni = req.params.id
    try {
        const user = await User.findOneAndDelete({ dni: dni })
        if (!user) {
            return res.status(404)
                .json({
                    success: false,
                    message: 'Persona no encotrada'
                })
        }
        else {
            return res.status(200)
                .json({
                    success: true,
                    message: 'Persona eliminada con exito',
                })
        }

    } catch (error) {
        res.status(500)
            .json({
                message: error.message
            })
    }
}

export default deleteUser;