import { crearFormularioPost } from './postEquipoAyudantes.js';
import { traerEquipo, extraerDatos, crearFormulario } from './getEquipoAyudantes.js';
import { cargarFormulario, crearFormularioPut } from './putEquipoAyudantes.js';

async function putEquipo(tla) {
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
    crearFormularioPut(); //basado en postEquipoAyudantes.js
    cargarFormulario(datosEquipo); //basado en crearFormulario() de getEquipoAyudantes.js
    //actualizarEquipo(); //basado en agregarEquipo() de postEquipoAyudantes.js (con enviarDatos() y enviarImagen())

    
  }

export { putEquipo };