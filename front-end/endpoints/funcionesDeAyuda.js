import { deleteEquipos } from "./endpoints.js";

async function seleccionarAccion(e) {
  console.log(e.srcElement.id);
  console.log(e.srcElement.innerText);
  if (e.srcElement.innerText === "Ver") {
  }
  if (e.srcElement.innerText === "Borrar") {
    deleteEquipos(e.srcElement.id);
  }
}

function extraerValores(equipo) {
  const valores = Object.values(equipo);
  valores[1] = Object.values(valores[1]);
  valores[1] = valores[1].toString();
  return valores;
}

function limpiarTabla() {
  const elementos = document.querySelectorAll(".dato");
  elementos.forEach((elemento) => {
    elemento.remove();
  });
}

export { seleccionarAccion, extraerValores, limpiarTabla };
