const fs = require('fs').promises;

// Exercício 4
// Você pode utilizar then e catch , async/await ou uma mistura dos dois para escrever seu código. Procure não utilizar callbacks.
// Crie uma função que leia todos os dados do arquivo e imprima cada personagem no formato id - Nome . Por exemplo: 1 - Homer Simpson .
// Crie uma função que receba o id de uma personagem como parâmetro e retorne uma Promise que é resolvida com os dados da personagem
//  que possui o id informado. Caso não haja uma personagem com o id informado, rejeite a Promise com o motivo "id não encontrado".
// Crie uma função que altere o arquivo simpsons.json retirando os personagens com id 10 e 6.
// Crie uma função que leia o arquivo simpsons.json e crie um novo arquivo, chamado simpsonFamily.json , contendo as personagens com id de 1 a 4.
// Crie uma função que adicione ao arquivo simpsonFamily.json o personagem Nelson Muntz .
// Crie uma função que substitua o personagem Nelson Muntz pela personagem Maggie Simpson no arquivo simpsonFamily.json .

// function getAllCaracters() {
//   fs.readFile('simpsons.json', 'utf-8')
//     .then(result => {
//       const arr = JSON.parse(result)
//       arr.forEach(caracter => console.log(`${caracter.id} - ${caracter.name}`))
//     })
//     .catch(error => console.log(error.message))
// }

// getAllCaracters();

// function getCaracterById(id) {
//   return new Promise((resolve, reject) => {
//     try {
//       fs.readFile('simpsons.json', 'utf-8')
//         .then(result => {
//           const caracters = JSON.parse(result)
//           const caracter = caracters.find(personagem => personagem.id == id);
//           if (caracter) return resolve(caracter)
//           else reject(new Error('id não encontrado'))
//         })
//     } catch (error) {
//       throw new Error('arquivo não encontrado')
//     }
//   })
// }

// getCaracterById(3)
//   .then(result => console.log(result))
//   .catch(error => console.log(error.message));


// Crie uma função que altere o arquivo simpsons.json retirando os personagens com id 10 e 6.
// async function deleteIdSixAndTen() {
//   try {
//     const json = await fs.readFile('simpsons.json', 'utf-8');
//     const filteredJSON = JSON.parse(json).filter(personagem => personagem.id != 6 && personagem.id != 10)
//     try {
//       await fs.writeFile('simpsons.json', JSON.stringify(filteredJSON))
//     } catch (error) {
//       console.log(error);
//     }
//   } catch (error) {
//     console.log(error);
//   }
// }

// deleteIdSixAndTen()

// Crie uma função que leia o arquivo simpsons.json e crie um novo arquivo, chamado simpsonFamily.json , contendo as personagens com id de 1 a 4.

// async function createSimpsonFamily() {
//   try {
//     const json = await fs.readFile('simpsons.json', 'utf-8');
//     const filteredJSON = JSON.parse(json).filter(personagem => personagem.id <= 4 && personagem.id >= 1)
//     try {
//       await fs.writeFile('simpsonFamily.json', JSON.stringify(filteredJSON))
//     } catch (error) {
//       console.log(error);
//     }
//   } catch (error) {
//     console.log(error);
//   }
// }

// createSimpsonFamily()

// Crie uma função que adicione ao arquivo simpsonFamily.json o personagem Nelson Muntz .
async function addNelsonToSimpsonFamily() {
  try {
    const json = await fs.readFile('simpsons.json', 'utf-8');
    const simpsonFamily = await fs.readFile('simpsonFamily.json', 'utf-8');
    const selectedCaracter = JSON.parse(json).filter(personagem => personagem.name.includes('Nelson Muntz'));
    const newSimpsonFamily = JSON.parse(simpsonFamily)
    newSimpsonFamily.push(selectedCaracter[0]);
    try {
      await fs.writeFile('simpsonFamily.json', JSON.stringify(newSimpsonFamily));
      console.log('Personagem adicionado');
    } catch (error) {
      console.log(error);
    }
  } catch (error) {
    console.log(error);
  }
}

addNelsonToSimpsonFamily();

// Crie uma função que substitua o personagem Nelson Muntz pela personagem Maggie Simpson no arquivo simpsonFamily.json .
async function updateSimpsonFamily() {
  try {
    const json = await fs.readFile('simpsons.json', 'utf-8');
    const simpsonFamily = await fs.readFile('simpsonFamily.json', 'utf-8');
    const selectedCaracter = JSON.parse(json).filter(personagem => personagem.name.includes('Maggie Simpson'));
    const newSimpsonFamily = JSON.parse(simpsonFamily).filter(personagem => !personagem.name.includes('Nelson Muntz'));
    newSimpsonFamily.push(selectedCaracter[0])
    try {
      await fs.writeFile('simpsonFamily.json', JSON.stringify(newSimpsonFamily));
      console.log('Personagem adicionado');
    } catch (error) {
      console.log(error);
    }
  } catch (error) {
    console.log(error);
  }
}

updateSimpsonFamily();