const fs = require("fs");
const util = require("util");

const leerArchivoPromisificada = util.promisify(fs.readFile);
const escribirArchivoPromisificada = util.promisify(fs.writeFile);

async function leerArchivo(equiposJSON) {
  try {
    const equipos = await leerArchivoPromisificada(equiposJSON, "utf-8");
    return equipos;
  } catch (err) {
    console.log("Hubo un error en la funcion traerEquipos: " + err);
    return err;
  }
}

async function escribirArchivo(equiposJSON, datos){
  try{
    await escribirArchivoPromisificada(equiposJSON, datos);
    return;
  }
  catch(err){
    console.log("Hubo un error en la funcion guardarEquipos " + err);
    throw err;
  }
}


module.exports = {
  leerArchivo,
  escribirArchivo
};
