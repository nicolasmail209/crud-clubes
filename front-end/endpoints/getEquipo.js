import { traerEquipo, extraerDatos, crearFormulario, mostrarFormulario } from './getEquipoAyudantes.js';

async function getEquipo(tla) {
    const equipo = await traerEquipo(tla);
    const datosEquipo = extraerDatos(equipo);
    crearFormulario(datosEquipo)
    
  }

export { getEquipo };