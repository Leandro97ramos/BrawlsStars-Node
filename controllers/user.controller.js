const { response } = require('express');
const bcrypt = require('bcryptjs');
const  User  = require('../models/user.js');



const getUsers = async (req, res) => {
    const user = await User.findAll();

    res.json(
        user

    );
}


const getUser = async (req, res = response) => {
    const { id } = req.params;
    const  user = await User.findByPk(id);
    if (!user) {
        return res.status(404).json({
            msg: `No existe un usuario con el id ${id}`
        });

    } else {
        res.json({
            user
        });
    }
}

const postUser = async(req, res = response) => {
    const { body } = req;
    
    try {
        const emailExists = await User.findOne({
            where: {
                email: body.email
            }
        });

        if (emailExists) {
            return res.status(400).json({
                msg: 'Ya existe un usuario con el correo ' + body.email
            });
        }else{
            const user = new User(body);
            const salt = bcrypt.genSaltSync();
            user.password = bcrypt.hashSync(body.password, salt);

        
            await user.save();

        }


    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }


}

const putUser = async(req, res = response) => {
    const { id } = req.params;
    const { body } = req;

    const user = new User(body);
    user.id = id;
    user.save();




    res.json({
        msg: 'put API - controller'
    });
}

const deleteUser = async(req, res = response) => {
    const { id } = req.params;

    try {
        // Buscar el usuario por su ID
        const user = await User.findByPk(id);

        if (!user) {
            return res.status(404).json({
                msg: 'Usuario no encontrado'
            });
        }

        // Actualizar el estado del usuario a false
        await user.destroy();
        const userAuth = req.user;

        res.json({
            user,
            userAuth
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Error al eliminar el usuario'
        });
    }
}

module.exports = {
    getUsers,
    getUser,
    postUser,
    putUser,
    deleteUser
}