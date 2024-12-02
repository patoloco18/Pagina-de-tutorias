const db = require("./db");

exports.crearReserva = (reservaData, callback) => {
  const consulta = `
    INSERT INTO Reservas (fecha_reserva, hora_reserva, estudiante_id)
    VALUES (?, ?, ?)
  `;

  db.query(consulta, [reservaData.fecha, reservaData.hora, reservaData.estudiante_id], callback);
};

exports.obtenerReservas = (profesor_id, callback) => {
  const consulta = `
    SELECT * FROM Reservas WHERE profesor_id = ?
  `;

  db.query(consulta, [profesor_id], callback);
};
