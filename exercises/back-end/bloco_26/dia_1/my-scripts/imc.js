function calcIMC(peso, altura) {
  return peso / Math.pow(altura, 2);
}

console.log(calcIMC(66, 1.72));