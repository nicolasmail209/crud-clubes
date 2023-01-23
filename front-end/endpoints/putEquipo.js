import { traerEquipo, extraerDatos, crearFormulario } from './putEquipoAyudantes.js';

async function putEquipo(tla) {
    const equipo = await traerEquipo(tla);
    const datosEquipo = extraerDatos(equipo);
    crearFormulario(datosEquipo);
    

    
  }

export { putEquipo };