import { deleteEquipos, getEquipos } from "./getDeleteEquipos.js";
import { getEquipo } from "./getEquipo.js";
import { putEquipo } from "./putEquipo.js";
import { patchEquipo } from "./patchEquipo.js";
import { postEquipo } from "./postEquipo.js";


async function seleccionarAccion(e) {
  //console.log(e.srcElement.id);
  //console.log(e.srcElement.innerText);
  if (e.srcElement.innerText === "Ver") {
    getEquipo(e.srcElement.id);
  }
  if (e.srcElement.innerText === "Editar todos los campos") {
    putEquipo(e.srcElement.id);
  }
  if (e.srcElement.innerText === "Editar algunos campos") {
    patchEquipo(e.srcElement.id);
  }
  if (e.srcElement.id === "crearEquipo") {
    postEquipo();
  }
  if (e.srcElement.innerText === "Borrar") {
    deleteEquipos(e.srcElement.id);
  }
}


export { seleccionarAccion };
