const request = require("supertest");
const app = require("../backend/server");

describe("Pruebas de Rutas", () => {
  it("Debe listar disponibilidad correctamente", async () => {
    const response = await request(app).get("/disponibilidad");
    expect(response.statusCode).toBe(200);
  });

  it("Debe manejar errores de autenticación", async () => {
    const response = await request(app).get("/usuarios").set("Authorization", "");
    expect(response.statusCode).toBe(403);
  });
});
