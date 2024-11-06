const data = require("./data.json");

// Funciones para videojuegos
function getAllVideojuegos() {
  return data.videojuegos;
}

function getVideojuegoById(id) {
  return data.videojuegos.find((juego) => juego.id == id);
}

module.exports = {
  getAllVideojuegos,
  getVideojuegoById,
};
