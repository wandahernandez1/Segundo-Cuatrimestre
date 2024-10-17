//clase hijas
import { Personaje} from "./Personaje";

export class Arquero extends Personaje {

    private disparoRapido: number;
    private redCaptura: number;

    atacar(): void {
        console.log(`${this.getNombre()} se está atacando con una Disparo Rapido!`);
    }
    defender(): void {
        console.log(`${this.getNombre()} se está defendiendo con su Red de Captura!`);
    }

    constructor(nombre: string, nivel: number, puntosDeVida: number, disparoRapido: number, redCaptura: number) {
        super(nombre, nivel, puntosDeVida);
        this.disparoRapido = disparoRapido;
        this.redCaptura = redCaptura;
    }

    getDisparoRapido (){
        return this.disparoRapido;
    }
    getRedCaptura (){
        return this.redCaptura;
    }



}