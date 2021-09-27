// 1

const fatorial = num1 => {
  let sum = 1;
  for (let index = num1; index >= 1; index -= 1) {
    sum *= index;
  }
  return sum;
}

console.log(fatorial(4));

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

let btn = document.getElementById('click-counter');
let counter = document.getElementById('counter');
let x = 0;

btn.addEventListener('click', () => {
  x +=1;
  counter.innerText = x;
})

4;

const replaceXString = (param1, param2) => {
  return param1.replace('x', param2);
}

const array = ["CSS", "HTML", "JS", "REACT", "NODE.JS"]

function buildSkillsPhrase () {
  const func1 = replaceXString(`Tryber x aqui!
  
  Tudo bem?`,"Alberto");

  let result = `${func1}

  Minhas cinco principais habilidades são:`

  array.forEach((skill) =>
  result += `

  - ${skill}`)

  result += `

  #goTrybe`

  return result
}

console.log(buildSkillsPhrase());