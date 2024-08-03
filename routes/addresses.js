import express from 'express';
import getAllAddresses from '../controllers/addresses/getAllAdresses.js';
import createAddress from '../controllers/addresses/createAddress.js';
import deleteAddress from '../controllers/addresses/deleteAddress.js';
import updateAddress from '../controllers/addresses/updateAddress.js';

let router = express.Router()

export default router


router.get('/', getAllAddresses) //Encuentra todas las direcciones de la base de dato
router.post('/:userId', createAddress) //Me crea una direccion si encuentra el dni de persona
router.delete('/:userId/:id', deleteAddress) //Busca y elimina por el dni de una persona , se debe pasar el id de la direccion tambien
router.put('/:userId/:id', updateAddress) // Busca y edita la direccion de una persona si encuentra su dni, y el id de la direccion a actualizar
