const db = require("../models/db");

exports.getUsuarios = (req, res) => {
  const query = "SELECT usuario_id, nombre, correo, rol_id FROM Usuarios";

  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).json({ message: "Error al obtener usuarios" });
    }
    res.status(200).json(results);
  });
};

exports.deleteUsuario = (req, res) => {
  const { id } = req.params;

  const query = "DELETE FROM Usuarios WHERE usuario_id = ?";
  db.query(query, [id], (err, results) => {
    if (err) {
      return res.status(500).json({ message: "Error al eliminar usuario" });
    }
    res.status(200).json({ message: "Usuario eliminado" });
  });
};
