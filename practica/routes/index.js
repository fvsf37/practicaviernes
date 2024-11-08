const express = require("express");
const router = express.Router();
const dataProvider = require("../data/dataProvider.js");

// Ruta para la página de inicio que renderiza "inicio.ejs"
router.get("/", (req, res) => {
  const posts = dataProvider.getAllPosts();
  res.render("inicio", { posts });
});

// Ruta para obtener los detalles de un artículo y renderizar "entrada.ejs"
router.get("/posts/:id", (req, res) => {
  const post = dataProvider.getPostById(req.params.id);
  if (post) {
    res.render("entrada", { post });
  } else {
    res.status(404).render("error", { message: "Artículo no encontrado" });
  }
});

module.exports = router;
