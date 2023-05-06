  /* note: funcion para asignar un valor a la carta obtenida*/
  /**
   * Funcíon que calcula el valor de la carta
   * @param {String} carta ultima carta asignada al jugador de turno
   * @returns valor de la carta
   */
 export const valorCarta = (carta) => {
    if (!carta) throw new Error(`La carta es necesaria para calcular su valor numérico`)
    let valor = carta.substring(0, carta.length-1);
    let puntos = (isNaN(valor)) ? (valor === `A`) ? 11 : 10 : valor;
    return (puntos * 1);
 };