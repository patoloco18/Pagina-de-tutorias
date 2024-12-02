const express = require("express");
const router = express.Router();
const { reservar } = require("../controllers/reservasController");

router.post("/", reservar);

module.exports = router;
