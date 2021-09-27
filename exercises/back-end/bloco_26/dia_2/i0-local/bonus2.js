// Crie um script que substitua uma palavra por outra em um arquivo escolhido pela pessoa usuária:
// Pergunte à pessoa usuária qual arquivo ela deseja utilizar.
// Leia o arquivo.
// Caso o arquivo não exista, exiba um erro na tela e encerre a execução do script.
// Caso o arquivo exista, solicite a palavra a ser substituída.
// Solicite a nova palavra, que substituirá a palavra anterior.
// Imprima na tela o conteúdo do arquivo com as palavras já substituídas.
// Pergunte o nome do arquivo de destino.
// Salve o novo arquivo no caminho de destino.

const readline = require('readline-sync');
const fs = require('fs').promises;

async function replaceWord() {
  const fileName = readline.question('Qual arquivo você deseja modificar?\n');
  try {
    const result = await fs.readFile(`${fileName}.txt`, 'utf-8');
    console.log(result);
    const wordToBeReplaced = readline.question('Qual palavra você gostaria de substituir?\n');
    const wordToReplace = readline.question(`Qual palavra você gostaria de substituir por ${wordToBeReplaced}? \n`);
    const newSentence = result.replace(new RegExp(wordToBeReplaced, 'g'), wordToReplace);
    const newFileName = readline.question('Para que arquivo você gostaria de enviar sua nova frase? \n');
    fs.writeFile(newFileName, newSentence);
  } catch {
    console.log('Arquivo inexistente');
    throw new Error('arquivo inexistente')
  }
}

replaceWord();