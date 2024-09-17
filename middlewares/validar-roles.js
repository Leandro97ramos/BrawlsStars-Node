const { response } = require("express")


const esAdminRole = async (req, res=response, next) => {

    if (!req.user) {
        return res.status(500).json({
            msg: 'Se quiere verificar el role sin validar el token primero'
        });
    }

    const {role, name} = req.user;

    if (role !== 'ADMIN_ROLE') {
        return res.status(401).json({
            msg: `${name} no es administrador - No puede hacer esto`
        });
    }

    next();
}

const tieneRole = ( ...roles ) => {
    return (req, res=response, next) => {
        console.log(roles, req.user.role);
        if (!req.user) {
            return res.status(500).json({
                msg: 'Se quiere verificar el role sin validar el token primero'
            });
        }

        if (!roles.includes(req.user.role)) {
            return res.status(401).json({
                msg: `El servicio requiere uno de estos roles ${roles}`
            });
        }

        next();
    }
}


module.exports = {
    esAdminRole,
    tieneRole
}   