const jwt = require("jsonwebtoken");

exports.generarToken = (datos) => {
  return jwt.sign(datos, process.env.JWT_SECRET, { expiresIn: "1h" });
};

exports.verificarToken = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET);
};
