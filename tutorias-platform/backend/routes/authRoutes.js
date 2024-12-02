const express = require("express");
const { loginUsuario, registrarUsuario } = require("../controllers/authController");

const router = express.Router();

// Ruta para iniciar sesión
router.post("/login", loginUsuario);

// Ruta para registrar un usuario
router.post("/register", registrarUsuario);

module.exports = router;
