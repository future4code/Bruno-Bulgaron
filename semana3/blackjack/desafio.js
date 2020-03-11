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
// console.log("Bem vindo ao jogo de Blackjack!");

// const carta = comprarCarta();

// let userCarta1 = comprarCarta();
// let userCarta2 = comprarCarta();
// let userSoma = userCarta1.valor + userCarta2.valor;

// let compCarta1 = comprarCarta();
// let compCarta2 = comprarCarta();
// let compSoma = compCarta1.valor + compCarta2.valor;

// if(confirm("Quer iniciar uma nova rodada?")) {

//    while(userCarta1.valor === 11 && userCarta2.valor === 11 || compCarta1.valor === 11 && compCarta2.valor === 11) {
//       userCarta1 = comprarCarta();
//       userCarta2 = comprarCarta();
//       userSoma = userCarta1.valor + userCarta2.valor;

//       compCarta1 = comprarCarta();
//       compCarta2 = comprarCarta();
//       compSoma = compCarta1.valor + compCarta2.valor;
//    }

//    console.log("Usuário - cartas:", userCarta1.texto, userCarta2.texto, "- pontuação:", userSoma);
//    console.log("Computador - cartas:", compCarta1.texto, compCarta2.texto, "- pontuação:", compSoma);
   
//    if(userSoma !== compSoma) {
//       if(userSoma > compSoma) {
//          console.log("O usuário ganhou!");
//       } else {
//          console.log("O computador ganhou!");
//       }
//    } else {
//       console.log("Empate!");
//    };
   
   
//    } else {
//    console.log("O jogo acabou.");
//    };


/* =================================================

   DESAFIO

================================================== */


// let userCartas = [comprarCarta(), comprarCarta()];
// let compCartas = [comprarCarta(), comprarCarta()];

// let userSoma = userCartas[0].valor + userCartas[1].valor;
// let compSoma = compCartas[0].valor + compCartas[1].valor;

// // console.log(userSoma);
// // console.log(compSoma);

// if(confirm("Quer iniciar uma rodada?")) {
//    while(userCartas[0].valor === 11 && userCartas[1].valor === 11 || compCartas[0].valor === 11 && compCartas[1].valor === 11) {

//       userCartas = [comprarCarta(), comprarCarta()];
//       compCartas = [comprarCarta(), comprarCarta()];

//       userSoma = userCartas[0].valor + userCartas[1].valor;
//       compSoma = compCartas[0].valor + compCartas[1].valor;
//    }

//    if(confirm("Suas cartas são " + userCartas[0].texto + " e " + userCartas[1].texto + ". A carta revelada do computador é " + compCartas[0].texto + ". \n" + "Deseja tirar outra carta?")) {
//       userCartas.push(comprarCarta())
//       let novaUserSoma = userSoma + userCartas[userCartas.length - 1].valor

//       if(novaUserSoma === 21) {
         
//          alert("Suas cartas são " + userCartas[0].texto + " e " + userCartas[1].texto + ". A carta revelada do computador é " + compCartas[0].texto + ". \n" + "Sua pontuação é: " + novaUserSoma + " . Você venceu!");
      
//       } else if (novaUserSoma > 21) {
//          alert("Suas cartas são " + userCartas[0].texto + " e " + userCartas[1].texto + ". A carta revelada do computador é " + compCartas[0].texto + ". \n" + "Sua pontuação é: " + novaUserSoma + ". \n" + "A pontuação do computador é: " + compSoma + ". O computador ganhou!");
//       }
//    }




// } else {
//    console.log("O jogo acabou.");
// }