import { traerEquipo, extraerDatos } from './getEquipoAyudantes.js';

async function getEquipo(tla) {
    const equipo = await traerEquipo(tla);
    const datosEquipo = extraerDatos(equipo);

    console.log(datosEquipo);
  }

export { getEquipo };