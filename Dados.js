/*
class Jugador {

    nombre
    caraDado1
    caraDado2

    Jugador(parNombre){
        this.nombre = parNombre;
    }
}

class JuegoDados{
    numeroJuego

    jugador1 // Jugador();
    jugador2 // Jugador();

    tirarDados(){
        this.jugador1.caraDado1 = ();
        this.jugador1.caraDado2 = ();

        this.jugador2.caraDado1 = ();
        this.jugador2.caraDado2 = ();
    }

    determinaGanador(){
        if ( (this.jugador1.caraDado1 + this.jugador1.caraDado2 == 7)
            && (this.jugador2.caraDado1 + this.jugador2.caraDado2 != 7) ) {
           return this.jugador1.nombre
        }
        else if ( (this.jugador2.caraDado1 + this.jugador2.caraDado2 == 7)
            && (this.jugador1.caraDado1 + this.jugador2.caraDado1 != 7) ) {
            return this.jugador2.nombre
        }
        else return "Empate";
    }
}
*/

//Código JavaScript

function Jugador(nombre){
    this.nombre = nombre;
    this.caraDado1 = 0;
    this.caraDado2 = 0;
}

function JuegoDados(numeroJuego, j1, j2){
    this.numeroJuego = numeroJuego;
    this.jugador1 = j1;
    this.jugador2 = j2;

    this.tirarDados = function() {
        this.jugador1.caraDado1 = (); //usar random(1,6)
        this.jugador1.caraDado2 = (); //usar random(1,6)

        this.jugador2.caraDado1 = (); //usar random(1,6)
        this.jugador2.caraDado2 = (); //usar random(1,6)
    }

    this.determinaGanador = function() {
        if ( (this.jugador1.caraDado1 + this.jugador1.caraDado2 == 7)
            && (this.jugador2.caraDado1 + this.jugador2.caraDado2 != 7) ) {
            return this.jugador1.nombre
        }
        else if ( (this.jugador2.caraDado1 + this.jugador2.caraDado2 == 7)
            && (this.jugador1.caraDado1 + this.jugador2.caraDado1 != 7) ) {
            return this.jugador2.nombre
        }
        else return "Empate";
    }
}

let pedro = new Jugador("Pedro Sánchez");
let antonio = new Jugador("Antonio Ramírez");

let juego1 = new JuegoDados(1, pedro, antonio);

juego1.tirarDados();
let ganador = juego1.determinaGanador();
console.log("El ganador del juego 1 es: " + ganador);

//Determinar el primer ganador de 3 juegos y cuantos juegos hubo