const db = require("../models/db");

// Controlador para agregar disponibilidad
exports.agregarDisponibilidad = (req, res) => {
  const { profesor_id, fecha, hora_inicio, hora_fin, capacidad_disponible } = req.body;

  const consulta = `
    INSERT INTO Disponibilidad (profesor_id, fecha, hora_inicio, hora_fin, capacidad_disponible)
    VALUES (?, ?, ?, ?, ?)
  `;

  db.query(
    consulta,
    [profesor_id, fecha, hora_inicio, hora_fin, capacidad_disponible],
    (err) => {
      if (err) {
        return res.status(500).json({ message: "Error al agregar disponibilidad", error: err });
      }
      res.status(200).json({ message: "Disponibilidad agregada con éxito" });
    }
  );
};

// Controlador para listar la disponibilidad
exports.listarDisponibilidad = (req, res) => {
  const { profesor_id } = req.params;

  const consulta = `
    SELECT * FROM Disponibilidad WHERE profesor_id = ?
  `;

  db.query(consulta, [profesor_id], (err, resultados) => {
    if (err) {
      return res.status(500).json({ message: "Error al obtener disponibilidad", error: err });
    }
    res.status(200).json(resultados);
  });
};
