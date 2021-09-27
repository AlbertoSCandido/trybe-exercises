// Crie um script que mostre na tela o conteúdo de um arquivo escolhido pela pessoa usuária:
// Pergunte à pessoa usuária qual arquivo ela deseja ler.
// Leia o arquivo indicado.
// Caso o arquivo não exista, exiba na tela "Arquivo inexistente" e encerre a execução do script.
// Caso o arquivo exista, escreva seu conteúdo na tela.
const readline = require('readline-sync');
const fs = require('fs').promises;

const readFileFunc = async () => {
  const arquivo = await readline.question('Qual arquivo você deseja ler? ');
  try {
    const result = await fs.readFile(`${arquivo}.txt`, 'utf-8');
    console.log(result);
  } catch {
    console.log('Arquivo inexistente');
  }
};

readFileFunc()