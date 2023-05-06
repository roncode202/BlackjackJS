import { valorCarta } from "./valor-carta";
/**
 * 
 * @param {Array<Number>} puntosJugador puntos del jugador
 * @param {Number} turno elegir el turno del jugador
 * @param {HTMLElement} puntosHTML elemento en donde mostrar los puntos del jugador
 * @param {String} carta carta asignada al jugador 
 * @returns 
 */
export const acumularPuntos = (puntosJugador, turno, puntosHTML, carta) => {
    puntosJugador [turno]  = puntosJugador [turno] + valorCarta(carta);
    puntosHTML.innerText = puntosJugador [turno];
    return puntosJugador [turno];
 }