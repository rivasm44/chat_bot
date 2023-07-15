let data = { nombre: "" };

function getNombre() {
  return data.nombre;
}

function setNombre(value) {
  data.nombre = value;
}

const changeTimezone = (date, ianatz) => {
  var invdate = new Date(
    date.toLocaleString("en-US", {
      timeZone: ianatz,
    })
  );

  var diff = date.getTime() - invdate.getTime();

  return new Date(date.getTime() - diff);
};

const numeroDeSemana = (fecha) => {
  const DIA_EN_MILISEGUNDOS = 1000 * 60 * 60 * 24,
    DIAS_QUE_TIENE_UNA_SEMANA = 7,
    JUEVES = 4;
  fecha = new Date(
    Date.UTC(fecha.getFullYear(), fecha.getMonth(), fecha.getDate())
  );
  let diaDeLaSemana = fecha.getUTCDay(); // Domingo es 0, sábado es 6
  if (diaDeLaSemana === 0) {
    diaDeLaSemana = 7;
  }
  fecha.setUTCDate(fecha.getUTCDate() - diaDeLaSemana + JUEVES);
  const inicioDelAño = new Date(Date.UTC(fecha.getUTCFullYear(), 0, 1));
  const diferenciaDeFechasEnMilisegundos = fecha - inicioDelAño;
  return (
    Math.ceil(
      (diferenciaDeFechasEnMilisegundos / DIA_EN_MILISEGUNDOS + 1) /
        DIAS_QUE_TIENE_UNA_SEMANA
    ) - 1
  );
};

/*
var here = new Date();
var there = changeTimezone(here, "America/Toronto");

console.log(`Here: ${here.toString()}\nToronto: ${there.toString()}`);
*/

const dateFormat = () => {
  try {
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1;
    let dd = today.getDate();

    if (dd < 10) dd = "0" + dd;
    if (mm < 10) mm = "0" + mm;

    return (formattedToday = dd + "/" + mm + "/" + yyyy);
  } catch (error) {
    console.log(`Error al generar la fecha ---> ${error.message}`);
  }
};

module.exports = { dateFormat, numeroDeSemana };
