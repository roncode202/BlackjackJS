/* 
2C = Two of Clubs
2D = Two of Diaminds
2H = Two of Heats
2S = Two of Spedes
*/
 /* note: creamos el deck utilizando una arroy function que dentro de
 este se ejecutara ciclo for tradicional y ciclos for-of  */
let deck = [];
const tipos = [`C`,`D`,`H`,`S`]
const especiales = [`A`,`J`,`Q`,`K`]
const crearDeck = () => {
    for (let i = 2; i <= 10; i++) {
        for (const tipo of tipos) {
            deck.push(i+tipo)
            
        };
    }
    for (const tipo of tipos) {
        for (const especial of especiales) {
            deck.push(especial+tipo)
        }
    }
    /*  note: underscore es una libreria popular con utilidades para
     JS en este caso _.shuffle regresa el deck en diferente orden (barajeado)
     cada que vez q la funcion crearDeck es llamado (esta libreria se debe
     importar en el proyecto descargando el archivo o utilizando el CDN)*/
    return _.shuffle(deck);
}

console.log( crearDeck());
