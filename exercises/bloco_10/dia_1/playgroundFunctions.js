// Desafio 1
function compareTrue(value1, value2) {
  return value1 && value2;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(frase) {
  return frase.split(' ');
}

// Desafio 4
function concatName(valor) {
  return `${valor[valor.length - 1]}, ${valor[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function biggestNumber(valor) {
  let number = 0;
  for (let index = 0; index < valor.length; index += 1) {
    if (valor[index] > number) {
      number = valor[index];
    }
  }
  return number;
}

function highestCount(valor) {
  let count = 0;
  let x = biggestNumber(valor);
  for (let index = 0; index < valor.length; index += 1) {
    if (valor[index] === x) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceCast1 = Math.abs(cat1 - mouse);
  let distanceCast2 = Math.abs(cat2 - mouse);
  let winner;

  if (distanceCast1 > distanceCast2) {
    winner = 'cat2';
  } else if (distanceCast2 > distanceCast1) {
    winner = 'cat1';
  } else {
    winner = 'os gatos trombam e o rato foge';
  }
  return winner;
}

// Desafio 8
function fizzBuzz(numberArray) {
  let newArray = [];
  for (let index = 0; index < numberArray.length; index += 1) {
    if (numberArray[index] % 3 === 0 && numberArray[index] % 5 === 0) {
      newArray.push('fizzBuzz');
    } else if (numberArray[index] % 3 === 0) {
      newArray.push('fizz');
    } else if (numberArray[index] % 5 === 0) {
      newArray.push('buzz');
    } else {
      newArray.push('bug!');
    }
  }
  return newArray;
}

// Desafio 9
function encode(string) {
  let newString = '';
  let objeto = { a: '1', e: '2', i: '3', o: '4', u: '5' };
  for (let i = 0; i < string.length; i += 1) {
    if (objeto[string[i]] !== undefined) {
      newString += objeto[string[i]];
    } else {
      newString += string[i];
    }
  }
  return newString;
}

// function encode(string) {
//   let newString = '';
//   for (let i = 0; i < string.length; i += 1) {
//     switch (string[i]) {
//     case 'a':
//       newString += '1';
//       break;
//     case 'e':
//       newString += '2';
//       break;
//     case 'i':
//       newString += '3';
//       break;
//     case 'o':
//       newString += '4';
//       break;
//     case 'u':
//       newString += '5';
//       break;
//     default:
//       newString += string[i];
//     }
//   }
//   return newString;
// }
// console.log(encode('hi there!'));

function decode(string) {
  let newString = '';
  let objeto = { 1: 'a', 2: 'e', 3: 'i', 4: 'o', 5: 'u' };
  for (let i = 0; i < string.length; i += 1) {
    if (objeto[string[i]] !== undefined) {
      newString += objeto[string[i]];
    } else {
      newString += string[i];
    }
  }
  return newString;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
