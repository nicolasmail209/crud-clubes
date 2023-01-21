
function extraerValores(equipo) {
  const valores = Object.values(equipo);
  valores[1] = Object.values(valores[1]);
  valores[1] = valores[1].toString();
  return valores;
}

function extraerValoresEquipo(equipo){
    const valores = equipo.id;
    return valores;

}

function limpiarTablaEquipos() {
  const elementos = document.querySelectorAll(".dato");
  elementos.forEach((elemento) => {
    elemento.remove();
  });
}

export { extraerValores, extraerValoresEquipo, limpiarTablaEquipos };
