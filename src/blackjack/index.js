// import { crearDeck } from "./usecases/crear-deck";
// import { pedirCarta } from "./usecases/pedir-carta";
// import { valorCarta } from "./usecases/valor-carta";
import { crearDeck, valorCarta, pedirCarta } from "./usecases";
// import crearDeck from "./usecases/crear-deck";

/* hack: patron módulo es una funcion autoinvocada el cual nos genera que
 todos nuestras variables y funciones no sean alcanzadas por e usuario 
 desde la consolo del navegador Web. asiendolo mas seguro.*/
 const miApp = (() => {
  /* hack: hace que JS sea estrico a la hora de evaluar el código */
 'use strict'
 /* 
 2C = Two of Clubs
 2D = Two of Diaminds
 2H = Two of Heats
 2S = Two of Spedes
 */
  /* note: creamos el deck utilizando una arroy function que dentro de
  este se ejecutara ciclo for tradicional y ciclos for-of  */
 let deck = [],
     puntosJugadores = [];
     // puntosComputadora = 0,
     // puntosJugador = 0;

 const tipos = [`C`,`D`,`H`,`S`],
       especiales = [`A`,`J`,`Q`,`K`];
 // referencias del HTML
 const btnPedir = document.querySelector('#btnPedir'),
       btnDetener = document.querySelector(`#btnDetener`),
       btnNuevo = document.querySelector(`#btnNuevo`),
       puntosHTML = document.querySelectorAll(`small`),
       divCartas = document.querySelectorAll(`.divCartas`);
     //   divCartaJugador = document.querySelector(`#jugador-cartas`),
     //   divCartaComputadora = document.querySelector(`#computadora-cartas`);

 btnPedir.disabled = true;
 btnDetener.disabled = true;

 const iniciarJuego = (numJugadores = 2) => {
    deck = crearDeck( tipos, especiales);
     puntosJugadores = [];
     for (let i = 0; i < numJugadores; i++) {
         puntosJugadores.push(0);
     }
     puntosHTML.forEach(elem => elem.innerText = 0);
     divCartas.forEach(elem => elem.innerHTML = ``);
     btnPedir.disabled = false;
     btnDetener.disabled = false;
 }
 


  const acumularPuntos = (turno, carta) => {
     puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta);
     puntosHTML[turno].innerText = puntosJugadores[turno];
     return puntosJugadores[turno];
  }
  const crearCarta = (carta, turno) => {
     let addCarta = document.createElement(`img`);
     addCarta.src = ` assets/cartas/${carta}.png`;
     addCarta.classList.add(`carta`);
     divCartas[turno].append(addCarta);
  }

  /* note: turno de la computador */
  const turnoComputadora = (puntosMinimos) => {
     let puntosComputadora = 0;
     do {
         const carta = pedirCarta(deck);
         puntosComputadora = acumularPuntos(puntosJugadores.length - 1, carta);
         crearCarta(carta, puntosJugadores.length - 1);
         // puntosComputadora = puntosComputadora + valorCarta(carta);
         // puntosHTML[1].innerText = puntosComputadora;

         // let addCarta = document.createElement(`img`);
         // addCarta.src = `assets/cartas/${carta}.png`;
         // addCarta.classList.add(`carta`);
         // divCartaComputadora.append(addCarta);
         if (puntosMinimos > 21) {
             break;
         };
     } while (puntosComputadora <= puntosMinimos);
     // hack: permite ejecutar las lines de codigo dentro de esta
     // despues de una cantidad segundos a definir
         mostrarGanador(puntosMinimos, puntosComputadora)

   };
 
  /* note: eventos */
 //  Boton pedir Carta
 btnPedir.addEventListener(`click`, () =>{
     const carta = pedirCarta(deck);
     let puntosJugador = acumularPuntos(0, carta);
     crearCarta(carta, 0);
     // puntosJugador = puntosJugador + valorCarta(carta);
     // puntosHTML[0].innerText = puntosJugador;
     // creamos el elemento img pero esta en memoria
     // let addCarta = document.createElement(`img`);
     // addCarta.src = `assets/cartas/${carta}.png`;
     // addCarta.classList.add(`carta`);
     // divCartaJugador.append(addCarta);
     // logica del juego
     if (puntosJugador > 21) {
         console.warn(`Lo siento mucho, PERDISTE!`);
         btnPedir.disabled = true;
         btnDetener.disabled = true;
         turnoComputadora(puntosJugador);
         // mostrarGanador();
     }else if (puntosJugador === 21) {
         console.info(`21, genial!`);
         btnPedir.disabled = true;
         btnDetener.disabled = true;
         turnoComputadora(puntosJugador);
         // mostrarGanador();
     }
 });
 
   btnDetener.addEventListener(`click`, () => {
     btnPedir.disabled = true;
     btnDetener.disabled = true;
     turnoComputadora(puntosJugadores[0]);
 });
 /* note: logica para mostrar al ganador */
 const mostrarGanador = (puntosJugador, puntosComputadora) => {
     setTimeout(() => {
         if (puntosJugador === puntosComputadora) {
             alert(`Nadie gana ambos estan con ${puntosJugador} puntos!`)
         }else if (puntosComputadora > 21) {
             alert(`Ganaste con ${puntosJugador} puntos!`);
         }else alert(`La computadora Gano con ${puntosComputadora} puntos!`);
     }, 50);
 };
 
 btnNuevo.addEventListener(`click`, () => {
     // deck = [];
     // deck = crearDeck();
     iniciarJuego();
     // puntosComputadora = 0;
     // puntosJugador = 0;

     // puntosHTML[0].innerText = 0;
     // puntosHTML[1].innerText = 0;
     // divCartaComputadora.innerHTML = ``;
     // divCartaJugador.innerHTML = ``;
     // btnPedir.disabled = false;
     // btnDetener.disabled = false;
     // borramos la consola del navegador
     // console.clear();
  });
   /* hack: para poder dar accesolo solo a nuestro juego 
   y no a toda la logica del juego y codigo se debe retornar
   las funciones que se quiere hacer pubico */
 return {
     nuevoJuego: iniciarJuego
 }
})();
