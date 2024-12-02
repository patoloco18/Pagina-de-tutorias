const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");

// Configuración
dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.json());

// Rutas
const authRoutes = require("./routes/authRoutes");
const reservasRoutes = require("./routes/reservasRoutes");
const disponibilidadRoutes = require("./routes/disponibilidadRoutes");

app.use("/auth", authRoutes);
app.use("/reservas", reservasRoutes);
app.use("/disponibilidad", disponibilidadRoutes);

// Puerto del servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en https://localhost:${PORT}`);
});
