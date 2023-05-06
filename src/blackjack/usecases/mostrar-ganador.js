/* note: logica para mostrar al ganador */
/**
 * Funcíon que determina al ganador
 * @param {Number} puntosJugador puntos acumulados por el jugador1
 * @param {Number} puntosComputadora puntos acumulados por la computadora
 */
export const mostrarGanador = (puntosJugador, puntosComputadora) => {
    setTimeout(() => {
        if (puntosJugador === puntosComputadora) {
            alert(`Nadie gana ambos estan con ${puntosJugador} puntos!`)
        }else if (puntosComputadora > 21) {
            alert(`Ganaste con ${puntosJugador} puntos!`);
        }else alert(`La computadora Gano con ${puntosComputadora} puntos!`);
    }, 50);
};