  /* note: funcion para asignar un valor a la carta obtenida*/
  /**
   * Funcíon que calcula el valor de la carta
   * @param {String} carta ultima carta asignada al jugador de turno
   * @returns valor de la carta
   */
 export const valorCarta = (carta) => {
    if (!carta) throw new Error(`La carta es necesaria para calcular su valor numérico`)
    // eliminamos la ultima letra del string con substring(1,string.lengrh-1)
    let valor = carta.substring(0, carta.length-1);
    // validamos que se le asigne el valor de 11 a la letra A y si no
    // sera solo el valor obtenido.
    let puntos = (isNaN(valor)) ? (valor === `A`) ? 11 : 10 : valor;
    // para convertir un numero de tipo string a entero se multiplica * 1
    return (puntos * 1);
 };