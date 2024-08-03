import { User } from '../../models/User.js'

const getAllUser = async (req, res) => {
    try {
        const users = await User.find()
        if (users.length === 0) {
            return res.status(404).json({
                message: 'No se encontraron usuarios.'
            })
        }
        else {
            return res.status(200).json({
                success: true,
                message: 'Usuarios encontrados',
                data: users
            })
        }

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

export default getAllUser;