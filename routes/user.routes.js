const { Router } = require('express');
const { esAdminRole, tieneRole  } = require('../middlewares/validar-roles');
const { validarJWT } = require('../middlewares/validar-jwt');
const { getUsers, getUser, postUser, putUser, deleteUser } = require('../controllers/user.controller.js');
const router = Router();


router.get('/get/', getUsers);
router.get('/get/:id', getUser);

router.post('/post/', postUser);

router.put('/put/:id', putUser);

router.delete('/delete/:id',[
      validarJWT,
      esAdminRole,
      tieneRole('ADMIN_ROLE', 'USER_ROLE')

], deleteUser);
/*
*/


module.exports = router;