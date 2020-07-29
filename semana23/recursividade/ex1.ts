const imprimeNumeros = (numero: number) => {
  if (numero >= 0) {
    imprimeNumeros(numero - 1);
    console.log(numero);
  }
};
