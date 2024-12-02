const express = require("express");
const { crearUsuario, buscarUsuario } = require("../controllers/usuarioController");

const router = express.Router();

// Ruta para registrar usuarios
router.post("/register", crearUsuario);

// Ruta para buscar un usuario por correo
router.get("/:correo", buscarUsuario);

module.exports = router;
