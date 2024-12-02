const db = require("../models/db");

exports.reservar = (req, res) => {
  const { fecha, hora } = req.body;
  const query = "INSERT INTO Reservas (fecha_reserva, hora_reserva) VALUES (?, ?)";

  db.query(query, [fecha, hora], (err, results) => {
    if (err) {
      res.status(500).json({ message: "Error al realizar la reserva" });
    } else {
      res.status(200).json({ message: "Reserva realizada con éxito" });
    }
  });
};
