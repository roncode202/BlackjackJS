import { shuffle } from "underscore";

/**
 * Funcíon que crea un deck meclado
 * @param {Array<String>} tiposDeCarta ejemplo [`C`,`D`,`H`,`S`]
 * @param {Array<String>} tiposEspeciales ejemplo [`A`,`J`,`Q`,`K`] 
 * @returns retorna un nuevo deck [ ]
 */
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {
    if (!tiposDeCarta || tiposDeCarta === 0) 
        throw new Error(`Tipo de cartas es obligatorio como un array de string`);
    if (!tiposEspeciales || tiposEspeciales === 0) 
        throw new Error(`Tipo especiales es obligatorio como un array de string`);

    let deck = [];
    for (let i = 2; i <= 10; i++) {
        for (const tipo of tiposDeCarta) {
            deck.push(i+tipo);
        };
    };
    for (const tipo of tiposDeCarta) {
        for (const especial of tiposEspeciales) {
            deck.push(especial+tipo);
        };
    };
    /*  note: underscore es una libreria popular con utilidades para
     JS en este caso _.shuffle regresa el deck en diferente orden (barajeado)
     cada que vez q la funcion crearDeck es llamado (esta libreria se debe
     importar en el proyecto descargando el archivo o utilizando el CDN)*/
    return shuffle(deck);
};
