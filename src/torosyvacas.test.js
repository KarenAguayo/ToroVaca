import TorosYVacas from "./torosyvacas.js";

describe("TorosYVacas", () => {
  it("No existe coincidencia", () => {
    let tyv = new TorosYVacas("1234");
    tyv.adivinar("6789");
    expect(tyv.obtenerPistas()).toEqual("- - - -");
  });
  it("Coincide la primera posicion", () => {
    let tyv = new TorosYVacas("1234");
    tyv.adivinar("1789");
    expect(tyv.obtenerPistas()).toEqual("! - - -");
  });
  it("Coincide dos o más posiciones", () => {
    let tyv = new TorosYVacas("1234");
    tyv.adivinar("1239");
    expect(tyv.obtenerPistas()).toEqual("! ! ! -");
  });
  it("Coincide dos o más posiciones con codigo de mayor tamaño", () => {
    let tyv = new TorosYVacas("12345");
    tyv.adivinar("12395");
    expect(tyv.obtenerPistas()).toEqual("! ! ! - !");
  });
  /*it("Coincide con un numero", () => {
    let tyv = new TorosYVacas("1234");
    tyv.adivinar("2089");
    expect(tyv.obtenerPistas()).toEqual("* - - -");
  });*/
});
