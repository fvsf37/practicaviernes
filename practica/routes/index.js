var express = require("express");
var router = express.Router();

const dataProvider = require("../data/dataProvider.js");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

// Ruta para obtener todos los videojuegos y renderizarlos
router.get("/videojuegos", (req, res) => {
  const videojuegos = dataProvider.getAllVideojuegos();
  res.render("videojuegos", { videojuegos });
});

// Ruta para obtener un videojuego por ID y mostrar sus detalles
router.get("/videojuegos/:id", (req, res) => {
  const videojuego = dataProvider.getVideojuegoById(req.params.id);
  if (videojuego) {
    res.render("detalleVideojuego", { videojuego });
  } else {
    res.status(404).render("error", { message: "Videojuego no encontrado" });
  }
});

// Ruta para manejar la validación de usuario
router.post("/login", (req, res) => {
  const { email, password } = req.body;
  const user = dataProvider.validateUser(email, password);
  if (user) {
    res.render("perfil", { user });
  } else {
    res.status(401).render("error", { message: "Credenciales incorrectas" });
  }
});

// Ruta para añadir un nuevo contacto
router.post("/contacto", (req, res) => {
  const { nombre, email, mensaje, info } = req.body;
  dataProvider.addContacto(nombre, email, mensaje, info);
  res.render("mensajeEnviado", { nombre });
});

module.exports = router;
