import { traerEquipo, extraerDatos, crearFormulario } from './patchEquipoAyudantes.js';

async function patchEquipo(tla) {
    const equipo = await traerEquipo(tla);
    const datosEquipo = extraerDatos(equipo);
    crearFormulario(datosEquipo);
    

    
  }

export { patchEquipo };