const teste = "Bruno";

function exercicioLogica(teste){
  let quantidade = teste.length;
  let primeiroChar = teste[0];
  let ultimoChar = teste.length - 1;
  
  const resultado = {
    quantidade: quantidade,
    primeiroChar: primeiroChar,
    ultimoChar: ultimoChar
  };
  
  return resultado;
}

console.log(exercicioLogica(teste));
