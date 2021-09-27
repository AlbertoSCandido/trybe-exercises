// Crie uma função que recebe três parâmetros retorna uma Promise .
// Caso algum dos parâmetros recebidos não seja um número, rejeite a Promise com o motivo "Informe apenas números" .
// Caso todos os parâmetros sejam numéricos, some os dois primeiros e multiplique o resultado pelo terceiro ( (a + b) * c ).
// Caso o resultado seja menor que 50, rejeite a Promise com o motivo "Valor muito baixo"
// Caso o resultado seja maior que 50, resolva a Promise com o valor obtido.

function exerciseOne(n1, n2, n3) {
  const promise = new Promise((resolve, reject) => {
    if(isNaN(n1) || isNaN(n2) || isNaN(n3)) {
      return reject(new Error('Informe apenas números'));
    }

    const result = (n1 + n2) * n3;
    if(result < 50) return reject(new Error('Valor muito baixo'));

    resolve(result);
  });
  return promise;
}

exerciseOne(2, 2, 10)
  .then(result => console.log(result))
  .catch(error => console.log(error.message))