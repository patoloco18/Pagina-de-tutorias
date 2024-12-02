const express = require("express");
const { agregarDisponibilidad, listarDisponibilidad } = require("../controllers/disponibilidadController");

const router = express.Router();

// Rutas para manejar disponibilidad
router.post("/", agregarDisponibilidad); // Agregar disponibilidad
router.get("/:profesor_id", listarDisponibilidad); // Listar disponibilidad

module.exports = router;
