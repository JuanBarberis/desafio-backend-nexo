import express from 'express';
import createUser from '../controllers/users/createUser.js';
import getAllUserAddress from '../controllers/users/getAllUsersAddress.js';
import getAllUser from '../controllers/users/getAlluser.js';
import filteredUser from '../controllers/users/filteredUsers.js';
import getUserById from '../controllers/users/getById.js';
import updateUser from '../controllers/users/updateUser.js';
import deleteUser from '../controllers/users/deleteUser.js';

let router = express.Router();


/* GET users listing. */
// router.get('/', (req, res, next) => {
//   res.send('respond with a resource');
// });

router.get('/', getAllUser) // busca todo los usuarios
router.get('/users-address', getAllUserAddress) //busca todos los usuarios con sus direcciones
router.get('/users-filter', filteredUser) //busca el usuario con los filtros por las queryparams
router.get('/:id', getUserById) //busca un usuario por dni, y muestra el usuario encontrado con sus direcciones

router.post('/', createUser) //crea un usuario nuevo, si no existe el dni
router.put('/:id', updateUser) //busca el usuario por dni, actualiza las propiedas que le llega por body
router.delete('/:id',deleteUser) //Busca un usuario por el dni y lo elimina.
export default router;
