//rutas para auntenticar usuarios
const express= require('express');
const router = express.Router();
const {check} = require ('express-validator');
const authController = require('../controllers/authController');
const auth = require('../middleware/auth');

//Iniciar Sesion
//api/auth
router.post('/',

    authController.auntenticarUsuario

    );

    //Obtiene el usuario autenticado
    router.get('/',
    auth,
    authController.usuarioAutenticado
    )

module.exports = router;
