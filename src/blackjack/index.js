
import { crearDeck, pedirCarta, turnoComputadora, acumularPuntos, crearCarta } from "./usecases";

/* hack: patron módulo es una funcion autoinvocada el cual nos genera que
 todos nuestras variables y funciones no sean alcanzadas por e usuario 
 desde la consolo del navegador Web. asiendolo mas seguro.*/
 const miApp = (() => {
  /* hack: hace que JS sea estrico a la hora de evaluar el código */

 'use strict'
  /* note: creamos el deck utilizando una arroy function que dentro de
  este se ejecutara ciclo for tradicional y ciclos for-of  */
 let deck = [],
     puntosJugadores = [];

 const tipos = [`C`,`D`,`H`,`S`],
       especiales = [`A`,`J`,`Q`,`K`];

 const btnPedir = document.querySelector('#btnPedir'),
       btnDetener = document.querySelector(`#btnDetener`),
       btnNuevo = document.querySelector(`#btnNuevo`),
       puntosHTML = document.querySelectorAll(`small`),
       divCartas = document.querySelectorAll(`.divCartas`);

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
 
  /* note: eventos */
 btnPedir.addEventListener(`click`, () =>{
     const carta = pedirCarta(deck);
     let puntosJugador = acumularPuntos(puntosJugadores,0, puntosHTML[0], carta);
     crearCarta(carta, divCartas[0]);
     if (puntosJugador > 21) {
         console.warn(`Lo siento mucho, PERDISTE!`);
         btnPedir.disabled = true;
         btnDetener.disabled = true;
         turnoComputadora(puntosJugadores,puntosHTML,divCartas, deck);
         // mostrarGanador();
     }else if (puntosJugador === 21) {
         console.info(`21, genial!`);
         btnPedir.disabled = true;
         btnDetener.disabled = true;
         turnoComputadora(puntosJugadores,puntosHTML,divCartas, deck);
         // mostrarGanador();
     }
 });

   btnDetener.addEventListener(`click`, () => {
     btnPedir.disabled = true;
     btnDetener.disabled = true;
     turnoComputadora(puntosJugadores,puntosHTML,divCartas, deck);
 });
 
 btnNuevo.addEventListener(`click`, () => {
     iniciarJuego();
  });
   /* hack: para poder dar accesolo solo a nuestro juego 
   y no a toda la logica del juego y codigo se debe retornar
   las funciones que se quiere hacer pubico */
 return {
     nuevoJuego: iniciarJuego
 }
})();
