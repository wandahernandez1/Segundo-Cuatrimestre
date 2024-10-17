//clase hijas 
import { Personaje } from "./Personaje";
export class Luchador extends Personaje {

    private golpePoderoso: number;
    private pielEndurecida: number;

    atacar(): void {
        console.log(`${this.getNombre()} se está atacando con un Golpe Poderoso!`);
    }
    defender(): void {
        console.log(`${this.getNombre()} se está defendiendo con su Piel Endurecida!`);
    }

    constructor(nombre: string, nivel: number, puntosDeVida: number, golpePoderoso: number, pielEndurecida: number) {
        super(nombre, nivel, puntosDeVida);
        this.golpePoderoso = golpePoderoso;
        this.pielEndurecida = pielEndurecida;
    }
    getGolpePoderoso(){
        return this.golpePoderoso;
    }
    getPielEndurecida(){
        return this.pielEndurecida;
    }

}