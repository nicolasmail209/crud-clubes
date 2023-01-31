const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const multer  = require('multer')
const upload = multer({ dest: './datos/team-crests' })
const servicios = require("./servicios/servicios");
const endpoints = require("./endpoints/endpoints");

const PUERTO = 8080;
const app = express();

app.use(cors());

app.use(express.json());

app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));
app.use(express.urlencoded());

//app.use(express.text({ type: "*/*" }));

app.get("/equipos", (req, res) => {
  endpoints.getEquipos(req, res);
});

app.delete("/equipos", (req, res) => {
  endpoints.deleteEquipos(req, res);
});

app.get("/equipos/:tla", (req, res) => {
  endpoints.getEquipo(req, res);
});

app.post("/equipos/equipo", upload.single('imagen'), (req, res, next) => {
  console.log(req.file);
  endpoints.postEquipo(req, res);
});

app.put("/equipos/equipo", upload.single("imagen"), (req, res, next) => {
  console.log(req.file);
  endpoints.putEquipo(req, res);
});


app.patch("/equipos/equipo", (req, res) => {
  endpoints.patchEquipo(req, res);
});


app.delete("/equipos/equipo", (req, res) => {
  endpoints.deleteEquipo(req, res);
});


app.listen(PUERTO);
console.log("Corriendo...");

