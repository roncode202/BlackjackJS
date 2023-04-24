/* 
2C = Two of Clubs
2D = Two of Diaminds
2H = Two of Heats
2S = Two of Spedes
*/
 /* note: creamos el deck utilizando una arroy function que dentro de
 este se ejecutara ciclo for tradicional y ciclos for-of  */
let deck = [];
const tipos = [`C`,`D`,`H`,`S`];
const especiales = [`A`,`J`,`Q`,`K`];
let puntosJugador = 0;
let puntosComputadora = 0;
// referencias del HTML
const btnPedir = document.querySelector('#btnPedir');
btnPedir.disabled = true;
const btnDetener = document.querySelector(`#btnDetener`);
btnDetener.disabled = true;
const btnNuevo = document.querySelector(`#btnNuevo`);
const smallPutos = document.querySelectorAll(`small`);
const divCartaJugador = document.querySelector(`#jugador-cartas`);
const divCartaComputadora = document.querySelector(`#computadora-cartas`);

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
    deck =  _.shuffle(deck);
    console.log(deck);
    return deck;
}
// console.log( crearDeck());

/* note: pedimos la ultima carta que tenemos del deck */
const pedirCarta = () =>{
    let carta= deck.pop();
    // console.log(deck);
    return carta;
}
// console.log( pedirCarta());

 /* note: funcion para asignar un valor a la carta obtenida*/
 const valorCarta = (carta) => {
    // eliminamos la ultima letra del string con substring(1,string.lengrh-1)
    let valor = carta.substring(0, carta.length-1);
    // validamos que se le asigne el valor de 11 a la letra A y si no
    // sera solo el valor obtenido.
    let puntos = (isNaN(valor)) ? (valor === `A`) ? 11 : 10 : valor;
    // para convertir un numero de tipo string a entero se multiplica * 1
    return (puntos * 1);
 };
 /* note: turno de la computador */
 const turnoComputadora = () => {
    do {
        const carta = pedirCarta();
        puntosComputadora = puntosComputadora + valorCarta(carta);
        smallPutos[1].innerText = puntosComputadora;
        let addCarta = document.createElement(`img`);
        addCarta.src = `assets/cartas/${carta}.png`;
        addCarta.classList.add(`carta`);
        divCartaComputadora.append(addCarta);
        if (puntosJugador > 21) {
            break;
        }
    } while (puntosComputadora <= puntosJugador);
    // hack: permite ejecutar las lines de codigo dentro de esta
    // despues de una cantidad segundos a definir
    setTimeout(() => {
        mostrarGanador();
    }, 50);
  }

 /* note: eventos */
//  Boton pedir Carta
btnPedir.addEventListener(`click`, () =>{
    const carta = pedirCarta();
    puntosJugador = puntosJugador + valorCarta(carta);
    smallPutos[0].innerText = puntosJugador;
    // creamos el elemento img pero esta en memoria
    let addCarta = document.createElement(`img`);
    addCarta.src = `assets/cartas/${carta}.png`;
    addCarta.classList.add(`carta`);
    divCartaJugador.append(addCarta);
    // logica del juego
    if (puntosJugador > 21) {
        console.warn(`Lo siento mucho, PERDISTE!`);
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora();
        // mostrarGanador();
    }else if (puntosJugador === 21) {
        console.info(`21, genial!`);
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora();
        // mostrarGanador();
    }
});

  btnDetener.addEventListener(`click`, () => {
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora();
})
/* note: logica para mostrar al ganador */
const mostrarGanador = () => {
    if (puntosJugador === puntosComputadora) {
        alert(`Nadie gana ambos estan con ${puntosJugador} puntos!`)
    }else if (puntosComputadora > 21) {
        alert(`Ganaste con ${puntosJugador} puntos!`);
    }else alert(`La computadora Gano con ${puntosComputadora} puntos!`);
}

btnNuevo.addEventListener(`click`, () => {
    deck = [];
    deck = crearDeck();
    puntosComputadora = 0;
    puntosJugador = 0;
    smallPutos[0].innerText = 0;
    smallPutos[1].innerText = 0;
    divCartaComputadora.innerHTML = ``;
    divCartaJugador.innerHTML = ``;
    btnPedir.disabled = false;
    btnDetener.disabled = false;
    // borramos la consola del navegador
    console.clear();
 })