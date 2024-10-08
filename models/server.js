const express = require('express');
const cors = require('cors');
const db = require('../db/connection.js');

/*
                                  _
                               _ooOoo_
                              o8888888o
                              88" . "88
                              (|-- --|)
                              O\  =  /O
                           ____/`---'\____    
                           .'  \\|     |//  `.
                        /  \\|||  :  |||//  \
                       /  _||||| -:- |||||_  \
                       |   | \\\  -  /'| |   |
                       | \_|  `\`---'//  |_/ |
                       \  .-\__ `-. -'__/-.  /
                     ___`. .'  /--.--\  `. .'___
                  ."" '<  `.___\_<|>_/___.' _> \"".
                 | | :  `- \`. ;`. _/; .'/ /  .' ; |
                 \  \ `-.   \_\_`. _.'_/_/  -' _.' /
       ===========`-.`___`-.__\ \___  /__.-'_.'_.-'================
                               `=-Lean33-=-'
*/


class Server {

    

    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        // Conectar a base de datos
        this.dbConnection();

        // Endpoints
        this.usersRoutePath = '/api/users';
        this.brawlsRoutePath = '/api';
        this.authPath = '/api/auth';

        // Middlewares - Funciones que añaden funcionalidades al webserver
        this.middlewares();

        // Rutas de mi aplicación
        this.routes();
    }

    async dbConnection() {
        try {
            await db.authenticate();
            console.log('DB Online');
        } catch (error) {
            console.log("no conecto !!! error");
            throw new Error('Error a la hora de iniciar la base de datos');
        }
    }


    middlewares() {

        //CORS
        this.app.use(cors());

        // Parseo y lectura del body
        this.app.use(express.json());


        this.app.use(express.urlencoded({ extended: true }));


        // Directorio público
        this.app.use(express.static('public'));
    }


    routes() {

        this.app.use(this.authPath, require('../routes/auth.routes.js'));
        this.app.use(this.usersRoutePath, require('../routes/user.routes.js'));
        this.app.use(this.brawlsRoutePath, require('../routes/brawls.routes.js'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Example app listening on port ${this.port}!`);
        });
    }

}

module.exports = Server;