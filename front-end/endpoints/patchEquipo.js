//import { traerEquipo, extraerDatos, crearFormulario } from './patchEquipoAyudantes.js';
import { traerEquipo, extraerDatos } from './getEquipoAyudantes.js';
import { cargarFormulario, crearFormularioPatch } from './patchEquipoAyudantes.js';

async function patchEquipo(tla) {
  function limpiarListaEquipo() {
    const elementos = document.querySelectorAll("#listaEquipo li");
    elementos.forEach((elemento) => {
      elemento.remove();
    });
  }
  function limpiarFormularioPost() {
    const elementos = document.querySelectorAll("#formularioPost li");
    elementos.forEach((elemento) => {
      elemento.remove();
    });
  }
  limpiarListaEquipo();
  limpiarFormularioPost();

    const equipo = await traerEquipo(tla);
    const datosEquipo = extraerDatos(equipo);
    //crearFormulario(datosEquipo);
    crearFormularioPatch();
    cargarFormulario(datosEquipo);
    

    
  }

export { patchEquipo };