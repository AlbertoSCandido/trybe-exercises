// Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word .
// Valor de teste: 'trybe' e 'be'
// Valor esperado no retorno da função: true
// verificaFimPalavra('trybe', 'be') ;
// Retorno esperado: true
// verificaFimPalavra('joaofernando', 'fernan') ;
// Retorno esperado: false

function endingString(word, ending) {
  let number = word.length - ending.length
  let newString = ''
  for (index = number; index < word.length; index += 1) {
    newString += word[index];
  }
  if (newString === ending) {
    return true;
  } else {
    return false;
  }
}

console.log(endingString('joaofernando', 'fernando'));