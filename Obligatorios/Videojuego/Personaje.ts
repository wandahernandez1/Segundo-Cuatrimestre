//CLASE PADRE

export abstract class Personaje {

    //ATRIBUTOS
    protected nombre: string;
    protected nivel: number = 1;
    protected puntosDeVida: number;

     //ABSTRACCION
    abstract atacar (): void;
    abstract defender (): void;

    //CONSTRUCTOR
    constructor (nombre: string, nivel: number = 1, puntosDeVida: number){
        this.nombre = nombre;
        this.nivel = nivel;
        this.puntosDeVida = puntosDeVida;
    }

    //METODOS
    getNombre (): string{
        return this.nombre;
    }
    getNivel (): number{
        return this.nivel;
    }
    getPuntosDeVida (): number{
        return this.puntosDeVida;
    }

    setNombre (nombre: string): void {
        this.nombre = nombre;
    }
    setNivel (nivel: number): void {
        this.nivel = nivel;
    }
    setPuntosDeVida(puntosDeVida: number): void {
        this.puntosDeVida = puntosDeVida;
    }



}