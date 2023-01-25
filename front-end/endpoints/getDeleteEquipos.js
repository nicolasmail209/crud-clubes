import { extraerValores, extraerValoresEquipo, limpiarTablaEquipos } from './getDeleteEquiposAyudantes.js';
import { seleccionarAccion } from './selector.js';

async function getEquipos() {
  function traerEquipos() {
    return fetch("http://localhost:8080/equipos")
      .then((response) => response.json())
      .then((data) => data);
  }

  function crearTabla(equipos) {
    const $crearEquipo = document.querySelector("#crearEquipo");
    $crearEquipo.onclick = seleccionarAccion;
    
    const $tablaEquipos = document.querySelector("#tablaEquipos");
    limpiarTablaEquipos();
    
    equipos.forEach((equipo) => {
      const $tr = document.createElement("tr");
      $tr.className = "dato";
      const valoresEquipo = extraerValores(equipo);
      valoresEquipo.push(
        "Ver",
        "Borrar",
        "Editar todos los campos",
        "Editar algunos campos"
      );
      valoresEquipo.forEach((valorEquipo) => {
        const $td = document.createElement("td");
        $td.id = valoresEquipo[4];
        $td.onclick = seleccionarAccion;
        const $dato = document.createTextNode(valorEquipo);
        $td.appendChild($dato);
        $tr.appendChild($td);
        $tablaEquipos.appendChild($tr);
      });
    });
  }

  const equipos = await traerEquipos();
  crearTabla(equipos);
}

async function deleteEquipos(tla) {
  const data = { tla: tla };

  fetch("http://localhost:8080/equipos", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
      getEquipos();
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}



export { getEquipos, deleteEquipos };
