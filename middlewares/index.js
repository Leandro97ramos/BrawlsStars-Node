

const validaCampos = require('../middlewares/validar-campos');
const validarJWT = require('../middlewares/validar-jwt');

module.exports = {
    ...validaCampos,
    ...validarJWT,
}