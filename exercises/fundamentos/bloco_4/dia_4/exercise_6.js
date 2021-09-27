// function verificaPalindrome(palavra) {
//   let letters = [];
//   let letters2 = [];

//   for (let index = 0; index < palavra.length; index += 1) {
//     letters.push(palavra[index]);  
//   }
//   console.log(letters);
  
//   for (index2 = palavra.length - 1 ; index2 >= 0; index2 -= 1) {
//     letters2.push(palavra[index2])
//   }
//   console.log(letters2);
  
//   if (letters === letters2) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(verificaPalindrome('arara'));
// console.log(verificaPalindrome('desenvolvimento'));
// Exercicio realizado com ajuda do gabarito - aprodundar métodos .split() .reverse() e .join()

function verificaPalindrome(palavra) {
  let arrayLetras = palavra.split('').reverse().join('');
  if (arrayLetras === palavra) {
    return true;
  } else {
    return false;
  }
}
console.log(verificaPalindrome('arara'));
console.log(verificaPalindrome('desenvolvimento'));