//clase hijas
import { Personaje } from "./Personaje";

export class Mago extends Personaje {
    //Ataques
    private tormentaElectrica: number;
    //Defensas
    private escudoMagico: number;

    //Abtraccion traida de la Clase Padre 
    atacar(): void {
        console.log(`${this.getNombre()} se está atacando con una Tormenta Electrica!`);
    }
    defender(): void {
        console.log(`${this.getNombre()} se está defendiendo con su Escudo Magico!`);
    }

    //CONSTRUCTOR: agregando los atributos del personaje mago 
    constructor(nombre: string, nivel: number, puntosDeVida: number, tormentaElectrica: number, escudoMagico: number) {
        super(nombre, nivel, puntosDeVida);
        this.tormentaElectrica = tormentaElectrica;
        this.escudoMagico = escudoMagico;
    }

    getTormentaElectrica() {
        return this.tormentaElectrica;
    }
    getEscudoMagico() {
        return this.escudoMagico;
    }
    
}    