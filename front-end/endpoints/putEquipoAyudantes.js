
function traerEquipo(tla) {
    return fetch(`http://localhost:8080/equipos/${tla}`)
      .then((response) => response.json())
      .then((data) => data);
  }
  
  function extraerDatos(equipo) {
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
                datosCompetencia[`activeCompetitions-area${propiedadArea}`] =
                  competencia["area"][propiedadArea];
              }
  
              continue;
            }
  
            datosCompetencia[`activeCompetitions-${propiedad}`] = competencia[propiedad];
          }
  
          competencias.push(datosCompetencia);
        }
  
        datosEquipo[propiedad] = competencias;
        continue;
      }
  
      
        if (propiedad === "squad") {
            const jugadores = [];
            for (const jugador of equipo["squad"]) {
              const datosJugador = {};
              for (const propiedad in jugador) {
                datosJugador[`squad-${propiedad}`] = jugador[propiedad];
              }
      
              jugadores.push(datosJugador);
            }
      
            datosEquipo[propiedad] = jugadores;
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
  
    const $li = document.createElement("li");
    const $actualizarEquipo = document.createElement("button");
    $actualizarEquipo.id = "actualizarEquipo";
    $actualizarEquipo.innerText = "Actualizar equipo";
    $actualizarEquipo.onclick = actualizarEquipo;
    $li.appendChild($actualizarEquipo);
    $listaEquipo.appendChild($li);

    
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
  
  function actualizarEquipo(){
    const equipo = {
        id, area: {id, name}, activeCompetitions: [], squad: []
    };
    //const competencia = { id, area: {id, name}, name, code: "a", plan: "a", lastUpdated: "a" };
    //const jugador = {id, name, position: null, dateOfBirth: null, countryOfBirth: null, nationality: null, shirtNumber: null, role: null};
    const $datosInput = document.querySelectorAll("input");
    for(let i = 0; i < $datosInput.length; i++){
        if($datosInput[i].id === "areaid"){
            equipo.area.id = $datosInput[i].value;
        }
        if($datosInput[i].id === "areaname"){
            equipo.area.name = $datosInput[i].value;
        }
        if($datosInput[i].id === "activeCompetitions-id"){
            while(/^activeCompetitions/.test($datosInput[i].id)){
                const competencia = { id, area: {id, name}, name, code: null, plan: null, lastUpdated: null };
                competencia.id = $datosInput[i].value;
                competencia.area.id = $datosInput[i+1].value;
                competencia.area.name = $datosInput[i+2].value;
                competencia.name = $datosInput[i+3].value;
                competencia.code = $datosInput[i+4].value;
                competencia.plan = $datosInput[i+5].value;
                competencia.lastUpdated = $datosInput[i+6].value;
                i = i+7;
                equipo.activeCompetitions.push(competencia);
                console.log(equipo.activeCompetitions);
            }
        }
        if($datosInput[i].id === "squad-id"){
            while(/^squad/.test($datosInput[i].id)){
                const jugador = {id, name, position: null, dateOfBirth: null, countryOfBirth: null, nationality: null, shirtNumber: null, role: null};
                jugador.id = $datosInput[i].value;
                jugador.name = $datosInput[i+1].value;
                jugador.position = $datosInput[i+2].value;
                jugador.dateOfBirth = $datosInput[i+3].value;
                jugador.countryOfBirth = $datosInput[i+4].value;
                jugador.nationality = $datosInput[i+5].value;
                jugador.shirtNumber = $datosInput[i+6].value;
                jugador.role = $datosInput[i+7].value;
                i = i+8;
                equipo.squad.push(jugador);
            }
        }
        equipo[$datosInput[i].id] = $datosInput[i].value;
    }
    
    enviarDatos(equipo);
  }

  
async function enviarDatos(equipo) {
    const datos = equipo;
  
    fetch("http://localhost:8080/equipos/equipo", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(datos),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
  
  export { traerEquipo, extraerDatos, crearFormulario };
  