import { getEquipos } from './getDeleteEquipos.js';
const competencias = [];
const jugadores = [];
let contadorCompetencias = 0;
let contadorJugadores = 0;

function agregarCompetencia(e) {
  const $li = document.querySelector("#competencias");
  const $br = document.createElement("br");

  const $idLabel = document.createElement("label");
  $idLabel.innerText = "id";
  const $idInput = document.createElement("input");
  $idInput.id = "competenciaid" + contadorCompetencias;
  $li.appendChild($idLabel);
  $li.appendChild($idInput);

  const $areaIdLabel = document.createElement("label");
  $areaIdLabel.innerText = "areaId";
  const $areaIdInput = document.createElement("input");
  $areaIdInput.id = "competenciaareaId" + contadorCompetencias;
  $li.appendChild($areaIdLabel);
  $li.appendChild($areaIdInput);
  const $areaNameLabel = document.createElement("label");
  $areaNameLabel.innerText = "areaName";
  const $areaNameInput = document.createElement("input");
  $areaNameInput.id = "competenciaareaName" + contadorCompetencias;
  $li.appendChild($areaNameLabel);
  $li.appendChild($areaNameInput);

  const $nameLabel = document.createElement("label");
  $nameLabel.innerText = "name";
  const $nameInput = document.createElement("input");
  $nameInput.id = "competencianame" + contadorCompetencias;
  $li.appendChild($nameLabel);
  $li.appendChild($nameInput);

  const $codeLabel = document.createElement("label");
  $codeLabel.innerText = "code";
  const $codeInput = document.createElement("input");
  $codeInput.id = "competenciacode" + contadorCompetencias;
  $li.appendChild($codeLabel);
  $li.appendChild($codeInput);

  const $planLabel = document.createElement("label");
  $planLabel.innerText = "plan";
  const $planInput = document.createElement("input");
  $planInput.id = "competenciaplan" + contadorCompetencias;
  $li.appendChild($planLabel);
  $li.appendChild($planInput);

  const $lastUpdatedLabel = document.createElement("label");
  $lastUpdatedLabel.innerText = "lastUpdated";
  const $lastUpdatedInput = document.createElement("input");
  $lastUpdatedInput.id = "competencialastUpdated" + contadorCompetencias;
  $li.appendChild($lastUpdatedLabel);
  $li.appendChild($lastUpdatedInput);
  $li.appendChild($br);

  contadorCompetencias++;
}
function agregarJugador() {
  function agregarLabelInput(campo) {
    const labelInput = {};
    labelInput[`$${campo}Label`] = document.createElement("label");
    labelInput[`$${campo}Label`].innerText = campo;
    labelInput[`$${campo}Input`] = document.createElement("input");
    labelInput[`$${campo}Input`].id = "jugador" + campo + contadorJugadores;
    
    $li.appendChild(labelInput[`$${campo}Label`]);
    $li.appendChild(labelInput[`$${campo}Input`]);
  }

  const $li = document.querySelector("#jugadores");
  const $br = document.createElement("br");

  agregarLabelInput("id");
  agregarLabelInput("name");
  agregarLabelInput("position");
  agregarLabelInput("dateOfBirth");
  agregarLabelInput("countryOfBirth");
  agregarLabelInput("nationality");
  agregarLabelInput("shirtNumber");
  agregarLabelInput("role");

  $li.appendChild($br);
  contadorJugadores++;
}

function crearFormularioPut() {
 
  const $formularioPost = document.querySelector("#formularioPost");

  const $agregarEquipoButton = document.createElement("button");
  $agregarEquipoButton.innerText = "Agregar Equipo";
  const $agregarEquipoLi = document.createElement("li");
  $agregarEquipoButton.onclick = agregarEquipo;
  $agregarEquipoLi.appendChild($agregarEquipoButton);
  $formularioPost.appendChild($agregarEquipoLi);

  function agregarLi(campo) {
    const li = {};
    li[`$${campo}Label`] = document.createElement("label");
    li[`$${campo}Input`] = document.createElement("input");
    li[`$${campo}Li`] = document.createElement("li");
    li[`$${campo}Label`].innerText = campo;
    li[`$${campo}Input`].id = campo;
    li[`$${campo}Li`].appendChild(li[`$${campo}Label`]);
    li[`$${campo}Li`].appendChild(li[`$${campo}Input`]);
    $formularioPost.appendChild(li[`$${campo}Li`]);
  }

  agregarLi("id");
  agregarLi("areaId");
  agregarLi("areaName");

  const $agregarCompetenciaButton = document.createElement("button");
  $agregarCompetenciaButton.innerText = "Agregar competencia";
  const $agregarCompetenciaLi = document.createElement("li");
  $agregarCompetenciaLi.id = "competencias";
  $agregarCompetenciaButton.onclick = agregarCompetencia;
  $agregarCompetenciaLi.appendChild($agregarCompetenciaButton);
  $formularioPost.appendChild($agregarCompetenciaLi);

  agregarLi("name");
  agregarLi("shortName");
  agregarLi("tla");
  agregarLi("crestUrl");

  {/* <form action="/profile" method="post" enctype="multipart/form-data">
  <input type="file" name="avatar" />
  </form> 
var f = document.createElement("form");
f.setAttribute('method',"post");
f.setAttribute('action',"submit.php");

var i = document.createElement("input"); //input element, text
i.setAttribute('type',"text");
i.setAttribute('name',"username");

var s = document.createElement("input"); //input element, Submit button
s.setAttribute('type',"submit");
s.setAttribute('value',"Submit");



*/}
  const $formularioImagen = document.createElement("form");
  $formularioImagen.id = "formularioImagen";
  $formularioImagen.setAttribute("action", "http://localhost:8080/equipos/equipo");
  $formularioImagen.setAttribute("method", "post");
  $formularioImagen.setAttribute("enctype", "multipart/form-data");

  const $agregarImagenButton = document.createElement("input");
  $agregarImagenButton.innerText = "Agregar imagen";
  $agregarImagenButton.type = "file";
  $agregarImagenButton.id = "imagen";
  $agregarImagenButton.name = "imagen";

  const $submitButton = document.createElement("button");
  $submitButton.type = "submit";

  const $agregarImagenLi = document.createElement("li");
  $formularioImagen.appendChild($agregarImagenButton);
  $formularioImagen.appendChild($submitButton);
  $agregarImagenLi.appendChild($formularioImagen);
  $formularioPost.appendChild($agregarImagenLi);

  agregarLi("address");
  agregarLi("phone");
  agregarLi("website");
  agregarLi("email");
  agregarLi("founded");
  agregarLi("clubColors");
  agregarLi("venue");

  const $agregarJugadorButton = document.createElement("button");
  $agregarJugadorButton.innerText = "Agregar jugador";
  const $agregarJugadorLi = document.createElement("li");
  $agregarJugadorLi.id = "jugadores";
  $agregarJugadorButton.onclick = agregarJugador;
  $agregarJugadorLi.appendChild($agregarJugadorButton);
  $formularioPost.appendChild($agregarJugadorLi);

  agregarLi("lastUpdated");
}

async function agregarEquipo() {
  const equipo = {
    id: null,
    area: { id, name },
    activeCompetitions: [],
    squad: [],
  };
  //const competencia = { id, area: {id, name}, name, code: "a", plan: "a", lastUpdated: "a" };
  //const jugador = {id, name, position: null, dateOfBirth: null, countryOfBirth: null, nationality: null, shirtNumber: null, role: null};
  const $datosInput = document.querySelectorAll("input");
  console.log($datosInput);
  for (let i = 0; i < $datosInput.length; i++) {
    //equipo[$datosInput[i].id] = $datosInput[i].value;

    /* if($datosInput[i].id === "imagen"){
      console.log("entro");
      continue;
    } */
    if ($datosInput[i].id === "areaId") {
      equipo.area.id = $datosInput[i].value;
      console.log("entro");
    }
    if ($datosInput[i].id === "areaName") {
      equipo.area.name = $datosInput[i].value;
    }
    if (/^competencia/.test($datosInput[i].id)) {
      while (/^competencia/.test($datosInput[i].id)) {
        //while (i < ($datosInput.length - 1)) {
        const competencia = {
          id,
          area: { id, name },
          name,
          code: null,
          plan: null,
          lastUpdated: null,
        };
        competencia.id = $datosInput[i].value;
        competencia.area.id = $datosInput[i + 1].value;
        competencia.area.name = $datosInput[i + 2].value;
        competencia.name = $datosInput[i + 3].value;
        competencia.code = $datosInput[i + 4].value;
        competencia.plan = $datosInput[i + 5].value;
        competencia.lastUpdated = $datosInput[i + 6].value;
        i = i + 7;
        equipo.activeCompetitions.push(competencia);
        //console.log(equipo.activeCompetitions);
      }
    }
    
     if (/^jugador/.test($datosInput[i].id)) {
       while (i < ($datosInput.length - 1)) {
        
         const jugador = {
          id,
          name,
          position: null,
          dateOfBirth: null,
          countryOfBirth: null,
          nationality: null,
          shirtNumber: null,
          role: null,
        };
        jugador.id = $datosInput[i].value;
        jugador.name = $datosInput[i + 1].value;
        jugador.position = $datosInput[i + 2].value;
        jugador.dateOfBirth = $datosInput[i + 3].value;
        jugador.countryOfBirth = $datosInput[i + 4].value;
        jugador.nationality = $datosInput[i + 5].value;
        jugador.shirtNumber = $datosInput[i + 6].value;
        jugador.role = $datosInput[i + 7].value;
        i = i + 8;
        equipo.squad.push(jugador); 
      } 
    } 
    console.log("valor de i " + i);
    console.log(equipo);
    equipo[$datosInput[i].id] = $datosInput[i].value;
  }
  console.log(equipo);
  if("competenciaid0" in equipo){
    delete equipo["competenciaid0"];
  }
  if("jugadorid0" in equipo){
    delete equipo["jugadorid0"];
  }
  if("areaId" in equipo){
    delete equipo["areaId"];
  }
  if("areaName" in equipo){
    delete equipo["areaName"];
  }
  if("imagen" in equipo){
    delete equipo["imagen"];
  }
  console.log(equipo);
  await enviarDatos(equipo);
  //console.log(equipo);
  enviarImagen(equipo.tla);
}

async function enviarDatos(equipo) {
  const datos = equipo;

  console.log(datos);

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
      //enviarImagen();
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

async function enviarImagen(tla){

  if(document.querySelector("#imagen").value !== ""){
  const $input = document.createElement("input");
  $input.type = "text";
  $input.value = tla;
  $input.name = "tla";
  document.querySelector("#formularioImagen").appendChild($input);
  document.querySelector("#formularioImagen").submit();
  }else{
    window.location.replace("http://localhost:5500/front-end/");
  }
  
  
  
}

//export { crearFormularioPut };



function cargarFormulario(datosEquipo){
    console.log(datosEquipo);
    const $formularioEquipo = document.querySelector("#formularioEquipo");
    for (const key in datosEquipo) {
       if(!(key === "activeCompetitions" || key === "squad")){
          if(key === "areaid"){
            document.querySelector("#areaId").value = datosEquipo[key];
          }
          if(key === "areaname"){
            document.querySelector("#areaName").value = datosEquipo[key];
          }
          if(key !== "areaid" && key !== "areaname"){
            document.querySelector(`#${key}`).value = datosEquipo[key];
          }
        }
        if(key === "activeCompetitions"){
            const $competencias = document.querySelector("#competencias");
            let contadorCompetenciasPut = 0;
            for (const elemento of datosEquipo["activeCompetitions"]) {
                /* elemento.areaId = elemento.areaid;
                delete elemento.areaid;
                elemento.areaName = elemento.areaname;
                delete elemento.areaname; */
                //const $li = document.createElement("li");
                //$li.id = "competencia" + contadorCompetencias;
                for (const key in elemento){
                    const $label = document.createElement("label");
                    $label.innerText = key;
                    const $input = document.createElement("input");
                    $input.type = "text";
                    $input.value = elemento[key];
                    $input.id = "competencia" + key + contadorCompetenciasPut;
                    $competencias.appendChild($label);
                    $competencias.appendChild($input);
                }
                contadorCompetenciasPut++;
            }
        }
        if(key === "squad"){
            const $competencias = document.querySelector("#jugadores");
            let contadorJugadoresPut = 0;
            for (const elemento of datosEquipo["squad"]) {
                /* elemento.areaId = elemento.areaid;
                delete elemento.areaid;
                elemento.areaName = elemento.areaname;
                delete elemento.areaname; */
                //const $li = document.createElement("li");
                //$li.id = "competencia" + contadorCompetencias;
                for (const key in elemento){
                    const $label = document.createElement("label");
                    $label.innerText = key;
                    const $input = document.createElement("input");
                    $input.type = "text";
                    $input.value = elemento[key];
                    $input.id = "jugador" + key + contadorJugadoresPut;
                    $competencias.appendChild($label);
                    $competencias.appendChild($input);
                    
                }
                contadorJugadoresPut++;
            }
        }
        
    }
}

export { cargarFormulario, crearFormularioPut };