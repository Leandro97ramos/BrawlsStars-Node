const { response } = require('express');

const userGet = (req, res = response) => {

    const {q, name= 'no name', apikey} = req.query;

    res.json({
        msg: 'get API - controlador',
        q,
        name,
        apikey
    });
}

const userPost = (req, res = response) => {
    
    const {nombre, edad} = req.body;


    res.json({
        msg: 'post API - controlador',
        nombre,
        edad
    });
}

const userPut = (req, res = response) => {
    const {id} = req.params;

    res.json({
        msg: 'put API - controlador',
        id
    });
}


const userDelete = (req, res = response) => {

    res.json({
        msg: 'delete API - controlador'
    });
}




module.exports = {
    userGet,
    userPost,
    userPut,
    userDelete
}

