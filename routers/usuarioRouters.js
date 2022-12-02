const express = require("express");
const usuario = require("../models/usuario");
const usuarioController = require("../controllers/usuariosController")
const router = express.Router();

router.post(
    "/",
    usuarioController.crearUsuario
);


module.exports = router;