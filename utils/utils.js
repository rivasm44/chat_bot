let data = { nombre: "" };

function getNombre() {
  return data.nombre;
}

function setNombre(value) {
  data.nombre = value;
}

console.log(setNombre("Pruebas"));

console.log(getNombre());
