
function traerEquipo(tla) {
  return fetch(`http://localhost:8080/equipos/${tla}`)
    .then((response) => response.json())
    .then((data) => data);
}

function extraerDatos(equipo) {
  //const $listaEquipo = document.querySelector("#listaEquipo");
  //const $id = document.createElement("li");
  const datosEquipo = {};
  for (const propiedad in equipo) {
    if (propiedad === "area") {
      for (const propiedadArea in equipo["area"]) {
        datosEquipo[`area${propiedadArea}`] = equipo["area"][propiedadArea];
      }
      continue;
    }

    if (propiedad === "activeCompetitions") {
      const competencias = [];
      for (const competencia of equipo["activeCompetitions"]) {
        const datosCompetencia = {};
        for (const propiedad in competencia) {
          if (propiedad === "area") {
            for (const propiedadArea in competencia["area"]) {
              datosCompetencia[`area${propiedadArea}`] =
                competencia["area"][propiedadArea];
            }

            continue;
          }

          datosCompetencia[propiedad] = competencia[propiedad];
        }

        competencias.push(datosCompetencia);
      }

      datosEquipo[propiedad] = competencias;
      continue;
    }

    datosEquipo[propiedad] = equipo[propiedad];
  }

  return datosEquipo;
}

function crearFormulario(datosEquipo) {
    const $listaEquipo = document.querySelector("#listaEquipo");
  
  while ($listaEquipo.firstChild) {
    $listaEquipo.removeChild($listaEquipo.firstChild);
  }

  
  for (const propiedad in datosEquipo) {
    if (propiedad === "activeCompetitions") {
      for (const competencia of datosEquipo["activeCompetitions"]) {
        for (const propiedad in competencia) {
          const $li = document.createElement("li");
          const $label = document.createElement("label");
          $label.innerText = propiedad;
          const $input = document.createElement("input");
          $input.type = "text";
          $input.id = propiedad;
          $input.value = competencia[propiedad];
          $li.appendChild($label);
          $li.appendChild($input);
          $listaEquipo.appendChild($li);
        }
      }
      continue;
    }
    if (propiedad === "squad") {
      for (const equipo of datosEquipo["squad"]) {
        for (const propiedad in equipo) {
          const $li = document.createElement("li");
          const $label = document.createElement("label");
          $label.innerText = propiedad;
          const $input = document.createElement("input");
          $input.type = "text";
          $input.id = propiedad;
          $input.value = equipo[propiedad];
          $li.appendChild($label);
          $li.appendChild($input);
          $listaEquipo.appendChild($li);
        }
      }
      continue;
    }
    const $li = document.createElement("li");
    const $label = document.createElement("label");
    $label.innerText = propiedad;
    const $input = document.createElement("input");
    $input.type = "text";
    $input.id = propiedad;
    $input.value = datosEquipo[propiedad];
    $li.appendChild($label);
    $li.appendChild($input);
    $listaEquipo.appendChild($li);
  }
  return;
}


export { traerEquipo, extraerDatos, crearFormulario };
