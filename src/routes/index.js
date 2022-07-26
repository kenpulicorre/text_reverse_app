const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();
const axios = require("axios");

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
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

//---fin Rutas~~~~~~~~~~~~~~~~~~~~~~~~~~~~

module.exports = router;
