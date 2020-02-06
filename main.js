import Modelo from "./modelo.js";
import Vista from "./vista.js";
import Controlador from "./controlador.js";

const modelo = new Modelo();
const controlador = new Controlador(modelo);
const vista = new Vista(controlador);



console.log(modelo.userJokes);


