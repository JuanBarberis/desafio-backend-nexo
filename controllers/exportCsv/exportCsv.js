import { User } from '../../models/User.js';
import { Address } from '../../models/Address.js';
import { parse } from 'json2csv';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const exportUsersWithAddressesToCSV = async (req, res) => {
    try {
        // Obtener todos los usuarios
        const users = await User.find();
        if (!users) {
            return res.status(404).json({
                message: 'Usuarios no encontrados',
                success: false,
            });
        }

        // Obtener direcciones para cada usuario
        const usersWithAddresses = await Promise.all(users.map(async user => {
            const addresses = await Address.find({ user_id: user._id });
            return {
                ...user.toObject(),
                addresses
            };
        }));

        // Convertir usuarios con direcciones a formato CSV
        const records = usersWithAddresses.map(user => ({
            name: user.nombre,
            surname: user.apellido,
            dni: user.dni,
            addresses: user.addresses.map(address => `${address.street}, ${address.number}, ${address.city}`).join('; ')
        }));
        // Convertir los datos a CSV
        const csv = parse(records);

        // Definir la ruta para guardar el archivo CSV
        const filePath = path.join(__dirname, 'exported_users.csv');
        
        // Guardar el archivo CSV en el servidor
        fs.writeFile(filePath, csv, (err) => {
            if (err) {
                console.error('Error al guardar el archivo CSV:', err);
                return res.status(500).json({ message: 'Error al guardar el archivo CSV.' });
            }

            // Enviar el archivo CSV como descarga
            res.download(filePath, 'exported_users.csv', (err) => {
                if (err) {
                    console.error('Error al enviar el archivo para descarga:', err);
                }
            });
        });

    } catch (err) {
        console.error('Error en el controlador:', err);
        res.status(500).json({ message: 'Error al exportar datos.' });
    }
};

export default exportUsersWithAddressesToCSV;
