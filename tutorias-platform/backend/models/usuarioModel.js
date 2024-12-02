const db = require("./db");

exports.crearUsuario = (usuarioData, callback) => {
  const consulta = `
    INSERT INTO Usuarios (nombre, correo, contrasena, rol)
    VALUES (?, ?, ?, ?)
  `;

  db.query(consulta, [usuarioData.nombre, usuarioData.correo, usuarioData.contrasena, usuarioData.rol], callback);
};

exports.buscarUsuarioPorCorreo = (correo, callback) => {
  const consulta = `
    SELECT * FROM Usuarios WHERE correo = ?
  `;

  db.query(consulta, [correo], callback);
};
