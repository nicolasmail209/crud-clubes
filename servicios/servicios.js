const fs = require("fs");
const util = require("util");

const leerArchivoPromisificada = util.promisify(fs.readFile);
const escribirArchivoPromisificada = util.promisify(fs.writeFile);
const borrarArchivoPromisificada = util.promisify(fs.unlink);

async function leerArchivo(equiposJSON) {
  try {
    const equipos = await leerArchivoPromisificada(equiposJSON, "utf-8");
    return equipos;
  } catch (err) {
    console.log("Hubo un error en la funcion leerArchivo: " + err);
    return err;
  }
}

async function escribirArchivo(equiposJSON, datos) {
  try {
    await escribirArchivoPromisificada(equiposJSON, datos);
    return;
  } catch (err) {
    console.log("Hubo un error en la funcion escribirArchivo " + err);
    throw err;
  }
}

async function borrarArchivo(equiposJSON) {
  try {
    await borrarArchivoPromisificada(equiposJSON);
    return;
  } catch (err) {
    console.log("Hubo un error en la funcion borrarArchivo " + err);
  }
}

module.exports = {
  leerArchivo,
  escribirArchivo,
  borrarArchivo
};
