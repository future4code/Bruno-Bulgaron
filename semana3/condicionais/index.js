// Exercícios de escrita de código

// EXERCÍCIO 4

// Letra a

// const num1 = Number(prompt("Entre com o primeiro número:"));
// const num2 = Number(prompt("Entre com o segundo número:"));

// if(num1 < num2) {
//     console.log("Ordem decrescente: " + num1 + ", " + num2);
// } else {
//     console.log("Ordem decrescente: " + num2 + ", " + num1);
// };

// (Se colocar dois números iguais, aparece "Ordem decrescente: num1 + num2")
// 
// Letra B

// const num1 = Number(prompt("Entre com o primeiro número:"));
// const num2 = Number(prompt("Entre com o segundo número:"));
// const num3 = Number(prompt("Entre com o terceiro número:"));

// if((num1 < num2) && (num2 < num3)) {
//     console.log("Ordem decrescente: " + num1 + ", " + num2 + ", " + num3);
// } else if ((num1 < num3) && (num3 < num2)){
//     console.log("Ordem decrescente: " + num1 + ", " + num3 + ", " + num2);
// } else if ((num2 < num1) && (num1 < num3)){
//     console.log("Ordem decrescente: " + num2 + ", " + num1 + ", " + num3);
// } else if ((num2 < num3) && (num3 < num1)){
//     console.log("Ordem decrescente: " + num2 + ", " + num3 + ", " + num1);
// } else if ((num3 < num1) && (num1 < num2)){
//     console.log("Ordem decrescente: " + num3 + ", " + num1 + ", " + num2);
// } else if ((num3 < num2) && (num2 < num1)){
//     console.log("Ordem decrescente: " + num3 + ", " + num2 + ", " + num1);
// }
// (Se colocar três números iguais, não aparece nada)
// 
// Letra C
// 
// const num1 = Number(prompt("Entre com o primeiro número:"));
// const num2 = Number(prompt("Entre com o segundo número:"));
// const num3 = Number(prompt("Entre com o terceiro número:"));

// if((num1 === num2) && (num2 === num3)) {
//     console.log("Não é possível utilizar números iguais. Entre com 3 números diferentes.")
//     } else {
//         if((num1 > num2) && (num2 > num3)) {
//             console.log("Ordem decrescente: " + num1 + ", " + num2 + ", " + num3);
//         } else if ((num1 > num3) && (num3 > num2)){
//             console.log("Ordem decrescente: " + num1 + ", " + num3 + ", " + num2);
//         } else if ((num2 > num1) && (num1 > num3)){
//             console.log("Ordem decrescente: " + num2 + ", " + num1 + ", " + num3);
//         } else if ((num2 > num3) && (num3 > num1)){
//             console.log("Ordem decrescente: " + num2 + ", " + num3 + ", " + num1);
//         } else if ((num3 > num1) && (num1 > num2)){
//             console.log("Ordem decrescente: " + num3 + ", " + num1 + ", " + num2);
//         } else if ((num3 > num2) && (num2 > num1)){
//             console.log("Ordem decrescente: " + num3 + ", " + num2 + ", " + num1);
//         };
//     };
// 
// EXERCÍCIO 5
// 
// Letra A
// https://drive.google.com/file/d/14-JC7806EMROsRXhARh30RgC3vyTGFGl/view
// 
// 
// Letra B
// 
// 

// const inicio = prompt("O animal tem osso? (s/n)");

// if(inicio === "s") {
//     console.log("São vertebrados.");

//     let pelos = prompt("Possui pelos? (s/n)");
//     if(pelos === "s") {
//         let mamiferos = prompt("São mamíferos? (s/n)");
//         if(mamiferos === "s") {
//             let racional = prompt("É racional? (s/n)");
//             if(racional === "s") {
//                 console.log("É um ser humano.");
//             } else {
//                 console.log("É um mamífero não humano.");
//             }
//         } else {
//             let penas = prompt("Possui penas? (s/n)");
//             if(penas === "s") {
//                 console.log("É uma ave.");
//             } else {
//                 let animalTerrestre = prompt("É um animal terrestre? (s/n)");
//                 if(animalTerrestre === "s") {
//                     let parteVidaAquatico = prompt("Passa parte da vida em ambiente aquático? (s/n)");
//                     if(parteVidaAquatico === "s") {
//                         console.log("É anfíbio.");
//                     } else {
//                         console.log("É réptil.");
//                     }
//                 } else {
//                     console.log("É Peixe.");
//                 }
//             }
//         }
//     } else {
//         // ANIMAL TERRESTRE
//         let animalTerrestre = prompt("É um animal terrestre? (s/n)");
//             if(animalTerrestre === "s") {
//                 let parteVidaAquatico = prompt("Passa parte da vida em ambiente aquático? (s/n)");
//                 if(parteVidaAquatico === "s") {
//                     console.log("É anfíbio.");
//                 } else {
//                     console.log("É réptil.");
//                 }
//             } else {
//                 console.log("É Peixe.");
//             }
//         };

// } else {
//     console.log("São invertebrados.");
// };