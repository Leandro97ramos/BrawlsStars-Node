const { Router } = require('express');

const {userGet, userPost, userPut, userDelete } = require('../controllers/user.controller');
const router = Router();


//Metodo get de express
router.get('/', userGet);

//Metodo post de express
router.post('/', userPost)

//Metodo put de express
//router.put('/', userPut)
router.put('/:id', userPut)

//Metodo delete de express
router.delete('/', userDelete)

module.exports = router;