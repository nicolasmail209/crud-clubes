const fs = require("fs");
const util = require("util");

const leerArchivoPromisificada = util.promisify(fs.readFile);
const escribirArchivoPromisificada = util.promisify(fs.writeFile);
const borrarArchivoPromisificada = util.promisify(fs.unlink);
const listarDirectorioPromisificada = util.promisify(fs.readdir);

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
    throw err;
  }
}

async function actualizarTabla(directorio) {
  try {
    const lista = await listarDirectorioPromisificada(directorio);
    const equipos = [];
    for (const nombreArchivo of lista) {
      const archivoCadena = await leerArchivo(`datos/equipos/${nombreArchivo}`);
      const archivoObjeto = JSON.parse(archivoCadena);

      const equipo = {};
      equipo.id = archivoObjeto.id;
      equipo.area = archivoObjeto.area;
      equipo.name = archivoObjeto.name;
      equipo.shortName = archivoObjeto.shortName;
      equipo.tla = archivoObjeto.tla;
      equipo.crestUrl = archivoObjeto.crestUrl;
      equipo.address = archivoObjeto.address;
      equipo.phone = archivoObjeto.phone;
      equipo.website = archivoObjeto.website;
      equipo.email = archivoObjeto.email;
      equipo.founded = archivoObjeto.founded;
      equipo.clubColors = archivoObjeto.clubColors;
      equipo.venue = archivoObjeto.venue;
      equipo.lastUpdated = archivoObjeto.lastUpdated;

      equipos.push(equipo);
    }

    const equiposCadena = JSON.stringify(equipos);

    await escribirArchivo("datos/equipos.json", equiposCadena);
    return;
  } catch (err) {
    console.log("Hubo un error en la funcion actualizarTabla " + err);
  }
}

module.exports = {
  leerArchivo,
  escribirArchivo,
  borrarArchivo,
  actualizarTabla,
};
