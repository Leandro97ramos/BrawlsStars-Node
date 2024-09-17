const User = require('../models/user.model');

const emailExists = async(email) => {

    // Verificar si el correo existe
    const email = await User.findOne({ where: { email: email } });
    if (email) {
        throw new Error(`El correo: ${email} ya está registrado`);
    }

}

const userExistsById = async(id) => {

    // Verificar si el usuario existe
    const user = await User.findByPk(id);
    if (!user) {
        throw new Error(`El usuario con el id: ${id} no existe`);
    }

}

module.exports = {
    emailExists,
    userExistsById
}