import { User } from '../../models/User.js'


   const createUser= async (req, res) => {
        try {
            const { dni, nombre, apellido, edad, foto } = req.body;
            // Verificar si el usuario ya existe
            const existingUser = await User.findOne({ dni });
            if (existingUser) {
                return res.status(404).json({
                    status:404,
                    success: false,
                    message: 'El DNI ya existe. Por favor, ingrese un DNI diferente.',
                });
            }
            // Crear un nuevo usuario
            const newUser = new User({ dni, nombre, apellido, edad, foto });
            await newUser.save();
            return res.status(200).json({
                success: true,
                message: 'Usuario creado con éxito.',
                data: newUser,
            });
        } catch (error) {
            console.log('error',error)
            return res.status(500).json({
                message: 'Hubo un error al crear el usuario.',
                error: error.message,
            });
        }
    }


export default createUser;