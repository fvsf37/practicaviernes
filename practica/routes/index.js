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

module.exports = router;
