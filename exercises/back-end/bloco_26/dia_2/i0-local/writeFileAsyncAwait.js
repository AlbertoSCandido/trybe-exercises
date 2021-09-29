const fs = require('fs').promises;

function main() {
  try {
    fs.writeFile('./meu-arquivo.txt', 'Novo teste');
    console.log('Arquivo escrito com sucesso!');
  } catch (err) {
    console.error(`Erro ao escrever o arquivo: ${err.message}`);
  }
}

main()