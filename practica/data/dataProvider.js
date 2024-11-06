const data = require("./data.json");

// Funciones para videojuegos
function getAllVideojuegos() {
  return data.videojuegos;
}

function getVideojuegoById(id) {
  return data.videojuegos.find((juego) => juego.id == id);
}

// Funciones para usuarios
function validateUser(email, password) {
  const user = data.usuarios.find(
    (u) => u.email === email && u.password === password
  );
  return user || null;
}

// Funciones para contactos
function getAllContactos() {
  return data.contactos;
}

function addContacto(nombre, email, mensaje, info) {
  data.contactos.push({
    nombre: nombre,
    email: email,
    mensaje: mensaje,
    fecha: new Date().toISOString(),
    info: info,
  });
}

module.exports = {
  getAllVideojuegos,
  getVideojuegoById,
  validateUser,
  getAllContactos,
  addContacto,
};
