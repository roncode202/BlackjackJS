 /* note: pedimos la ultima carta que tenemos del deck */
 /**
  * Asigna carta al jugador de turno
  * @param {Array<String>} deck arreglo de strings
  * @returns ultima carta del deck
  */
export const pedirCarta = (deck) =>{
    if (!deck) throw new Error(`El deck es necesario`);  
    if (deck.length === 0 ) throw new Error(`El deck esta vacio`);
    let carta = deck.pop();
    return carta;
};