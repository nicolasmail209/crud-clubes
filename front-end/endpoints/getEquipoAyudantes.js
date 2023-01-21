/*
getEquipo(tla){

  equipo = traerEquipo(tla);
  datosEquipo = extraerDatos(equipo);
  formularioEquipo = crearFormulario(datosEquipo);
  mostrar(formularioEquipo);

}
*/
function traerEquipo(tla) {
  return fetch(`http://localhost:8080/equipos/${tla}`)
    .then((response) => response.json())
    .then((data) => data);
}

function extraerDatos(equipo) {
  const $listaEquipo = document.querySelector("#listaEquipo");
  //const $id = document.createElement("li");
  for (const propiedad in equipo) {
    if(propiedad === "area"){
        const $li = document.createElement("li");

        const $labelAreaId = document.createElement("label");
        $labelAreaId.innerText = "area id";
        const $inputAreaId = document.createElement("input");
        $inputAreaId.type = "text";
        $inputAreaId.id = "areaId";
        $inputAreaId.value = equipo[propiedad].id;

        const $labelAreaName = document.createElement("label");
        $labelAreaName.innerText = "area name";
        const $inputAreaName = document.createElement("input");
        $inputAreaName.type = "text";
        $inputAreaName.id = "areaName";
        $inputAreaName.value = equipo[propiedad].name;

        $li.appendChild($labelAreaId);
        $li.appendChild($inputAreaId);
        $li.appendChild($labelAreaName);
        $li.appendChild($inputAreaName);

        $listaEquipo.appendChild($li);
        
        continue;
    }
    if (propiedad === "activeCompetitions") {
      const $li = document.createElement("li");
      const $label = document.createElement("label");
      $label.innerText = propiedad;
      $li.appendChild($label);
      $listaEquipo.appendChild($li);

      /* for (const element of array1) {
        console.log(element);
      } */
      for (const competicion of equipo.activeCompetitions) {
        console.log(competicion);
        for (const propiedad in competicion) {
          const $li = document.createElement("li");
          const $label = document.createElement("label");
          $label.innerText = propiedad;
          const $input = document.createElement("input");
          $input.type = "text";
          $input.id = propiedad;
          $input.value = competicion[propiedad];
          $li.appendChild($label);
          $li.appendChild($input);
          $listaEquipo.appendChild($li);
        }
        
      }
      break;
    }

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
  const datosEquipo = {};
  datosEquipo.id = equipo.id;
  datosEquipo.areaId = equipo.area.id;
  datosEquipo.areaName = equipo.area.name;
  datosEquipo.activeCompetitionsCantidad = equipo.activeCompetitions.length;
  datosEquipo.activeCompetitions = [];
  /* equipo.activeCompetitions.forEach(competencia => {
        const competenciaEnPartes = {};
        competenciaEnPartes.id = competencia.id;
        competenciaEnPartes.areaId = competencia.area.id;
        competenciaEnPartes.areaName = competencia.area.name;
        competenciaEnPartes.name = competencia.name;
        competenciaEnPartes.code = competencia.code;
        competenciaEnPartes.plan = competencia.plan;
        competenciaEnPartes.lastUpdated = competencia.lastUpdated;
        datosEquipo.activeCompetitions.push(competenciaEnPartes);
    }); */
  datosEquipo.name = equipo.name;
  datosEquipo.shortName = equipo.shortName;
  datosEquipo.tla = equipo.tla;
  datosEquipo.crestUrl = equipo.crestUrl;
  datosEquipo.address = equipo.address;
  datosEquipo.phone = equipo.phone;
  datosEquipo.website = equipo.website;
  datosEquipo.email = equipo.email;
  datosEquipo.founded = equipo.founded;
  datosEquipo.clubColors = equipo.clubColors;
  datosEquipo.venue = equipo.venue;
  datosEquipo.squadCantidad = equipo.squad.length;
  datosEquipo.squad = [];
  /* equipo.squad.forEach(jugador => {
        const competenciaEnPartes = {};
        competenciaEnPartes.id = competencia.id;
        competenciaEnPartes.areaId = competencia.area.id;
        competenciaEnPartes.areaName = competencia.area.name;
        competenciaEnPartes.name = competencia.name;
        competenciaEnPartes.code = competencia.code;
        competenciaEnPartes.plan = competencia.plan;
        competenciaEnPartes.lastUpdated = competencia.lastUpdated;
        datosEquipo.activeCompetitions.push(competenciaEnPartes);
    }); */

  return datosEquipo;
}

export { traerEquipo, extraerDatos };
