let array = [2, 4, 6, 7, 10, 0, -3];

function menorNumero (numeros) {
  let indexNumero = 0;

  for (let index = 0; index < numeros.length; index +=1) {
    if (numeros[index] < numeros[indexNumero])[
      indexNumero = index
    ]
  }
  return indexNumero;
}

console.log(menorNumero(array));
