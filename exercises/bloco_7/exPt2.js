// 1

// const fatorial = num1 => {
//   let sum = 1;
//   for (let index = num1; index >= 1; index -= 1) {
//     sum *= index;
//   }
//   return sum;
// }

// console.log(fatorial(4));

//2 

const longestWord = (frase) => {
  let arr = frase.split(' ');
  let biggerWord = '';
  for (let index = 0; index < arr.length; index +=1) {
    if (arr[index].length > biggerWord.length) {
      biggerWord = arr[index]
    }
  }
  return biggerWord
}

console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu'));

// 3

