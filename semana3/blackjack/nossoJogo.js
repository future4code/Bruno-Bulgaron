import comprarCarta from './naoMexer.js'
// NÃO REMOVA ESTA LINHA

/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

//  Início
 console.log("Bem vindo ao jogo de Blackjack!");

 const carta = comprarCarta();

 let userCarta1 = comprarCarta();
 let userCarta2 = comprarCarta();
 let userSoma = userCarta1.valor + userCarta2.valor;

 let compCarta1 = comprarCarta();
 let compCarta2 = comprarCarta();
 let compSoma = compCarta1.valor + compCarta2.valor;

 if(confirm("Quer iniciar uma nova rodada?")) {

   console.log("Usuário - cartas:", userCarta1.texto, userCarta2.texto, "- pontuação:", userSoma);
   console.log("Computador - cartas:", compCarta1.texto, compCarta2.texto, "- pontuação:", compSoma);

   if(userSoma !== compSoma) {
      if(userSoma > compSoma) {
         console.log("O usuário ganhou!");
      } else {
         console.log("O computador ganhou!");
      }
   } else {
      console.log("Empate!");
   };


 } else {
   console.log("O jogo acabou.");
 };