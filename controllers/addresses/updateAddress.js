import { Address } from "../../models/Address.js";
import { User } from "../../models/User.js";

const updateAddress = async (req, res) => {

    const { userId, id } = req.params
    const { street, number, city } = req.body

    try {
        const user = await User.findOne({ dni: userId })
        if (!user) {
            return res.status(404)
                .json({
                    success: false,
                    message: 'No se econtro el usuario'
                })
        } else {
            const updateFields = {};
            if (street) updateFields.street = street;
            if (number) updateFields.number = number;
            if (city) updateFields.city = city;

            const address = await Address.findOneAndUpdate(
                { _id: id, user_id: user._id },
                { $set: updateFields },
                { new: true }
            );
            if (!address) {
                return res.status(404).json({
                    success: false,
                    message: 'No se encontró la dirección'
                });
            } else {
                return res.status(200).json({
                    success: true,
                    message: 'Dirección actualizada con éxito',
                    data: address
                });
            }
        }
    } catch (error) {
        res.status(500)
            .json({
                message: error.message
            })
    }
}

export default updateAddress;