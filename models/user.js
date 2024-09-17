const DataTypes = require('sequelize');
const db = require('../db/connection.js');
const User = db.define('User', {
    name:{
        type: DataTypes.STRING,
        required: [true, 'El nombre es obligatorio'],
        allowNull: false
    },
    email:{
        type: DataTypes.STRING,
        required: [true, 'El correo es obligatorio'],
        unique: [true, 'El correo ya existe'],
        allowNull: false
    },
    password:{
        type: DataTypes.STRING,
        required: [true, 'La contraseña es obligatoria'],
        allowNull: false
    },
    img:{
        type: DataTypes.STRING,
    },
    role:{
        type: DataTypes.STRING,
        required: true,
        emun: ['ADMIN_ROLE', 'USER_ROLE']
    },
    state:{
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
});


User.prototype.toJSON = function(){
    const {__v, password,id, ...user } = this.dataValues;
    user.uid = id;
    return user;
}

module.exports = User;