import { Address } from "../../models/Address.js";

const getAllAddresses = async (req, res) => {

    try {
        const addresses = await Address.find()
        if (!addresses) {
            return res.status(404)
                .json({
                    success: false,
                    message: 'No se encontraron direcciones'
                })
        } else {

           return res.status(200)
                .json({
                    success: true,
                    message: 'Direcciones encontradas con éxito',
                    data: addresses
                })
        }
    } catch (error) {
        res.status(500)
            .json({
                message: error.message
            })
    }
}

export default getAllAddresses;