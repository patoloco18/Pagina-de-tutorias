document.getElementById("reservation").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const fecha = document.getElementById("fecha").value;
    const hora = document.getElementById("hora").value;
  
    if (fecha && hora) {
      fetch("/reservas", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fecha, hora }),
      })
        .then((response) => response.json())
        .then((data) => {
          alert(data.message);
        })
        .catch((error) => {
          alert("Error al reservar la tutoría");
        });
    }
  });
  