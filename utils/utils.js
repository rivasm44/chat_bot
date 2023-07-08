let data = { nombre: "" };

function getNombre() {
  return data.nombre;
}

function setNombre(value) {
  data.nombre = value;
}

console.log(setNombre("Pruebas"));

console.log(getNombre());

const changeTimezone = (date, ianatz) => {
  var invdate = new Date(
    date.toLocaleString("en-US", {
      timeZone: ianatz,
    })
  );

  var diff = date.getTime() - invdate.getTime();

  return new Date(date.getTime() - diff);
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

module.exports = { dateFormat };
