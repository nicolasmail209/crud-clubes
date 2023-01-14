const fs = require("fs");
const express = require("express");
const servicios = require("./servicios/servicios");

const PUERTO = 8080;
const app = express();

app.use(express.json());

app.use(express.text({ type: "*/*" }));

app.get("/equipos", (req, res) => {
  (async function () {
    try {
      const equiposCadena = await servicios.leerArchivo("datos/equipos.json");
      const equiposObjeto = JSON.parse(equiposCadena);
      res.end(JSON.stringify(equiposObjeto));
    } catch (err) {
      res.status(500);
      res.end("Hubo un error en el servidor");
      console.log("Hubo un error en el try del get: " + err);
    }
  })();
});

app.get("/equipos/:tla", (req, res) => {
  (async function () {
    try {
      const equiposCadena = await servicios.leerArchivo(`datos/equipos/${req.params.tla}.json`);
      const equiposObjeto = JSON.parse(equiposCadena);
      res.end(JSON.stringify(equiposObjeto));
    } catch (err) {
      res.status(500);
      res.end("Hubo un error en el servidor");
      console.log("Hubo un error en el try del get: " + err);
    }
  })();
});

app.listen(PUERTO);
console.log("Corriendo...");
