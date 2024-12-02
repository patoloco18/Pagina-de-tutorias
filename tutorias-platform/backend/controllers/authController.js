const jwt = require("jsonwebtoken");
const db = require("../models/db");
const bcrypt = require("bcrypt");

exports.login = (req, res) => {
  const { correo, contraseña } = req.body;

  const query = "SELECT * FROM Usuarios WHERE correo = ?";
  db.query(query, [correo], async (err, results) => {
    if (err || results.length === 0) {
      return res.status(401).json({ message: "Usuario no encontrado" });
    }

    const usuario = results[0];
    const contraseñaValida = await bcrypt.compare(contraseña, usuario.contraseña);

    if (!contraseñaValida) {
      return res.status(401).json({ message: "Contraseña incorrecta" });
    }

    const token = jwt.sign(
      { id: usuario.usuario_id, rol: usuario.rol_id },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.status(200).json({ token });
  });
};

exports.logout = (req, res) => {
  // Implementación del lado cliente (simplemente eliminar el token del navegador)
  res.status(200).json({ message: "Sesión cerrada" });
};
