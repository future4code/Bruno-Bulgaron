const teste = "Bruno";

function exercicioLogica2(teste){
  const arrayTeste = [];
  for(let i = 0; i < teste.length; i++){
    arrayTeste.push(teste[i])
  };
  
  return arrayTeste;
}

console.log(exercicioLogica2(teste));
