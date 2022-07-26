const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();
const axios = require("axios");

//---llamado de DB~~~~~~~~~~~~~~~~~~~~~~~~~~
// const { Pokemon } = require("../db");
//---fi llamado de DB~~~~~~~~~~~~~~~~~~~~~~~~~~

//---funciones~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//---fin funciones~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//---Rutas~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// router.get("/rutax/:id", async (req, res) => {
//   const { name } = req.query;
//   const { id } = req.params;
//   const { nambre, apellido } = req.body;
//   const typeApi = await axios.get("http//urlEndT");
// });

router.get("/", async (req, res) => {
  const { name } = req.query;
  return res.status(200).send("hola mundo");

  if (name) {
  } else {
    // res.status(200).send(pokeTotal);
    res.status(200).send(pokeTotal);
  }
});
//---fin Rutas~~~~~~~~~~~~~~~~~~~~~~~~~~~~

module.exports = router;
