/**
 * 
 * @param {String} carta nombre de la carta
 * @param {HTMLElement} turno elemento HTML en donde se creara la carta
 */
export const crearCarta = (carta, divCarta) => {
    let addCarta = document.createElement(`img`);
    addCarta.src = `assets/cartas/${carta}.png`;
    addCarta.classList.add(`carta`);
    divCarta.append(addCarta);
 }
