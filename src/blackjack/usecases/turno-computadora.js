import { acumularPuntos } from "./acumular-puntos";
import { crearCarta } from "./crear-carta";
import { mostrarGanador } from "./mostrar-ganador";
import { pedirCarta } from "./pedir-carta";

  /* note: turno de la computador */
  /**
   * Funcíon en donde esta la lógica del juego
   * @param {Array<Number>} puntosJugadores arreglo que almacena los puntos de los jugadores
   * @param {Array<Number>} puntosHTML arreglo que almacena la posicion del HTMLElement
   * @param {Array<Number>} divCartas  arreglo que almacena la posicion del HTMLElement
   * @param {Array<String>} deck arreglo de strings 
   */
 export const turnoComputadora = (puntosJugadores, puntosHTML, divCartas, deck = []) => {
    let puntosComputadora = 0;
    do {
        const carta = pedirCarta(deck);
        puntosComputadora = acumularPuntos(puntosJugadores, puntosJugadores.length-1, puntosHTML[1], carta);
        crearCarta(carta, divCartas[1]);
        if (puntosJugadores[0] > 21) {
            break;
        };
    } while (puntosComputadora <= puntosJugadores[0]);
    // hack: permite ejecutar las lines de codigo dentro de esta
    // despues de una cantidad segundos a definir
        mostrarGanador(puntosJugadores[0], puntosComputadora)

  };