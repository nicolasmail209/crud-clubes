const servicios = require("../servicios/servicios");

async function getEquipos(req, res) {
  try {
    const equiposCadena = await servicios.leerArchivo("datos/equipos.json");
    const equiposObjeto = JSON.parse(equiposCadena);
    res.end(JSON.stringify(equiposObjeto));
  } catch (err) {
    res.status(500);
    res.end("Hubo un error en el servidor");
    console.log("Hubo un error en el try del get: " + err);
  }
}

async function deleteEquipos(req, res) {
  try {
    const equipo = {
      tla: req.body.tla,
    };
    await servicios.borrarArchivo(`datos/equipo/${equipo.tla}.json`);
    await servicios.actualizarTabla("datos/equipos");
    res.end(JSON.stringify(equipo));
  } catch (err) {
    res.status(500);
    res.end("Hubo un error en el servidor");
    console.log("Hubo un error en el try del delete: " + err);
  }
}

async function getEquipo(req, res) {
  try {
    const equiposCadena = await servicios.leerArchivo(
      `datos/equipos/${req.params.tla}.json`
    );
    const equiposObjeto = JSON.parse(equiposCadena);
    res.end(JSON.stringify(equiposObjeto));
  } catch (err) {
    res.status(500);
    res.end("Hubo un error en el servidor");
    console.log("Hubo un error en el try del get: " + err);
  }
};

async function postEquipo(req, res) {
  try {
    const equipo = {
      id: req.body.id,
      area: req.body.area,
      activeCompetitions: req.body.activeCompetitions,
      name: req.body.name,
      shortName: req.body.shortName,
      tla: req.body.tla,
      crestUrl: req.body.crestUrl,
      address: req.body.address,
      phone: req.body.phone,
      website: req.body.website,
      email: req.body.email,
      founded: req.body.founded,
      clubColors: req.body.clubColors,
      venue: req.body.venue,
      squad: req.body.squad,
      lastUpdated: req.body.lastUpdated,
    };

    const equipoCadena = JSON.stringify(equipo);
    await servicios.escribirArchivo(
      `datos/equipos/${equipo.tla}.json`,
      equipoCadena
    );
    await servicios.actualizarTabla("datos/equipo");
    res.end(equipoCadena);
  } catch (err) {
    res.status(500);
    res.end("Hubo un error en el servidor");
    console.log("Hubo un error en el try del post: " + err);
  }
};

async function putEquipo(req, res) {
  try {
    const equipo = {
      id: req.body.id,
      area: req.body.area,
      activeCompetitions: req.body.activeCompetitions,
      name: req.body.name,
      shortName: req.body.shortName,
      tla: req.body.tla,
      crestUrl: req.body.crestUrl,
      address: req.body.address,
      phone: req.body.phone,
      website: req.body.website,
      email: req.body.email,
      founded: req.body.founded,
      clubColors: req.body.clubColors,
      venue: req.body.venue,
      squad: req.body.squad,
      lastUpdated: req.body.lastUpdated,
    };

    let equipoCadena = await servicios.leerArchivo(
      `datos/equipos/${equipo.tla}.json`
    );

    const equipoObjeto = JSON.parse(equipoCadena);
    for (const key in equipoObjeto) {
      equipoObjeto[key] = equipo[key];
    }
    equipoCadena = JSON.stringify(equipoObjeto);
    await servicios.escribirArchivo(
      `datos/equipos/${equipo.tla}.json`,
      equipoCadena
    );
    await servicios.actualizarTabla("datos/equipos");
    res.end(equipoCadena);
  } catch (err) {
    res.status(500);
    res.end("Hubo un error en el servidor");
    console.log("Hubo un error en el try del put: " + err);
  }
};

async function patchEquipo(req, res) {
  try {
    const equipo = {
      id: req.body.id,
      area: req.body.area,
      activeCompetitions: req.body.activeCompetitions,
      name: req.body.name,
      shortName: req.body.shortName,
      tla: req.body.tla,
      crestUrl: req.body.crestUrl,
      address: req.body.address,
      phone: req.body.phone,
      website: req.body.website,
      email: req.body.email,
      founded: req.body.founded,
      clubColors: req.body.clubColors,
      venue: req.body.venue,
      squad: req.body.squad,
      lastUpdated: req.body.lastUpdated,
    };
    
    let equipoCadena = await servicios.leerArchivo(
      `datos/equipos/${equipo.tla}.json`
    );

    const equipoObjeto = JSON.parse(equipoCadena);
    for (const key in equipo) {
      if(equipo[key] != undefined){
      equipoObjeto[key] = equipo[key];
      }
      else{
        equipoObjeto[key] = equipoObjeto[key];
      }
    }
    equipoCadena = JSON.stringify(equipoObjeto);
    await servicios.escribirArchivo(
      `datos/equipos/${equipo.tla}.json`,
      equipoCadena
    );
    await servicios.actualizarTabla("datos/equipos");
    res.end(equipoCadena);
  } catch (err) {
    res.status(500);
    res.end("Hubo un error en el servidor");
    console.log("Hubo un error en el try del patch: " + err);
  }
};

async function deleteEquipo(req, res) {
  try {
    const equipo = {
      tla: req.body.tla,
    };
    await servicios.borrarArchivo(`datos/equipos/${equipo.tla}.json`);
    await servicios.actualizarTabla("datos/equipos");
    res.end(JSON.stringify(equipo));
  } catch (err) {
    res.status(500);
    res.end("Hubo un error en el servidor");
    console.log("Hubo un error en el try del delete: " + err);
  }
};

module.exports = {
  getEquipos,
  deleteEquipos,
  getEquipo,
  postEquipo,
  putEquipo,
  patchEquipo,
  deleteEquipo
};
