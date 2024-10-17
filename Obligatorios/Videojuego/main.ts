
import { Mago } from "./Mago";
import { Arquero } from "./Arquero";
import { Luchador } from "./Luchador";

//Creo instancias de los personajes
const mago = new Mago ("Mago Arturo", 1, 100, 50, 30); //(Nombre Personaje, Nivel Personaje, Puntos Vida, Poder Ataque, Poder Defensa)
const arquero = new Arquero ("Arquero Francis ", 1, 100, 80, 45); 
const luchador = new Luchador ("Luchador Bravo", 1, 100, 40, 76); 

mago.atacar();
arquero.defender();
luchador.atacar();