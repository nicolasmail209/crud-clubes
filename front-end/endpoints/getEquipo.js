import { traerEquipo, extraerDatos, crearFormulario } from './getEquipoAyudantes.js';

async function getEquipo(tla) {

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
    crearFormulario(datosEquipo)
    
  }

export { getEquipo };