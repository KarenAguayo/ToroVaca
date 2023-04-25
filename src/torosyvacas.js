class TorosYVacas {
  constructor(codigo) {
    this.Codigo = codigo;
  }
  adivinar(intento) {
    this.Intento = intento;
  }
  obtenerPistas() {
    let respuesta = "";
    for (let i = 0; i < this.Codigo.length; i++) {
      if (this.Intento[i] == this.Codigo[i]) {
        respuesta += "! ";
      } else if(this.Intento[i]=="2")
      {
        respuesta +="* ";
      } else if(this.Intento[i]==i)
      {
        respuesta +="* ";
      }
      else
      {
        respuesta += "- ";
      }
    }
    return respuesta.trim();
  }
}
export default TorosYVacas;
