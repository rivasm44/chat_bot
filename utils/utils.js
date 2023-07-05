let data = {nombre: ''}
let nombre = {
    get getNombre() {
      return this._nombre;
    },
  
    set setNombre(value) {
      data = value;
      this._nombre = value;
    }
  };