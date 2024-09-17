const {response} = require('express');
const bcryptjs = require('bcryptjs');
const User = require('../models/user.js');
const {generateJWT} = require('../helpers/generar-jwt.js');


const login =  async(req, res=response) => {
    const {email, password} = req.body;

    try {
        //verificar email 
        const user = await User.findOne({ 
            where: {
                email: email
            }
         });

   
     
        
        if (!user) {
            return res.status(400).json({
                msg: 'Usuario / Password no son correctos - email'
            });
        }


        //verificar si el usuario esta activo
       if (!user.state) {
            return res.status(400).json({
                msg: 'Usuario / Password no son correctos - estado: true'
            });
        }

      
   
        //verificar la contraseña
        const validPassword = bcryptjs.compareSync( req.body.password, user.password );
       


        if (!validPassword) {
            return res.status(400).json({
                msg: 'Usuario / Password no son correctos - password' + password + ' ' + user.password 
            });
        }


        //generar el JWT


        const token = await generateJWT(user.id);


        res.json({
            user,
            token
        });
    
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
        
    }

}


module.exports = {
    login
}