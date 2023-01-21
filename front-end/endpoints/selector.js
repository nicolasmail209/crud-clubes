import { deleteEquipos, getEquipos } from "./getDeleteEquipos.js";
import { getEquipo } from "./getEquipo.js";


async function seleccionarAccion(e) {
  console.log(e.srcElement.id);
  console.log(e.srcElement.innerText);
  if (e.srcElement.innerText === "Ver") {
    getEquipo(e.srcElement.id);
  }
  if (e.srcElement.innerText === "Borrar") {
    deleteEquipos(e.srcElement.id);
  }
}


export { seleccionarAccion };
