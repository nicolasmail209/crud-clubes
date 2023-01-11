const fs = require("fs");
const express = require("express");

const PUERTO = 8080;
const app = express();

app.use(express.json());

app.use(express.text({ type: "*/*" }));





app.listen(PUERTO);
