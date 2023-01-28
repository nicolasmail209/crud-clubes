import { crearFormularioPost } from './postEquipoAyudantes.js';

async function postEquipo(tla) {
    //const equipo = await traerEquipo(tla);
    //const datosEquipo = extraerDatos(equipo);
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
    crearFormularioPost();
    
    

    
  }

export { postEquipo };